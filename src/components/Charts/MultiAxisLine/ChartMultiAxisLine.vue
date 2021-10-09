<template>
  <div :id="id" ref="line" class="multi-axis-line">
    <MultiAxisLine v-model="data" :data-chart="chartdata" />

    <div class="flex justify-end mt-4">
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

  data() {
    return {
      data: null,
    };
  },

  watch: {
    data: function (val) {
      this.$emit('input', val);
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
@import '@scss/_chart_multi-axis-line';
</style>
