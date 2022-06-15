<template>
  <div :id="id" ref="bar" class="chart-bar">
    <Bar
      :data-bar="dataBar"
      :data-line="dataLine"
      :view="view"
      @handle="handle"
    />

    <div class="flex justify-between mt-6">
      <ul class="legend">
        <li v-if="view === 'month'" class="online">Online</li>
        <li v-if="view === 'month'" class="offline">Offline</li>
        <li v-if="view === 'month'" class="no_production">Sem produção</li>
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

    /** Data chart bar  */
    dataBar: {
      required: true,
      type: Object,
      validator: function (obj) {
        return 'labels' in obj && 'datasets' in obj && 'status' in obj;
      },
    },

    /** Data chart Line  */
    dataLine: {
      default: () => [],
      type: Array,
      validator: (value) => value.constructor === Array,
    },

    /** Specify the view of the chart: <br/> "month" | "year" */
    view: {
      default: 'month',
      type: String,
      validator: (value) => ['month', 'year'].includes(value.toLowerCase()),
    },

    /** Name image download */
    nameImage: {
      type: String,
      default: 'grafico',
    },
  },

  methods: {
    print() {
      html2canvas(this.$refs.bar).then((canvas) => {
        var link = document.createElement('a');
        link.href = canvas.toDataURL('image/jpeg');
        link.download = `${this.nameImage}.jpeg`;
        link.click();
      });
    },

    handle(val) {
      this.$emit('handle', val);
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@scss/_bar';
</style>
