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
  name: 'SolButton',

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
.btn,
button {
  @apply inline-block bg-orangePrimary font-rubik cursor-pointer text-gray7 font-medium text-small px-4 rounded text-center duration-200 ease-linear transition-all uppercase leading-tight;
  padding-top: 14px;
  padding-bottom: 10px;

  &:hover {
    @apply bg-orange3;
  }

  &:focus {
    outline: 0;
  }

  &.disabled,
  &:disabled {
    @apply bg-gray2 text-gray4 cursor-default;
  }

  &.btn-secondary {
    @apply bg-transparent border border-orangePrimary;

    &:hover {
      @apply bg-transparent border-orange3;
    }

    &:disabled {
      @apply bg-transparent border border-gray2 cursor-default;
    }
  }

  &.btn-exception {
    @apply bg-gray7 text-white;

    &:hover {
      @apply bg-gray7 text-white;
    }
  }

  &.btn-small {
    padding-top: 10px;
    padding-bottom: 6px;
  }

  &.btn-large {
    @apply text-modest leading-tight;
  }
}
</style>
