<template>
  <transition name="fade" appear>
    <div :id="id || `tooltip-${_uid}`" class="sol-tooltip">
      <slot />
      <div
        class="content-tooltip"
        :class="['content-tooltip', position, align, { disabled: disabled }]"
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

    /** Align of the indicative arrow */
    align: {
      default: 'top-center',
      type: String,
      validator: (value) =>
        [
          'top-center',
          'top-right',
          'top-left',
          'bottom-center',
          'bottom-right',
          'bottom-left',
          'right-center',
          'left-center',
        ].includes(value.toLowerCase()),
    },

    /** Tooltip position */
    position: {
      default: 'top',
      type: String,
      validator: (value) =>
        [
          'top-left',
          'top-center',
          'top-right',
          'bottom-center',
          'bottom-left',
          'bottom-right',
          'left',
          'right-top',
          'right-middle',
          'right-bottom',
          'left-top',
          'left-middle',
          'left-bottom',
        ].includes(value.toLowerCase()),
    },
  },

  computed: {
    variantClass() {
      return this.variant ? `btn-${this.variant}` : null;
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@scss/_tooltip';
</style>
