<template>
  <transition name="fade" appear>
    <div :id="id || `popover-${_uid}`" class="sol-popover">
      <slot />

      <div
        class="popover"
        :class="[{ [`popover-${position}`]: position, disabled: disabled }]"
      >
        <div v-if="title" class="header-popover">{{ title }}</div>

        <div class="content-popover">
          <slot name="popover" />
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'Popover',

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

    title: {
      default: null,
      type: String,
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
@import '@scss/_popover';
</style>
