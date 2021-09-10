<script>
import { Bar } from 'vue-chartjs';

export default {
  name: 'Bar',

  extends: Bar,

  props: {
    /** Data chart bar  */
    dataBar: {
      required: true,
      type: Object,
      validator: function (obj) {
        return 'labels' in obj && 'datasets' in obj && 'status' in obj;
      },
    },

    /** Data chart Line  */
    dataLine: {
      default: () => [],
      type: Array,
      validator: (value) => value.constructor === Array,
    },

    /** Specify the view of the chart: <br/> "month" | "year" */
    view: {
      default: 'month',
      type: String,
      validator: (value) => ['month', 'year'].includes(value.toLowerCase()),
    },
  },

  data: () => ({
    chartdata: {
      labels: [],
      datasets: [],
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
            gridLines: {
              display: false,
              gridLines: true,
              maxBarThickness: 16,
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
              beginAtZero: true,
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
            if (!data.datasets[1].data.length) return;

            return `EST. ${data.datasets[1].data[tooltipItem[0].index]} KWH`;
          },
          title: function (tooltipItem, data) {
            if (window.viewChart === 'month') {
              const newDate = new Date(data.labels[tooltipItem[0]['index']]);

              return new Intl.DateTimeFormat('pt-BR', {
                timeZone: 'America/Sao_Paulo',
              }).format(newDate);
            }

            return window.monthNames[new Date(tooltipItem[0].label).getMonth()];
          },
        },
      },
    },
  }),

  watch: {
    dataBar: function () {
      this.setDataset();
      this.renderChart(this.chartdata, this.options);
    },
  },

  beforeMount() {
    window.viewChart = this.view;
    window.monthNames = this.monthNames;

    this.setDataset();
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

          if (this.view === 'month') {
            ctx.fillText(i + 1, x, yAxis.bottom + 29);

            ctx.fillStyle = {
              online: '#4CD89D',
              offline: '#FFB600',
              disconnected: '#FF7771',
            }[this.dataBar.status[i]];

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
    setDataset() {
      this.chartdata.labels = this.dataBar.labels;
      this.chartdata.datasets.push({
        backgroundColor: 'rgba(255, 182, 0, 0.64)',
        hoverBackgroundColor: 'rgba(102, 102, 102, 0.64)',
        type: 'bar',
        order: 2,
        data: this.dataBar.datasets,
      });

      if (this.dataLine.length) {
        this.chartdata.datasets.push({
          type: 'line',
          borderColor: '#7DD0FF',
          fill: false,
          lineTension: 0.15,
          order: 1,
          borderWidth: 2,
          data: this.dataLine,
        });
      }

      this.chartdata.datasets[0].maxBarThickness =
        this.view === 'month' ? 16 : 32;
      this.options.layout.padding.bottom = this.view === 'month' ? 29 : 19;
    },
  },
};
</script>
