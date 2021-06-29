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
    colors: ['#4CD89D', '#7DD0FF', '#FF8A00', '#FF7771', '#666666', '#000'],
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
              min: new Date('2021-05-02 01:00'),
              max: new Date('2021-05-02 21:00'),
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
            },
            gridLines: {
              drawBorder: false,
            },
            // id: 'A',
          },
          {
            position: 'right',
            afterFit: function (scale) {
              scale.width = 80;
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
            },

            gridLines: {
              display: false,
              drawBorder: false,
            },
            // id: 'B',
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
    series: function () {
      this.setData();
      this.renderChart(this.chartdata, this.options);
    },
  },

  beforeMount() {
    this.setData();
  },

  mounted() {
    this.renderChart(this.chartdata, this.options);
  },

  methods: {
    setData() {
      this.options.tooltips = {
        mode: 'label',
        intersect: false,
        custom: (tooltip) => {
          if (!tooltip || !tooltip.dataPoints) return;
          tooltip.displayColors = false;
          tooltip.opacity = 0;

          const item = tooltip.dataPoints.map((obj, i) => {
            return { ...obj, ...tooltip.labelColors[i] };
          });

          this.$emit('input', item);
        },
      };

      this.chartdata.labels = this.dataChart.labels;

      this.dataChart.datasets.map((item, i) => {
        this.chartdata.datasets.push({
          label: 'jesus-' + i,
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
