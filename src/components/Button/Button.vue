<template>
  <a
    v-if="tag === 'a'"
    :id="id"
    :href="to"
    :disabled="disabled"
    :class="[variantSize, variantClass, { disabled: disabled }]"
    :type="type"
    :target="target"
    class="sol-button btn"
    v-on="$listeners"
  >
    <slot>Button</slot>
  </a>
  <button
    v-else
    :id="id"
    :href="to"
    :disabled="disabled"
    :class="[variantSize, variantClass, { disabled: disabled && tag === 'a' }]"
    :type="type"
    class="sol-button"
    v-on="$listeners"
  >
    <slot>Button</slot>
  </button>
</template>

<script>
export default {
  name: 'Button',

  props: {
    /** Specify whether the Button should be disabled, or not */
    disabled: {
      type: Boolean,
      default: false,
    },

    /** Specify a custom id */
    id: {
      type: String,
      required: true,
    },

    /** Specify whether the Button should be a small variant, use prefix for responsive (xs:, sm:, md:, lg:, xl:): <br/> "small" | "medium | "large" */
    size: {
      default: null,
      type: String,
    },

    /** "a" | "button" */
    tag: {
      default: 'button',
      type: String,
      validator: (value) => ['a', 'button'].includes(value.toLowerCase()),
    },

    /** "_blank" | "_self" */
    target: {
      default: null,
      type: String,
      validator: (value) => ['_blank', '_self'].includes(value.toLowerCase()),
    },

    /** Optional prop to specify the type of the Button: <br/> "button" | "submit" | "reset" */
    type: {
      default: 'button',
      type: String,
      validator: (value) =>
        ['button', 'submit', 'reset'].includes(value.toLowerCase()),
    },

    /** Optionally specify an href for your Button to become an element */
    to: {
      default: null,
      type: String,
    },

    /** Specify the kind of Button you want to create: <br/> secondary" | "exception" */
    variant: {
      default: 'primary',
      type: String,
      validator: (value) =>
        ['primary', 'secondary', 'exception'].includes(value.toLowerCase()),
    },
  },

  computed: {
    variantClass() {
      return this.variant ? `btn-${this.variant}` : null;
    },

    variantSize() {
      return this.size ? `btn-${this.size}` : null;
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@scss/_buttons';
</style>
