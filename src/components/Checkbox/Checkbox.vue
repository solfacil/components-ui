<template>
  <label class="sol-checkbox">
    <input
      :id="id || `checkbox-${_uid}`"
      type="checkbox"
      :name="name"
      :value="value"
      :checked="checked"
      :disabled="disabled"
      @input="updateValue($event.target.value)"
    />

    <span :class="{ error: invalid && !checked && !disabled }">
      <span v-if="label">{{ label }}</span>
    </span>
  </label>
</template>

<script>
export default {
  name: 'Checkbox',

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

    /** Specify a custom id */
    id: {
      type: String,
      default: '',
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
    value: {
      type: [String, Boolean, Number, Object, Array, Function],
      default: undefined,
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
@import '@scss/_checkbox';
</style>
