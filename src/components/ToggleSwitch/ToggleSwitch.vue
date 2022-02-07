<template>
  <label :id="id" class="toggle-switch">
    <input
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
  name: 'ToggleSwitch',

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

    /** Specify a custom id */
    id: {
      type: String,
      required: true,
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
      default: null,
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
    if (this.checked) this.value = this.checked;
  },
};
</script>

<style lang="scss" scoped>
@import '@scss/_toggle-switch';
</style>
