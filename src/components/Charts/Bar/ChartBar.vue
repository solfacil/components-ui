<template>
  <div :id="id" ref="bar" class="chart-bar">
    <Bar :data-chart="chartdata" :view="view" />

    <div class="flex justify-between mt-6">
      <ul class="legend">
        <li v-if="view === 'day'" class="online">Online</li>
        <li v-if="view === 'day'" class="offline">Offline</li>
        <li v-if="view === 'day'" class="disconnected">Desconectado na rede</li>
        <li class="production">Produção estimada</li>
      </ul>

      <span class="print" @click="print">Salvar imagem</span>
    </div>
  </div>
</template>

<script>
import Bar from './Bar';
import html2canvas from 'html2canvas';

export default {
  name: 'ChartBar',

  components: {
    Bar,
  },

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

    /** Specify the view of the chart: <br/> "day" | "month" */
    view: {
      default: 'day',
      type: String,
      validator: (value) => ['day', 'month'].includes(value.toLowerCase()),
    },
  },

  methods: {
    print() {
      html2canvas(this.$refs.bar).then(function (canvas) {
        var link = document.createElement('a');
        link.href = canvas.toDataURL('image/jpeg');
        link.download = `producao-${
          window.viewChart === 'day' ? 'dia' : 'mes'
        }.jpeg`;
        link.click();
      });
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@scss/_bar';
</style>
