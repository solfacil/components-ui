<template>
  <span :id="id" :class="['sol-badge', variant, { 'hidden-ico': hiddenIcon }]">
    <slot />
  </span>
</template>

<script>
export default {
  name: 'Badge',

  props: {
    /** Specify a custom id */
    id: {
      type: String,
      required: true,
    },

    /** Specify whether the Icon should be disabled, or not */
    hiddenIcon: {
      default: false,
      type: Boolean,
    },

    /** Specify the kind of Badge you want to create: <br/> done" | "denied"   | "review"  | "in-progress"  | "approved"  | "message" | "message-line" */
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
};
</script>

<style lang="scss" scoped>
@import '@scss/_badge';
</style>
