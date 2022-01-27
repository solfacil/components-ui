<template>
  <div :id="id" ref="line" class="multi-axis-line">
    <canvas ref="multilineseries" />

    <div class="flex justify-end mt-4">
      <span class="print" @click="print">Salvar imagem</span>
    </div>
  </div>
</template>

<script>
import { Chart } from 'chart.js';

import html2canvas from 'html2canvas';

export default {
  name: 'ChartMultiAxisLine',

  props: {
    /** Specify a custom id */
    id: {
      type: String,
      required: true,
    },

    /** Data chart label and datasets */
    chartdata: {
      required: true,
      type: Object,
      validator: function (obj) {
        return 'labels' in obj && 'datasets' in obj;
      },
    },

    /** Name image download */
    nameImage: {
      type: String,
      default: 'grafico',
    },
  },

  data: () => ({
    chart: null,
    plugins: [],

    colors: [
      '#FAC031',
      '#9DD866',
      '#8381E7',
      '#F34BB2',
      '#FF942F',
      '#F08FD0',
      '#8DDDD0',
      '#DBCD6C',
      '#7D06BF',
      '#CA472F',
      '#0B84A5',
      '#688B00',
      '#1C4E80',
      '#B3C100',
      '#B500B8',
      '#FF6547',
    ],

    chartDataLocal: {
      labels: [],
      datasets: [],
    },

    options: {
      responsive: true,
      legend: {
        display: false,
      },
      layout: {
        padding: {
          bottom: 0,
          top: 0,
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
              beginAtZero: false,
              fontColor: '#666',
              fontSize: '12',
              padding: 6,
              fontFamily: 'Lato, sans-serif',
            },
          },
        ],
        yAxes: [
          {
            afterFit: function (scale) {
              scale.width = 74;
            },
            scaleLabel: {
              display: true,
              labelString: 'TENSÃO (V)',
              fontFamily: 'Lato, sans-serif',
              fontSize: '10',
              fontColor: '#999',
            },
            ticks: {
              fontColor: '#666',
              fontSize: '12',
              fontFamily: 'Lato, sans-serif',
              padding: 12,
              beginAtZero: true,
            },
            gridLines: {
              drawBorder: false,
            },
          },
          {
            position: 'right',
            afterFit: function (scale) {
              scale.width = 70;
            },
            scaleLabel: {
              display: true,
              labelString: 'CORRENTE (A)',
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
              display: false,
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
      tooltips: null,
    },
  }),

  watch: {
    chartdata: {
      deep: true,
      handler() {
        this.setDataset();
      },
    },
  },

  beforeMount() {
    this.customLineChart();
  },

  mounted() {
    this.setDataset();
    const labels = this.chartDataLocal.labels;

    this.options.scales.xAxes[0].ticks.min = new Date(labels[0]);
    this.options.scales.xAxes[0].ticks.max = new Date(
      labels[labels.length - 1],
    );

    this.createChart();
  },

  methods: {
    addPlugin(plugin) {
      this.plugins.push(plugin);
    },

    customLineChart() {
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
    },

    createChart() {
      this.chart = new Chart(this.$refs.multilineseries, {
        type: 'LineWithLine',
        data: this.chartDataLocal,
        options: this.options,
        plugins: this.plugins,
      });
    },

    resetData() {
      this.chartDataLocal.labels = [];
      this.chartDataLocal.datasets = [];
    },

    setDataset() {
      if (this.chartDataLocal.datasets.length) {
        this.resetData();
      }

      this.chartDataLocal.labels = this.chartdata.labels;
      this.chartdata.datasets.forEach((item, i) => {
        this.chartDataLocal.datasets = [
          ...this.chartDataLocal.datasets,
          {
            curve: this.chartdata.type ? this.chartdata.type[i] : '',
            label: 'chart-' + i,
            backgroundColor: 'transparent',
            borderColor: this.colors[i],
            borderWidth: 2,
            lineTension: 0,
            // order: i,
            data: item,
            // yAxisID: 'A',
          },
        ];
      });

      this.options.tooltips = {
        mode: 'label',
        intersect: false,
        custom: (tooltip) => {
          if (!tooltip || !tooltip.dataPoints) return;
          tooltip.displayColors = false;
          tooltip.opacity = 0;

          const item = tooltip.dataPoints.map((obj, i) => {
            return {
              ...obj,
              ...tooltip.labelColors[i],
              curve: this.chartdata?.type ? this.chartdata?.type?.[i] : '',

              inverter: this.chartdata?.inverter
                ? this.chartdata?.inverter?.[i]
                : [],
            };
          });

          this.$emit('input', item);
        },
      };

      if (this.chart) {
        this.chart.update();
      }
    },

    handle(_, i) {
      if (!i.length) return;

      const e = i[0];
      const x_value = this.chartDataLocal.labels[e._index];

      this.$emit('handle', x_value);
    },
    pad(num) {
      let s = String(num);

      if (s.length < 2) {
        s = '0' + s;
      }
      return s;
    },

    print() {
      html2canvas(this.$refs.line).then((canvas) => {
        const link = document.createElement('a');
        link.href = canvas.toDataURL('image/jpeg');
        link.download = `${this.nameImage}.jpeg`;
        link.click();
      });
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@scss/_chart_multi-axis-line';
</style>

<!-- <style lang="scss">
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
</style> -->
