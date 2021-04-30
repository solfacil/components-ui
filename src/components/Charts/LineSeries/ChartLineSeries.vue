<template>
  <div :id="id" class="chart-line-series">LineSeries</div>
</template>

<script>
export default {
  name: 'ChartLineSeries',

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
</style>
