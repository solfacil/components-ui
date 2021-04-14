<template>
  <transition name="fade" appear>
    <div
      v-if="!hidden"
      :id="id || `alert-${_uid}`"
      :class="[
        'sol-alert',
        size,
        variant,
        { 'alert-icon': icon && !iconNumber },
      ]"
    >
      <i v-if="iconNumber">{{ iconNumber }}</i>
      <span class="txt" :class="{ 'pr-6': close }"><slot /></span>
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
      default: null,
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
      default: 'sucess',
      type: String,
      validator: (value) =>
        [
          'success',
          'error',
          'warning',
          'info',
          'info-neutral',
          'info-line',
        ].includes(value.toLowerCase()),
    },
  },

  data() {
    return {
      hidden: false,
    };
  },

  methods: {
    hiddenAlert() {
      this.hidden = true;
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@scss/_alert';
</style>
