<template>
  <label>
    <input
      :id="id"
      v-model="value"
      type="checkbox"
      :checked="checked"
      :disabled="disabled"
      :name="name"
    />

    <span :class="{ error: invalid && !value }">
      <span v-if="label">{{ label }}</span>
    </span>

    <small v-if="invalid && invalidText && !value" class="error-label">
      {{ invalidText }}
    </small>
  </label>
</template>

<script>
export default {
  name: 'SolSwitch',

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

    /** Specify a custom id for the <input> */
    id: {
      type: String,
      default: '',
    },

    /** Specify whether the control is currently invalid */
    invalid: {
      type: Boolean,
      default: false,
    },

    /** Provide the text that is displayed when the control is in an invalid state */
    invalidText: {
      type: String,
      default: '',
    },

    /** Provide label text to be read by screen readers when interacting with the control */
    label: {
      type: String,
      default: '',
    },

    /** Provide a name for the underlying input node */
    name: {
      type: String,
      default: '',
    },
  },

  data() {
    return {
      value: null,
    };
  },

  watch: {
    value(val) {
      this.$emit('input', val);
    },

    checked(val) {
      this.value = val;
    },
  },

  beforeMount() {
    this.value = this.checked;
  },

  mounted() {
    this.$emit('input', this.value);
  },
};
</script>

<style lang="scss" scoped>
label {
  @apply relative;

  > span {
    @apply relative flex items-center cursor-pointer text-modest leading-tight;
    min-height: 20px;
    padding-left: 38px;

    &:before {
      @apply bg-white absolute left-0 rounded-full border border-solid border-gray3 shadow-sm duration-200 ease-linear transition-all z-0;
      content: '';
      top: 50%;
      transform: translateY(-50%);
      width: 38px;
      height: 20px;
    }

    &:after {
      @apply bg-gray3 absolute rounded-full duration-200 ease-linear transition-all z-10;
      content: '';
      left: 4px;
      top: 50%;
      width: 12px;
      height: 12px;
      transform: translateY(-50%);
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

      &:after {
        @apply bg-red2;
      }
    }

    span {
      @apply ml-2;
    }
  }

  input {
    @apply absolute opacity-0;

    &:disabled + span:before {
      @apply bg-gray2;
    }

    &:checked {
      & + span {
        &:before {
          @apply bg-orangePrimary border-orangePrimary;
        }

        &:after {
          @apply bg-white;
          left: 22px;
        }
      }
    }
  }
}
</style>
