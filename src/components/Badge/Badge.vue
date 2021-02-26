<template>
  <span :class="[variant, { 'hidden-ico': hiddenIcon }]" class="badge">
    <slot>Badge</slot>
  </span>
</template>

<script>
export default {
  name: 'Badge',

  props: {
    /** Specify whether the Icon should be disabled, or not */
    hiddenIcon: {
      default: false,
      type: Boolean,
    },

    /** Specify the kind of Button you want to create: <br/> done" | "denied"   | "review"  | "in-progress"  | "approved"  | "message" | "message-line" */
    variant: {
      default: 'message-line',
      type: String,
      validator: (value) =>
        [
          'done',
          'denied',
          'review',
          'in-progress',
          'approved',
          'message',
          'message-line',
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
@import '@scss/_badge';
</style>
