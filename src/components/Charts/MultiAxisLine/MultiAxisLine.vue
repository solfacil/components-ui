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
  name: 'MultiAxisLine',

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
  },

  data: () => ({
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
    chartdata: {
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
    dataChart: function () {
      this.setData();
      this.renderChart(this.chartdata, this.options);
    },
  },

  beforeMount() {
    this.setData();
  },

  created() {
    this.options.scales.xAxes[0].ticks.min = new Date(this.dataChart.labels[0]);
    this.options.scales.xAxes[0].ticks.max = new Date(
      this.dataChart.labels[this.dataChart.labels.length - 1],
    );
  },

  mounted() {
    this.renderChart(this.chartdata, this.options);
  },

  methods: {
    setData() {
      this.chartdata.datasets = [];

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
              curve: this.dataChart.type ? this.dataChart.type[i] : '',
              inverter: this.dataChart.inverter
                ? this.dataChart.inverter[i]
                : [],
            };
          });

          this.$emit('input', item);
        },
      };

      this.chartdata.labels = this.dataChart.labels;

      this.dataChart.datasets.map((item, i) => {
        this.chartdata.datasets.push({
          curve: this.dataChart.type ? this.dataChart.type[i] : '',
          label: 'chart-' + i,
          backgroundColor: 'transparent',
          borderColor: this.colors[i],
          borderWidth: 2,
          lineTension: 0,
          // order: i,
          data: item,
          // yAxisID: 'A',
        });
      });
    },
  },
};
</script>
