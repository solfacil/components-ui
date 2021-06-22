<template>
  <div :id="id" class="chart-line-series">
    <LineSeries />

    <div class="flex justify-between">
      <ul class="legend">
        <li class="online">Online</li>
        <li class="offline">Offine</li>
        <li class="disconnected">Desconectado na rede</li>
        <li class="production">Produção estimada</li>
      </ul>

      <span class="print" @click="print">Salvar imagem</span>
    </div>
  </div>
</template>

<script>
import LineSeries from './LineSeries';

export default {
  name: 'ChartLineSeries',

  components: {
    LineSeries,
  },

  props: {
    /** Specify a custom id */
    id: {
      type: String,
      required: true,
    },
  },

  data() {
    return {};
  },

  methods: {
    print() {
      var canvas = document.getElementById('bar-chart');
      var a = document.createElement('a');
      a.href = canvas.toDataURL();
      a.download = 'producao-mes.png';
      a.click();
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@scss/_chart-line-series';

.chart-line-series {
  width: 1000px;
}
</style>
