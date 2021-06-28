<template>
  <div :id="id" ref="line" class="chart-line-series">
    <MultiAxisLine :data-chart="chartdata" />

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
import MultiAxisLine from './MultiAxisLine';
import html2canvas from 'html2canvas';

export default {
  name: 'ChartMultiAxisLine',

  components: {
    MultiAxisLine,
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
  },

  methods: {
    print() {
      html2canvas(this.$refs.line).then(function (canvas) {
        const link = document.createElement('a');
        link.href = canvas.toDataURL('image/jpeg');
        link.download = 'producao-dia.jpeg';
        link.click();
      });
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@scss/_multi-axis-line';
</style>
