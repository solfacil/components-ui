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
    chartdata: {
      labels: [],
      datasets: [
        {
          backgroundColor: 'transparent',
          borderColor: '#4CD89D',
          lineTension: 0,
          order: 1,
          data: [],
          yAxisID: 'A',
        },
        {
          backgroundColor: 'transparent',
          borderColor: '#7DD0FF',
          lineTension: 0,
          order: 2,
          data: [],
          yAxisID: 'B',
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
              min: new Date('2021-05-02 01:00:00'),
              max: new Date('2021-05-02 21:00:00'),
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
              labelString: 'Tensão (V)',
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
            id: 'A',
          },
          {
            position: 'right',
            afterFit: function (scale) {
              scale.width = 80;
            },
            scaleLabel: {
              display: true,
              labelString: 'Tensão (V)',
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
            id: 'B',
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
        custom: function (tooltip) {
          if (!tooltip) return;
          tooltip.displayColors = false;
          tooltip.opacity = 0;
        },
        callbacks: {
          title: (tooltipItem, data) => {
            console.log(this, tooltipItem, data);
          },
          label: (tooltipItem, data) => {
            console.log(this);
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
  },

  mounted() {
    this.renderChart(this.chartdata, this.options);
  },

  methods: {
    setData() {
      this.chartdata.labels = this.dataChart.labels;
      this.chartdata.datasets[0].data = this.dataChart.datasets[0];
      this.chartdata.datasets[1].data = this.dataChart.datasets[1];
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
