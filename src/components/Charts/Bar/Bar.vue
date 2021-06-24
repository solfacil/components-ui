<script>
import { Bar } from 'vue-chartjs';

export default {
  name: 'Bar',

  extends: Bar,

  props: {
    /** Data chart label and datasets */
    dataChart: {
      required: true,
      type: Object,
      validator: function (obj) {
        return 'labels' in obj && 'datasets' in obj;
      },
    },

    /** Specify the view of the chart: <br/> "day" | "month" */
    view: {
      default: 'day',
      type: String,
      validator: (value) => ['day', 'month'].includes(value.toLowerCase()),
    },
  },

  data: () => ({
    chartdata: {
      labels: [],
      datasets: [
        {
          backgroundColor: 'rgba(255, 182, 0, 0.64)',
          hoverBackgroundColor: 'rgba(102, 102, 102, 0.64)',
          type: 'bar',
          order: 2,
          data: [],
        },
        {
          type: 'line',
          borderColor: '#7DD0FF',
          fill: false,
          lineTension: 0.15,
          order: 1,
          borderWidth: 2,
          data: [],
        },
      ],
    },

    monthNames: [
      'Jan',
      'Fev',
      'Mar',
      'Abr',
      'Mai',
      'Jun',
      'Jul',
      'Aug',
      'Set',
      'Out',
      'Nov',
      'Dez',
    ],

    options: {
      responsive: true,
      legend: {
        display: false,
      },
      layout: {
        padding: {
          bottom: 29,
          top: 24,
        },
      },
      maintainAspectRatio: false,
      scales: {
        xAxes: [
          {
            maxBarThickness: 16,
            gridLines: {
              display: false,
              gridLines: true,
              offsetGridLines: true,
            },
            ticks: {
              display: false,
              beginAtZero: false,
              fontColor: '#666',
              fontSize: '12',
              fontFamily: 'Lato, sans-serif',
            },
          },
        ],
        yAxes: [
          {
            afterFit: function (scale) {
              scale.width = 80;
            },
            scaleLabel: {
              display: true,
              labelString: 'KWH',
              fontFamily: 'Lato, sans-serif',
              fontSize: '10',
              fontColor: '#999',
            },
            ticks: {
              fontColor: '#666',
              fontSize: '12',
              fontFamily: 'Lato, sans-serif',
              padding: 26,
            },
            gridLines: {
              drawBorder: false,
            },
          },
        ],
      },
      elements: {
        point: {
          radius: 0,
        },
      },
      hover: {
        animationDuration: 1,
      },
      tooltips: {
        yAlign: 'bottom',
        xAlign: 'center',
        borderWidth: 1,
        borderColor: '#E0E0E0',
        backgroundColor: 'rgba(255, 255, 255, 1)',
        bodyAlign: 'center',
        bodyFontColor: '#666',
        bodyFontSize: 14,
        bodyFontStyle: '600',
        bodyFontFamily: 'Lato, sans-serif',
        displayColors: false,
        titleFontSize: 10,
        titleAlign: 'center',
        titleFontColor: '#666',
        titleFontFamily: 'Lato, sans-serif',
        titleFontStyle: '400',
        footerFontSize: 10,
        footerFontColor: '#30B4FF',
        footerFontFamily: 'Lato, sans-serif',
        footerFontStyle: '600',
        footerTextAlign: 'center',
        yPadding: 8,
        xPadding: 16,
        custom: function (tooltip) {
          if (!tooltip) return;
          tooltip.displayColors = false;
        },
        callbacks: {
          label: function (tooltipItem, data) {
            return `${data.datasets[0].data[tooltipItem['index']]} kwh`;
          },
          footer: function (tooltipItem, data) {
            return `EST. ${data.datasets[1].data[tooltipItem[0].index]} KWH`;
          },
          title: function (tooltipItem, data) {
            if (window.viewChart === 'day') {
              const newDate = new Date(
                `${data.labels[tooltipItem[0]['index']]} 00:00:00`,
              );

              return new Intl.DateTimeFormat('pt-BR', {
                timeZone: 'America/Sao_Paulo',
              }).format(newDate);
            }

            return window.monthNames[
              new Date(`${tooltipItem[0].label} 00:00:00`).getMonth()
            ];
          },
        },
      },
    },
  }),

  watch: {
    dataChart: function () {
      this.setData();
      this.renderChart(this.chartdata, this.options);
    },
  },

  beforeMount() {
    window.viewChart = this.view;
    window.monthNames = this.monthNames;

    this.setData();
  },

  mounted() {
    this.addPlugin({
      afterDraw: (chart) => {
        const ctx = chart.chart.ctx;
        const xAxis = chart.scales['x-axis-0'];
        const yAxis = chart.scales['y-axis-0'];
        ctx.save();
        ctx.textAlign = 'center';

        chart.data.labels.forEach((l, i) => {
          const x = xAxis.getPixelForValue(l);
          ctx.fillStyle = '#666';
          ctx.font = '12px Lato, sans-serif';

          if (this.view === 'day') {
            ctx.fillText(i + 1, x, yAxis.bottom + 29);

            ctx.fillStyle = '#4CD89D';

            if (this.chartdata.datasets[0].data[i] === 0) {
              ctx.fillStyle = '#FF7771';
            }

            ctx.font = '22px Lato, sans-serif';
            ctx.fillText('•', x, yAxis.bottom + 46);
            return;
          }

          ctx.fillText(
            this.monthNames[new Date(`${l} 00:00:00`).getMonth()],
            x,
            yAxis.bottom + 29,
          );
        });
        ctx.restore();
      },

      beforeDraw: (chart) => {
        const chartInstance = chart,
          ctx = chartInstance.ctx;
        ctx.font = '10px Lato, sans-serif';
        ctx.fillStyle = '#666666';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'bottom';

        chart.data.datasets.forEach(function (dataset, i) {
          if (dataset.type === 'line') return;

          let meta = chartInstance.controller.getDatasetMeta(i);
          meta.data.forEach(function (bar, index) {
            let data = dataset.data[index];

            ctx.fillText(data, bar._model.x, bar._model.y - 4);
          });
        });
      },
    });

    this.renderChart(this.chartdata, this.options);
  },

  methods: {
    setData() {
      this.chartdata.labels = this.dataChart.labels;
      this.chartdata.datasets[0].data = this.dataChart.datasets[0];
      this.chartdata.datasets[1].data = this.dataChart.datasets[1];

      this.options.scales.xAxes[0].maxBarThickness =
        this.view === 'day' ? 16 : 32;

      this.options.layout.padding.bottom = this.view === 'day' ? 29 : 19;
    },
  },
};
</script>
