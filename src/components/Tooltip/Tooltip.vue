<template>
  <transition name="fade" appear>
    <div :id="id || `tooltip-${_uid}`" class="sol-tooltip">
      <slot />
      <div
        class="content-tooltip"
        :class="[
          {
            [`tooltip-${position}`]: position,
            disabled: disabled,
            [`content-tooltip-${align}`]: align,
          },
        ]"
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

    position: {
      default: 'right-center',
      type: String,
      validator: (value) =>
        [
          'top-center',
          'top-right',
          'top-left',
          'bottom-center',
          'bottom-right',
          'bottom-left',
          'left-center',
          'left-top',
          'right-top',
          'right-center',
        ].includes(value.toLowerCase()),
    },
    align: {
      default: 'top-right',
      type: String,
      validator: (value) =>
        ['top', 'bottom', 'right', 'top-right', 'top-right-bottom'].includes(
          value.toLowerCase(),
        ),
    },
  },

  data() {
    return {
      hidden: false,
    };
  },

  computed: {
    variantClass() {
      return this.variant ? `btn-${this.variant}` : null;
    },
  },

  methods: {
    hiddenAlert() {
      this.hidden = true;
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@scss/_tooltip';
</style>
