<script>
import { Bar } from 'vue-chartjs';

export default {
  name: 'Bar',

  extends: Bar,

  data: () => ({
    chartdata: {
      labels: [
        '2021-06-01',
        '2021-06-02',
        '2021-06-03',
        '2021-06-04',
        '2021-06-05',
        '2021-06-06',
        '2021-06-07',
        '2021-06-08',
        '2021-06-09',
        '2021-06-10',
        '2021-06-11',
        '2021-06-12',
        '2021-06-13',
        '2021-06-14',
        '2021-06-15',
        '2021-06-16',
        '2021-06-17',
        '2021-06-18',
        '2021-06-19',
        '2021-06-20',
        '2021-06-21',
        '2021-06-22',
        '2021-06-23',
        '2021-06-24',
        '2021-06-25',
        '2021-06-26',
        '2021-06-27',
        '2021-06-28',
        '2021-06-29',
        '2021-06-30',
      ],
      datasets: [
        {
          backgroundColor: 'rgba(255, 182, 0, 0.64)',
          hoverBackgroundColor: 'rgba(102, 102, 102, 0.64)',
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
          bottom: 29,
          top: 24,
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
              display: false,
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
        titleFontSize: 10,
        titleAlign: 'center',
        titleFontColor: '#666',
        titleFontFamily: 'Lato, sans-serif',
        titleFontStyle: '400',
        footerFontSize: 10,
        footerFontColor: '#30B4FF',
        footerFontFamily: 'Lato, sans-serif',
        footerFontStyle: '600',
        footerTextAlign: 'center',
        yPadding: 8,
        xPadding: 16,
        custom: function (tooltip) {
          if (!tooltip) return;
          tooltip.displayColors = false;
        },
        callbacks: {
          label: function (tooltipItem, data) {
            return `${data.datasets[0].data[tooltipItem['index']]} kwh`;
          },
          footer: function (tooltipItem, data) {
            return `EST. ${data.datasets[1].data[tooltipItem[0].index]} KWH`;
          },
          title: function (tooltipItem, data) {
            const newDate = new Date(
              `${data.labels[tooltipItem[0]['index']]} 00:00:00`,
            );

            return new Intl.DateTimeFormat('pt-BR', {
              timeZone: 'America/Sao_Paulo',
            }).format(newDate);
          },
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

        chart.data.labels.forEach((l, i) => {
          const x = xAxis.getPixelForValue(l);
          ctx.fillStyle = '#666';
          ctx.font = '12px Lato, sans-serif';
          ctx.fillText(i + 1, x, yAxis.bottom + 29);

          ctx.fillStyle = '#4CD89D';

          if (this.chartdata.datasets[0].data[i] === 0) {
            ctx.fillStyle = '#FF7771';
          }

          ctx.font = '22px Lato, sans-serif';
          ctx.fillText('•', x, yAxis.bottom + 46);
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
