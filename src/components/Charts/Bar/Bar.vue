<script>
import { Bar } from 'vue-chartjs';

export default {
  name: 'Teste',

  extends: Bar,

  data: () => ({
    chartdata: {
      labels: [
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        12,
        13,
        14,
        15,
        16,
        17,
        18,
        19,
        20,
        21,
        21,
        23,
        24,
        25,
        26,
        27,
        28,
        29,
        30,
      ],
      datasets: [
        {
          label: 'Online',
          backgroundColor: '#FFB600',
          data: [
            46,
            40,
            37,
            40,
            50,
            30,
            40,
            46,
            30,
            50,
            0,
            51,
            40,
            46,
            50,
            0,
            40,
            40,
            20,
            30,
            0,
            30,
            20,
            16,
            10,
            27,
            30,
            30,
            20,
            20,
          ],
        },
      ],
    },

    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        xAxes: [
          {
            gridLines: {
              display: false,
            },
            ticks: {
              beginAtZero: true,
            },
          },
        ],
      },
      hover: {
        animationDuration: 0,
      },
      animation: {
        duration: 1,
        onComplete: function () {
          var chartInstance = this.chart,
            ctx = chartInstance.ctx;

          ctx.font = Chart.helpers.fontString(
            Chart.defaults.global.defaultFontSize,
            Chart.defaults.global.defaultFontStyle,
            Chart.defaults.global.defaultFontFamily,
          );
          ctx.textAlign = 'center';
          ctx.textBaseline = 'bottom';

          this.data.datasets.forEach(function (dataset, i) {
            var meta = chartInstance.controller.getDatasetMeta(i);
            meta.data.forEach(function (bar, index) {
              var data = dataset.data[index];
              ctx.fillText(data, bar._model.x, bar._model.y - 5);
            });
          });
        },
      },
    },
  }),

  mounted() {
    this.renderChart(this.chartdata, this.options);
  },
};
</script>
