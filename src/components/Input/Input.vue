<template>
  <div :id="id || `input-${_uid}`" class="sol-input">
    <input
      ref="solInput"
      :class="[invalid, type]"
      :disabled="disabled"
      :name="name"
      :placeholder="placeholder"
      :type="type"
      :value="value"
      @input="$emit('input', $event.target.value)"
      @keyup.enter="handleEvent($event.target.value)"
    />

    <i v-if="type === 'search' && value" class="reset-search" @click="reset" />
    <i v-if="type === 'search'" class="search" @click="handleEvent(value)" />
  </div>
</template>

<script>
export default {
  name: 'InputText',

  props: {
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

    /** Provide a name for the underlying input node */
    name: {
      type: String,
      default: '',
    },

    /** Specify a custom `id` for the input */
    id: {
      type: String,
      default: '',
    },

    /** Specify the value of the input */
    value: {
      type: String,
      default: '',
    },

    /** Specify the placeholder attribute for the input */
    placeholder: {
      type: String,
      default: '',
    },

    /** Specify the type of the Input: <br/> "date" | "email" | "password"  | "search"  | "tel"  | "text"  | "time" | "url" | "number" */
    type: {
      default: 'text',
      type: String,
      validator: (value) =>
        [
          'date',
          'email',
          'number',
          'password',
          'search',
          'tel',
          'text',
          'time',
          'url',
        ].includes(value.toLowerCase()),
    },
  },

  methods: {
    reset() {
      this.$emit('input', null);

      this.$emit('clear');
    },

    handleEvent(value) {
      if (!value && value!=='') return;

      this.$emit('eventHandler', value);
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@scss/_input-text';
</style>
