<template>
  <label>
    <input
      type="radio"
      :name="name"
      :value="val"
      :checked="checked"
      :disabled="disabled"
      @input="updateValue($event.target.value)"
    />

    <span :class="{ error: invalid && !checked && !disabled }">
      <span v-if="label">{{ label }}</span>
    </span>

    <small
      v-if="invalid && invalidText && !checked && !disabled"
      class="error-label"
    >
      {{ invalidText }}
    </small>
  </label>
</template>

<script>
export default {
  name: 'SolRadioButton',

  props: {
    /** Specify whether the is currently checked */
    checked: {
      type: Boolean,
      default: false,
    },

    /** Specify whether the control is disabled */
    disabled: {
      type: Boolean,
      default: false,
    },

    /** Specify whether the control is currently invalid */
    invalid: {
      type: Boolean,
      default: false,
    },

    /** Provide the text that is displayed when the control is in an invalid state */
    invalidText: {
      type: String,
      default: null,
    },

    /** Provide label text to be read by screen readers when interacting with the control */
    label: {
      type: String,
      default: null,
    },

    /** Provide a name for the underlying input node */
    name: {
      type: String,
      required: true,
    },

    /** Specify the value of the */
    val: {
      type: String,
      required: true,
    },
  },

  methods: {
    updateValue(value) {
      this.$emit('input', value);
    },
  },
};
</script>

<style lang="scss" scoped>
label {
  @apply relative;
  user-select: none;

  > span {
    @apply relative pl-7 cursor-pointer text-small min-h-6 flex;

    &:before {
      @apply bg-white absolute left-0 w-6 h-6 rounded-full border border-solid border-gray3 shadow-sm duration-200 ease-linear transition-all z-0;
      content: '';
      top: 50%;
      transform: translateY(-50%);
    }

    &:after {
      @apply bg-orangePrimary absolute w-4 h-4 rounded-full duration-200 ease-linear transition-all opacity-0 z-10;
      content: '';
      left: 4px;
      top: 50%;
      transform: translateY(-50%) scale(0);
    }

    &:hover {
      &:before {
        @apply bg-gray1;
      }
    }

    &.error {
      @apply m-0 text-grayPrimary;

      &:before {
        @apply border-red2;
      }
    }
  }

  input {
    @apply absolute opacity-0;

    &:disabled + span:before {
      @apply bg-gray2;
    }

    &:checked + span:after {
      opacity: 1;
      transform: translateY(-50%) scale(1);
    }
  }
}
</style>
