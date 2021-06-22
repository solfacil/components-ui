<template>
  <div :id="id" class="chart-bar">
    <Bar />

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
import Bar from './Bar';

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
.chart-bar {
  width: 1000px;
}
@import '@scss/_bar';
</style>
