<template>
  <div :id="id" class="chart-line-series">
    <LineSeries />
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

  methods: {},
};
</script>

<style lang="scss" scoped>
@import '@scss/_chart-line-series';

.chart-line-series {
  width: 1000px;
}
</style>
