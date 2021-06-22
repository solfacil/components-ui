<script>
import { Bar } from 'vue-chartjs';

export default {
  name: 'Bar',

  extends: Bar,

  data: () => ({
    chartdata: {
      labels: [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
        21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
      ],
      datasets: [
        {
          backgroundColor: 'rgba(255, 182, 0, 0.64)',
          type: 'bar',
          order: 2,
          data: [
            46, 40, 37, 40, 50, 30, 40, 46, 30, 50, 0, 51, 40, 46, 50, 0, 40,
            40, 20, 30, 0, 30, 20, 16, 10, 27, 30, 30, 20, 20,
          ],
        },
        {
          type: 'line',
          borderColor: '#7DD0FF',
          fill: false,
          lineTension: 0,
          order: 1,
          data: [
            50, 50, 50, 50, 50, 50, 50, 50, 42, 50, 50, 48, 45, 50, 50, 50, 50,
            50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50,
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
            maxBarThickness: 16,
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
            scaleLabel: {
              display: true,
              labelString: 'KWH',
              fontFamily: 'Lato, sans-serif',
              fontSize: '10',
              fontColor: '#999',
              padding: 10,
            },
            ticks: {
              fontColor: '#666',
              fontSize: '12',
              fontFamily: 'Lato, sans-serif',
              padding: 12,
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
        position: 'nearest',
        titleFontSize: 10,
        titleAlign: 'center',
        titleFontColor: '#666',
        titleFontFamily: 'Lato, sans-serif',
        titleFontStyle: '400',
        titleTextAlign: 'center',
        yPadding: 8,
        xPadding: 16,
        custom: function (tooltip) {
          if (!tooltip) return;
          tooltip.displayColors = false;
        },
        callbacks: {
          label: function (tooltipItem, data) {
            return data['datasets'][0]['data'][tooltipItem['index']] + ' kwh';
          },
          title: function (tooltipItem, data) {
            return data['labels'][tooltipItem[0]['index']];
          },
        },
      },
    },
  }),

  mounted() {
    this.addPlugin({
      afterDraw: (chart) => {
        var ctx = chart.chart.ctx;
        var xAxis = chart.scales['x-axis-0'];
        var yAxis = chart.scales['y-axis-0'];
        ctx.save();
        ctx.textAlign = 'center';
        ctx.font = '22px Lato, sans-serif';

        chart.data.labels.forEach((l, i) => {
          const x = xAxis.getPixelForValue(l);
          ctx.fillStyle = '#4CD89D';

          if (this.chartdata.datasets[0].data[i] === 0) {
            ctx.fillStyle = '#FF7771';
          }

          ctx.fillText('•', x, yAxis.bottom + 45);
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

    this.renderChart(this.chartdata, this.options);
  },
};
</script>
