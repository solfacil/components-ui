<template>
  <transition name="fade" appear>
    <div :id="id" class="sol-tooltip">
      <slot />
      <div v-if="!disabled" :class="['content-tooltip', position]">
        <slot name="tooltip" />
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'Tooltip',

  props: {
    /** Specify whether the Button should be disabled, or not */
    disabled: {
      type: Boolean,
      default: false,
    },

    /** Specify a custom id */
    id: {
      type: String,
      required: true,
    },

    /** Tooltip position */
    position: {
      default: 'top',
      type: String,
      validator: (value) =>
        [
          'top',
          'topleft',
          'topright',
          'right',
          'righttop',
          'rightbottom',
          'bottom',
          'bottomleft',
          'bottomright',
          'left',
          'lefttop',
          'leftbottom',
        ].includes(value.toLowerCase()),
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@scss/_tooltip';
</style>
