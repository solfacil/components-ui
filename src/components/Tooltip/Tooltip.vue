<template>
  <transition name="fade" appear>
    <div :id="id || `tooltip-${_uid}`" class="sol-tooltip">
      <slot />
      <div
        class="content-tooltip"
        :class="[{ [`tooltip-${position}`]: position, disabled: disabled }]"
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
      default: 'top',
      type: String,
      validator: (value) =>
        ['top', 'right', 'bottom', 'left'].includes(value.toLowerCase()),
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
