<template>
  <label :id="id" class="sol-radio-button">
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
  </label>
</template>

<script>
export default {
  name: 'RadioButton',

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

    /** Specify a custom id for the <input> */
    id: {
      type: String,
      required: true,
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

    /** Specify the value of the */
    val: {
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
@import '@scss/_radio-button';
</style>
