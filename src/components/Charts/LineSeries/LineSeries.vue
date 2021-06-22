<script>
import { Line } from 'vue-chartjs';

export default {
  name: 'LineSeries',

  extends: Line,

  data: () => ({
    chartdata: {
      labels: [
        '2021-05-02 08:35:00',
        '2021-05-02 08:40:00',
        '2021-05-02 08:45:00',
        '2021-05-02 08:50:00',
        '2021-05-02 08:55:00',
        '2021-05-02 09:00:00',
        '2021-05-02 09:05:00',
        '2021-05-02 09:10:00',
        '2021-05-02 09:15:00',
        '2021-05-02 09:20:00',
        '2021-05-02 09:25:00',
        '2021-05-02 09:30:00',
        '2021-05-02 09:35:00',
        '2021-05-02 09:40:00',
        '2021-05-02 09:45:00',
        '2021-05-02 09:50:00',
        '2021-05-02 09:55:00',
        '2021-05-02 10:00:00',
        '2021-05-02 10:05:00',
        '2021-05-02 10:10:00',
        '2021-05-02 10:15:00',
        '2021-05-02 10:20:00',
        '2021-05-02 10:25:00',
        '2021-05-02 10:30:00',
        '2021-05-02 10:35:00',
        '2021-05-02 10:40:00',
        '2021-05-02 10:45:00',
        '2021-05-02 10:50:00',
        '2021-05-02 10:55:00',
        '2021-05-02 11:00:00',
        '2021-05-02 11:05:00',
        '2021-05-02 11:10:00',
        '2021-05-02 11:15:00',
        '2021-05-02 11:20:00',
        '2021-05-02 11:25:00',
        '2021-05-02 11:30:00',
        '2021-05-02 11:35:00',
        '2021-05-02 11:40:00',
        '2021-05-02 11:45:00',
        '2021-05-02 11:50:00',
        '2021-05-02 11:55:00',
        '2021-05-02 12:00:00',
        '2021-05-02 12:05:00',
        '2021-05-02 12:10:00',
        '2021-05-02 12:15:00',
        '2021-05-02 12:20:00',
        '2021-05-02 12:25:00',
        '2021-05-02 12:30:00',
        '2021-05-02 12:35:00',
        '2021-05-02 12:40:00',
        '2021-05-02 12:45:00',
        '2021-05-02 12:50:00',
        '2021-05-02 12:55:00',
        '2021-05-02 13:00:00',
        '2021-05-02 13:05:00',
        '2021-05-02 13:10:00',
        '2021-05-02 13:15:00',
        '2021-05-02 13:20:00',
        '2021-05-02 13:25:00',
        '2021-05-02 13:30:00',
        '2021-05-02 13:35:00',
        '2021-05-02 13:40:00',
        '2021-05-02 13:45:00',
        '2021-05-02 13:50:00',
        '2021-05-02 13:55:00',
        '2021-05-02 14:00:00',
        '2021-05-02 14:05:00',
        '2021-05-02 14:10:00',
        '2021-05-02 14:15:00',
        '2021-05-02 14:20:00',
        '2021-05-02 14:25:00',
        '2021-05-02 14:30:00',
        '2021-05-02 14:35:00',
        '2021-05-02 14:40:00',
        '2021-05-02 14:45:00',
        '2021-05-02 14:50:00',
        '2021-05-02 14:55:00',
        '2021-05-02 15:00:00',
        '2021-05-02 15:05:00',
        '2021-05-02 15:10:00',
        '2021-05-02 15:15:00',
        '2021-05-02 15:20:00',
        '2021-05-02 15:25:00',
        '2021-05-02 15:30:00',
        '2021-05-02 15:35:00',
        '2021-05-02 15:40:00',
        '2021-05-02 15:45:00',
        '2021-05-02 15:50:00',
        '2021-05-02 15:55:00',
        '2021-05-02 16:00:00',
        '2021-05-02 16:05:00',
        '2021-05-02 16:10:00',
        '2021-05-02 16:15:00',
        '2021-05-02 16:20:00',
        '2021-05-02 16:25:00',
        '2021-05-02 16:30:00',
        '2021-05-02 16:35:00',
        '2021-05-02 16:40:00',
        '2021-05-02 16:45:00',
        '2021-05-02 16:50:00',
        '2021-05-02 16:55:00',
        '2021-05-02 17:00:00',
        '2021-05-02 17:05:00',
        '2021-05-02 17:10:00',
        '2021-05-02 17:15:00',
        '2021-05-02 17:20:00',
        '2021-05-02 17:25:00',
        '2021-05-02 17:30:00',
        '2021-05-02 17:35:00',
        '2021-05-02 17:40:00',
        '2021-05-02 17:45:00',
        '2021-05-02 17:50:00',
        '2021-05-02 17:55:00',
        '2021-05-02 18:00:00',
        '2021-05-02 18:05:00',
        '2021-05-02 18:10:00',
        '2021-05-02 18:15:00',
        '2021-05-02 18:20:00',
        '2021-05-02 18:25:00',
        '2021-05-02 18:30:00',
        '2021-05-02 18:35:00',
        '2021-05-02 18:40:00',
        '2021-05-02 18:45:00',
        '2021-05-02 18:50:00',
        '2021-05-02 18:55:00',
        '2021-05-02 19:00:00',
        '2021-05-02 19:05:00',
        '2021-05-02 19:10:00',
        '2021-05-02 19:15:00',
        '2021-05-02 19:20:00',
        '2021-05-02 19:25:00',
        '2021-05-02 19:30:00',
        '2021-05-02 19:35:00',
        '2021-05-02 19:40:00',
      ],
      datasets: [
        {
          backgroundColor: 'rgba(255, 182, 0, 0.64)',
          borderColor: 'transparent',
          type: 'line',
          order: 2,
          data: [
            1.58, 0, 32.17, 130.41, 152.04, 219.25, 315.12, 355.18, 340.2,
            384.2, 440.88, 570.94, 666.36, 728.67, 830.4, 910.6, 1053.48,
            1238.45, 1434.0, 1603.63, 1641.0, 2050.56, 1976.66, 2030.88,
            2115.69, 2220.6, 2372.27, 2477.52, 2546.01, 3023.88, 2469.67,
            3296.04, 2617.04, 2585.28, 1763.4, 3900.0, 4298.69, 4201.99,
            5008.92, 5083.34, 5471.16, 3449.02, 3016.56, 4365.27, 5618.64,
            3973.61, 6084.24, 6173.22, 4879.32, 5627.32, 6508.92, 6198.5,
            5076.6, 4448.35, 4306.17, 6917.16, 6582.7, 5364.24, 4537.69, 7593.6,
            7423.71, 5655.12, 7373.86, 7680.72, 7092.6, 7877.52, 3505.61,
            8016.12, 7103.68, 6443.76, 7365.48, 7766.73, 7965.84, 7419.61,
            6157.08, 6525.51, 5015.76, 2655.09, 3865.92, 7358.93, 7781.88,
            8215.83, 7939.32, 7405.77, 7129.91, 7610.16, 6672.52, 7426.92,
            7000.74, 3681.24, 7058.05, 4632.48, 7234.43, 7169.76, 7083.45,
            7164.84, 7009.53, 6734.76, 6835.06, 5748.44, 6464.28, 7041.79,
            2805.12, 2283.17, 3211.68, 5297.78, 5661.84, 6750.06, 6218.52,
            5852.59, 3534.44, 1330.32, 725.66, 609.6, 742.88, 1111.32, 1465.16,
            1599.72, 1672.62, 1637.88, 1456.62, 964.32, 515.92, 378.72, 202.76,
            62.23, 80.52, 88.62, 96.84, 96.92, 75.36, 61.53, 56.28, 19.81,
          ],
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
              padding: 5,
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
              // const x = xAxis.getPixelForValue(item);

              ctx.fillStyle = '#4CD89D';
              if (chart.data.datasets[0].data[i] === 0) {
                ctx.fillStyle = '#FF7771';
              }
            }
          });
          ctx.fillText('•', x, yAxis.bottom + 45);
        }

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
