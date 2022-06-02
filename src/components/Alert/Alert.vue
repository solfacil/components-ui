<template>
  <transition name="fade" appear>
    <div
      v-if="value"
      :id="id"
      :class="[
        'sol-alert',
        size,
        variant,
        { 'alert-icon': icon && !iconNumber },
      ]"
    >
      <i v-if="iconNumber">{{ iconNumber }}</i>

      <span class="txt" :class="{ 'pr-6': close }">
        <slot />
      </span>

      <div class="action-content">
        <slot name="action" />
      </div>

      <span v-if="close" class="alert-close" @click="hiddenAlert">
        <em>Fechar</em>
      </span>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'Alert',

  props: {
    /** Optionally specify close alert */
    close: {
      default: false,
      type: Boolean,
    },

    /** Specify whether the Alert should be visible or hidden */
    value: {
      type: Boolean,
      default: true,
    },

    /** Optionally icon number */
    iconNumber: {
      default: null,
      type: [String, Number],
    },

    /** Specify whether the Icon should be enabled or not */
    icon: {
      default: false,
      type: Boolean,
    },

    /** Specify a custom id */
    id: {
      type: String,
      required: true,
    },

    /** Specify whether the Alert should be a small variant, use prefix for responsive (xs:, sm:, md:, lg:, xl:): <br/> "small" | "medium | "large | "extra-large" */
    size: {
      default: 'small',
      type: String,
      validator: (value) =>
        ['small', 'medium', 'large', 'extra-large'].includes(
          value.toLowerCase(),
        ),
    },

    /** Specify the kind of Alert you want to create: <br/> done" | "denied"   | "review"  | "in-progress"  | "approved"  | "message" | "message-line" */
    variant: {
      default: 'success',
      type: String,
      validator: (value) =>
        [
          'success',
          'error',
          'warning',
          'warning-neutral',
          'info',
          'info-neutral',
          'info-line',
        ].includes(value.toLowerCase()),
    },
  },

  methods: {
    hiddenAlert() {
      this.$emit('input', false);
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@scss/_alert';
</style>
