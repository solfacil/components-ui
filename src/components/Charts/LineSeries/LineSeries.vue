<script>
import { Line } from 'vue-chartjs';

export default {
  name: 'LineSeries',

  extends: Line,

  props: {
    /** Data label and values */
    series: {
      required: true,
      type: Object,
      validator: function (obj) {
        return 'labels' in obj && 'datasets' in obj;
      },
    },
  },

  data: () => ({
    chartdata: {
      labels: [],
      datasets: [
        {
          backgroundColor: 'rgba(255, 182, 0, 0.64)',
          borderColor: 'transparent',
          type: 'line',
          lineTension: 0,
          order: 2,
          data: [],
        },
      ],
    },

    options: {
      responsive: true,
      legend: {
        display: false,
      },
      layout: {
        padding: {
          bottom: 28,
          top: 24,
        },
      },
      maintainAspectRatio: false,
      scales: {
        xAxes: [
          {
            type: 'time',
            time: {
              min: new Date('2021-05-02 01:00:00'),
              max: new Date('2021-05-02 23:00:00'),
              unit: 'hour',
              unitStepSize: 2,
              displayFormats: { hour: 'H:mm' },
            },
            gridLines: {
              display: false,
              gridLines: true,
              offsetGridLines: true,
            },
            ticks: {
              display: true,
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
              labelString: 'WATTS',
              fontFamily: 'Lato, sans-serif',
              fontSize: '10',
              fontColor: '#999',
            },
            ticks: {
              fontColor: '#666',
              fontSize: '12',
              fontFamily: 'Lato, sans-serif',
              padding: 12,
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
        intersect: false,
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
          title: function (tooltipItem, data) {
            const newDate = new Date(data.labels[tooltipItem[0]['index']]);

            const pad = (num) => {
              let s = String(num);

              if (s.length < 2) {
                s = '0' + s;
              }
              return s;
            };

            return `${newDate.getHours()}:${pad(newDate.getMinutes())}`;
          },
          label: function (tooltipItem, data) {
            return `${data.datasets[0].data[tooltipItem['index']]} W`;
          },
        },
      },
    },
  }),

  watch: {
    series: function () {
      this.chartdata.labels = this.series.labels;
      this.chartdata.datasets[0].data = this.series.datasets;
      this.renderChart(this.chartdata, this.options);
    },
  },

  beforeMount() {
    this.chartdata.labels = this.series.labels;
    this.chartdata.datasets[0].data = this.series.datasets;
  },

  mounted() {
    this.addPlugin({
      afterDraw: (chart) => {
        const ctx = chart.chart.ctx;
        const xAxis = chart.scales['x-axis-0'];
        const yAxis = chart.scales['y-axis-0'];
        ctx.save();
        ctx.textAlign = 'center';
        ctx.font = '22px Lato, sans-serif';

        for (let i = 1; i < 24; i = i + 2) {
          const oldHours = `${chart.data.labels[0].split(' ')[0]} ${this.pad(
            i,
          )}:00:00`;
          const x = xAxis.getPixelForValue(oldHours);

          ctx.fillStyle = '#FFB600';

          chart.data.labels.map((item) => {
            const hour = item.split(' ')[1];

            if (hour === `${this.pad(i)}:00:00`) {
              ctx.fillStyle = '#4CD89D';
              if (chart.data.datasets[0].data[i] === 0) {
                ctx.fillStyle = '#FF7771';
              }
            }
          });

          ctx.fillText('•', x, yAxis.bottom + 36);
        }

        ctx.restore();
      },
    });
    this.renderChart(this.chartdata, this.options);
  },

  methods: {
    pad(num) {
      let s = String(num);

      if (s.length < 2) {
        s = '0' + s;
      }
      return s;
    },
  },
};
</script>
