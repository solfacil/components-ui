<template>
  <transition name="fade" appear>
    <div :id="id" class="sol-popover">
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
    /** Specify whether the Popover should be disabled, or not */
    disabled: {
      type: Boolean,
      default: false,
    },

    /** Specify a custom id */
    id: {
      type: String,
      required: true,
    },

    /** Position popover */
    position: {
      default: 'top',
      type: String,
      validator: (value) =>
        [
          'top',
          'topright',
          'topleft',
          'right',
          'bottomright',
          'bottom',
          'bottomleft',
          'lefttop',
          'left',
          'leftbottom',
        ].includes(value.toLowerCase()),
    },

    /** Custom title */
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
