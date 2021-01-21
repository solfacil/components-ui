<template>
  <component
    :is="tag"
    :href="to"
    :disabled="disabled"
    :class="[
      `btn-${size}`,
      `btn-${variant}`,
      { btn: tag === 'a' },
      { disabled: disabled && tag === 'a' },
    ]"
    :type="type"
    :target="target"
    v-on="$listeners"
  >
    <slot>Button</slot>
  </component>
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

    /** Specify whether the Button should be a small variant: <br/> "large" | "medium" | "small" */
    size: {
      default: 'medium',
      type: String,
      validator: (value) =>
        ['large', 'medium', 'small'].includes(value.toLowerCase()),
    },

    /** "a" | "button" */
    tag: {
      default: 'button',
      type: String,
      validator: (value) => ['a', 'button'].includes(value.toLowerCase()),
    },

    /** "_blank" | "_self" */
    target: {
      default: '_self',
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

    /** Specify the kind of Button you want to create: <br/> "primary" | "secondary" | "exception" */
    variant: {
      default: 'primary',
      type: String,
      validator: (value) =>
        ['primary', 'secondary', 'exception'].includes(value.toLowerCase()),
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@scss/_buttons.scss';
</style>
