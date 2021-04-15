<template>
  <transition name="fade" appear>
    <div :id="id || `tooltip-${_uid}`" class="sol-tooltip">
      <slot />
      <div
        class="content-tooltip"
        :class="['content-tooltip', position, { disabled: disabled }]"
      >
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
      default: '',
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
