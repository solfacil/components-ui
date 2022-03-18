<script>
import Chart from 'chart.js';
import { generateChart } from 'vue-chartjs';

Chart.defaults.LineWithLine = Chart.defaults.line;
Chart.controllers.LineWithLine = Chart.controllers.line.extend({
  draw: function (ease) {
    Chart.controllers.line.prototype.draw.call(this, ease);

    if (this.chart.tooltip._active && this.chart.tooltip._active.length) {
      var activePoint = this.chart.tooltip._active[0],
        ctx = this.chart.ctx,
        x = activePoint.tooltipPosition().x,
        topY = this.chart.legend.bottom,
        bottomY = this.chart.chartArea.bottom;

      // draw line
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(x, topY);
      ctx.lineTo(x, bottomY);
      ctx.lineWidth = 1;
      ctx.strokeStyle = 'rgba(102, 102, 102, 0.64)';
      ctx.stroke();
      ctx.restore();
    }
  },
});

const CustomLine = generateChart('custom-line', 'LineWithLine');

export default {
  name: 'LineSeries',

  extends: CustomLine,

  props: {
    /** Data chart label and datasets */
    dataChart: {
      required: true,
      type: Object,
      validator: function (obj) {
        return 'labels' in obj && 'datasets' in obj;
      },
    },

    leftLabelString: {
      type: String,
      default: 'WATTS',
      required: false,
    },

    tooltipPrepend: {
      type: String,
      default: () => '',
      required: false,
    },

    tooltipAppend: {
      type: String,
      default: () => 'W',
      required: false,
    },
  },

  data: () => ({
    chartdata: {
      labels: [],
      datasets: [
        {
          backgroundColor: 'rgba(255, 182, 0, 0.64)',
          borderColor: 'transparent',
          lineTension: 0,
          order: 2,
          data: [],
        },
      ],
    },

    options: {
      hover: {
        animationDuration: 0,
      },
      responsiveAnimationDuration: 0,
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
              min: null,
              max: null,
              display: true,
              beginAtZero: true,
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
      tooltips: {
        intersect: false,
        yAlign: 'bottom',
        xAlign: 'center',
        position: 'nearest',
        enabled: false,
        custom: function (tooltipModel) {
          // Tooltip Element
          var tooltipEl = document.getElementById('chartjs-tooltip');

          // Create element on first render
          if (!tooltipEl) {
            tooltipEl = document.createElement('div');
            tooltipEl.id = 'chartjs-tooltip';
            document.body.appendChild(tooltipEl);
          }

          // Hide if no tooltip
          if (tooltipModel.opacity === 0) {
            tooltipEl.classList.add('disabled');
            return;
          }

          // Set caret Position
          tooltipEl.classList.add('chartjs-tooltip');
          tooltipEl.classList.remove('top');

          // Set Text
          if (tooltipModel.body) {
            const title = tooltipModel.title || [];
            const body = tooltipModel.body.map((item) => item.lines);
            let innerHtml = '';

            title.map((title) => {
              innerHtml += `<span>${title}</span>`;
            });

            body.map((body) => {
              innerHtml += `<strong>${body}</strong>`;
            });

            tooltipEl.innerHTML = innerHtml;
          }

          // `this` will be the overall tooltip
          var position = this._chart.canvas.getBoundingClientRect();

          tooltipEl.style = '';
          tooltipEl.style.left =
            position.left + window.pageXOffset + tooltipModel.caretX + 'px';
          tooltipEl.style.top =
            position.top + window.pageYOffset + tooltipModel.caretY + 'px';
          tooltipEl.classList.remove('disabled');
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
      this.setData();
      this.renderChart(this.chartdata, this.options);
    },
  },

  beforeMount() {
    this.setData();

    this.options.scales.yAxes[0].scaleLabel.labelString = this.leftLabelString;
    this.options.tooltips.callbacks.label = (tooltipItem, data) =>
      `${this.tooltipPrepend} ${data.datasets[0].data[tooltipItem['index']]} ${
        this.tooltipAppend
      }`;

    const currentDate = this.dataChart.labels[0].split('T')[0];
    this.options.scales.xAxes[0].ticks.min = `${currentDate} 01:00`;
    this.options.scales.xAxes[0].ticks.max = `${currentDate} 23:00`;
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
          const oldHours = `${chart.data.labels[0].split('T')[0]}T${this.pad(
            i,
          )}:00:00`;
          const x = xAxis.getPixelForValue(oldHours);
          const index = chart.data.labels.indexOf(oldHours);

          ctx.fillStyle = {
            online: '#4CD89D',
            offline: '#FFB600',
            disconnected: '#FF7771',
          }[this.dataChart.status[index]];

          ctx.fillText('•', x, yAxis.bottom + 36);
        }

        ctx.restore();
      },
    });
    this.renderChart(this.chartdata, this.options);
  },

  methods: {
    setData() {
      this.chartdata.labels = this.dataChart.labels;
      this.chartdata.datasets[0].data = this.dataChart.datasets;
    },

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

<style lang="scss">
.chartjs-tooltip {
  @apply bg-white inline-flex flex-col font-rubik items-center rounded border border-solid border-gray3 absolute duration-200 ease-linear transition-all py-2 px-4;
  transform: translate(-50%, calc(-50% - 36px));

  &:before,
  &:after {
    @apply w-0 h-0 absolute pointer-events-none border-solid border-transparent;
    top: 100%;
    left: 50%;
    content: '';
    transform: translateX(-50%);
  }

  &:after {
    border-top-color: #fff;
    border-width: 6px;
  }

  &:before {
    border-top-color: #e0e0e0;
    border-width: 7px;
  }

  &.disabled {
    @apply opacity-0;
    visibility: hidden;
    transform: translate(-50%, calc(-50% - 26px));
  }

  span {
    @apply text-tiny font-normal uppercase text-grayPrimary leading-tight;

    &.footer {
      @apply text-blue3;
    }
  }

  strong {
    @apply font-medium text-small;
  }
}
</style>
