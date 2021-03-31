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
        <checkmark />
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
  </div>
</template>

<script>
import checkmark from '@/assets/img/icon/icon-check.vue';
export default {
  name: 'CheckBox',

  components: { checkmark },

  props: {
    /** Error message which appears only if invalid is true */
    errorMsg: {
      type: String,
      default: '',
    },

    /** The text besides the checkbox */
    text: {
      type: String,
      default: '',
    },

    /** The text that hangs over the checkbox */
    label: {
      type: String,
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
      default: '',
    },

    /** Specify the value of the */
    value: {
      type: Boolean,
      default: false,
    },

    /**  Adds a Right-to-left interface */
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
