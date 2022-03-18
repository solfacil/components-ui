<template>
  <div :id="id" ref="line" class="chart-line-series">
    <LineSeries
      :data-chart="chartdata"
      :left-label-string="leftLabelString"
      :tooltip-append="tooltipAppend"
      :tooltip-prepend="tooltipPrepend"
    />

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
import html2canvas from 'html2canvas';

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

    /** Data chart label and datasets */
    chartdata: {
      required: true,
      type: Object,
      validator: function (obj) {
        return 'labels' in obj && 'datasets' in obj;
      },
    },

    /** Name image download */
    nameImage: {
      type: String,
      default: 'grafico',
    },

    leftLabelString: {
      type: String,
      default: 'WATTS',
    },

    tooltipPrepend: {
      type: String,
      default: () => '',
    },

    tooltipAppend: {
      type: String,
      default: () => 'W',
    },
  },

  methods: {
    print() {
      html2canvas(this.$refs.line).then((canvas) => {
        const link = document.createElement('a');
        link.href = canvas.toDataURL('image/jpeg');
        link.download = `${this.nameImage}.jpeg`;
        link.click();
      });
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@scss/_chart-line-series';
</style>
