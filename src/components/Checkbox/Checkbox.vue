<template>
  <div :class="{ 'checkbox-root': true, rtl: rtl }">
    <span v-if="label" class="title-label">{{ label }}</span>
    <label :id="id || `checkbox-${_uid}`" :class="{ rtl: rtl }">
      <input
        type="checkbox"
        :name="name"
        :disabled="disabled"
        :checked="value"
        @input="handleToggle"
      />
      <div
        :class="{
          'custom-checkbox': true,
          checked: value && !disabled,
          disabled: disabled,
          invalid: invalid,
        }"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          aria-hidden="true"
          focusable="false"
        >
          <path
            fill="none"
            stroke="currentColor"
            stroke-width="3"
            d="M1.73 12.91l6.37 6.37L22.79 4.59"
          />
        </svg>
      </div>

      <span
        :class="{
          disabled: disabled,
        }"
      >
        {{ text }}
      </span>
    </label>
    <span v-if="invalid" class="error">{{ errorMsg }}</span>
    <checkmark />
  </div>
</template>

<script>
import checkmark from '../../assets/img/icon/icon-check-white.svg';
export default {
  name: 'CheckBox',

  components: { checkmark },

  props: {
    errorMsg: {
      type: String,
      required: false,
      default: '',
    },

    text: {
      type: String,
      required: false,
      default: '',
    },

    label: {
      type: String,
      required: false,
      default: '',
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

    /** Specify a custom id */
    id: {
      type: String,
      default: '',
    },

    /** Provide a name for the underlying input node */
    name: {
      type: String,
      required: false,
      default: '',
    },

    /** Specify the value of the */
    value: {
      type: Boolean,
      default: false,
    },

    // Adds a Right-to-left interface
    rtl: {
      type: Boolean,
      default: false,
    },
  },

  methods: {
    handleToggle(e) {
      this.$emit('input', e.target.checked);
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@scss/_checkbox';
</style>
