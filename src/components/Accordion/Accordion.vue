<template>
  <div :id="id" class="accordion">Accordion</div>
</template>

<script>
export default {
  name: 'Accordion',

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
@import '@scss/_accordion';
</style>
