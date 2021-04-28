<template>
  <div :id="id" class="circle-bar">
    <Bar />
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
};
</script>

<style lang="scss" scoped>
.circle-bar {
  width: 1000px;
}
@import '@scss/_bar';
</style>
