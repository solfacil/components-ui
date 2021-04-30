<script>
import { Bar } from 'vue-chartjs';

export default {
  name: 'Bar',

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
          backgroundColor: '#FFB600',
          type: 'bar',
          order: 2,
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
        {
          type: 'line',
          borderColor: '#7DD0FF',
          fill: false,
          // cubicInterpolationMode: 'monotone',
          lineTension: 0,
          order: 1,
          data: [
            50,
            50,
            50,
            50,
            50,
            50,
            50,
            50,
            50,
            50,
            50,
            30,
            40,
            50,
            50,
            50,
            50,
            50,
            50,
            50,
            50,
            50,
            50,
            50,
            50,
            50,
            50,
            50,
            50,
            50,
          ],
        },
      ],
    },

    options: {
      responsive: true,
      legend: {
        display: false,
      },
      maintainAspectRatio: false,
      scales: {
        xAxes: [
          {
            gridLines: {
              display: false,
              gridLines: true,
              offsetGridLines: true,
            },
            ticks: {
              beginAtZero: true,
              fontColor: '#666',
              fontSize: '12',
              fontFamily: 'Lato, sans-serif',
              padding: 8,
            },
            // stacked: true,
          },
        ],
        yAxes: [
          {
            scaleLabel: {
              display: true,
              labelString: 'KWH',
              fontFamily: 'Lato, sans-serif',
              fontSize: '12',
              fontColor: '#999',
              padding: 0,
            },
            ticks: {
              fontColor: '#666',
              fontSize: '12',
              fontFamily: 'Lato, sans-serif',
              padding: 8,
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
        animationDuration: 0,
      },
      tooltips: {
        // filter: (tooltipItem) => tooltipItem.datasetIndex == 0,
        callbacks: {
          // title: function (tooltipItem, data) {
          //   // return data['labels'][tooltipItem[0]['index']];
          //   return '';
          // },
          label: function (tooltipItem, data) {
            return data['datasets'][0]['data'][tooltipItem['index']];
          },
          // afterLabel: function (tooltipItem, data) {
          //   var dataset = data['datasets'][0];
          //   var percent = Math.round(
          //     (dataset['data'][tooltipItem['index']] /
          //       dataset['_meta'][0]['total']) *
          //       100,
          //   );
          //   return '(' + percent + '%)';
          // },
        },
      },
      animation: {
        duration: 1,
        onComplete: function () {
          const chartInstance = this.chart,
            ctx = chartInstance.ctx;

          ctx.font = '10px Lato, sans-serif';
          ctx.fillStyle = '#666666';

          ctx.textAlign = 'center';
          ctx.textBaseline = 'bottom';

          this.data.datasets.forEach(function (dataset, i) {
            if (dataset.type === 'line') return;

            let meta = chartInstance.controller.getDatasetMeta(i);
            meta.data.forEach(function (bar, index) {
              let data = dataset.data[index];

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
