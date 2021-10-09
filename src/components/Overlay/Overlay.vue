<template>
  <transition name="fade-shrink-in">
    <div :id="id" :class="{ relative: show, 'overflow-hidden': show }">
      <slot />

      <div v-if="show" class="sol-overlay" />
    </div>
  </transition>
</template>

<script>
export default {
  name: 'Overlay',

  props: {
    /** Specify a custom id */
    id: {
      type: String,
      required: true,
    },

    /** Show overlay */
    show: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@scss/_overlay';
</style>
