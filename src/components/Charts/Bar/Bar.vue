<script>
import { Bar } from 'vue-chartjs';
import moment from 'moment';

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
      hover: {
        onHover: (event, chartElement) => {
          event.target.style.cursor = chartElement[0] ? 'pointer' : 'default';
        },
      },
      legend: {
        display: false,
      },
      layout: {
        padding: {
          bottom: 29,
          top: 16,
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
            const footer = tooltipModel.footer || [];
            let innerHtml = '';

            title.map((title) => {
              innerHtml += `<span>${title}</span>`;
            });

            body.map((body) => {
              innerHtml += `<strong>${body}</strong>`;
            });

            footer.map((footer) => {
              innerHtml += `<span class="footer">${footer}</span>`;
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
          label: function (tooltipItem, data) {
            return `${data.datasets[0].data[tooltipItem['index']]} kwh`;
          },
          footer: function (tooltipItem, data) {
            if (!data.datasets[1].data.length) return;

            return `EST. ${data.datasets[1].data[tooltipItem[0].index]} KWH`;
          },
          title: function (tooltipItem) {
            return [
              window.monthNames[
                moment(tooltipItem[0]['label']).format('M') - 1
              ],
              moment(tooltipItem[0]['label']).format('DD/MM/YYYY'),
            ][Number(window.viewChart === 'month')];
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
            ctx.fillText(moment(l).format('D'), x, yAxis.bottom + 29);

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
            this.monthNames[moment(l).format('M') - 1],
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

    this.options.onClick = this.handle;

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

    handle(_, i) {
      if (!i.length) return;

      const e = i[0];
      var x_value = this.chartdata.labels[e._index];

      this.$emit('handle', x_value);
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
