<template>
  <div class="sol-input">
    <label v-if="label" :for="id">{{ label }}</label>
    <div class="wrapper-input">
      <span v-if="!!$slots['icon']" class="icon">
        <!-- @slot Use this slot icon AddOns -->
        <slot name="icon">ddd</slot>
      </span>

      <input
        :id="id"
        ref="solInput"
        :class="{
          invalid,
          'is-icon': $slots['icon'],
          search: type === 'search',
        }"
        :disabled="disabled"
        :name="name"
        :placeholder="placeholder"
        :type="type"
        :value="value"
        @input="$emit('input', $event.target.value)"
        @keyup.enter="handleEvent($event.target.value)"
      />

      <i
        v-if="type === 'search' && value"
        class="reset-search"
        @click="reset"
      />
      <i v-if="type === 'search'" class="search" @click="handleEvent(value)" />
    </div>

    <small v-if="invalid && msgInvalid" class="msg-error">
      {{ msgInvalid }}
    </small>
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

    /** Provide label text to be read by screen readers when interacting with the control */
    label: {
      type: String,
      default: null,
    },

    /** Specify message for invalid field */
    msgInvalid: {
      type: String,
      default: null,
    },

    /** Provide a name for the underlying input node */
    name: {
      type: String,
      default: null,
    },

    /** Specify a custom `id` for the input */
    id: {
      type: String,
      required: true,
    },

    /** Specify the value of the input - v-model */
    value: {
      type: [String, Number],
      default: null,
    },

    /** Specify the placeholder attribute for the input */
    placeholder: {
      type: String,
      default: null,
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
      this.$emit('input', '');

      this.$emit('eventHandler', '');
    },

    handleEvent(value) {
      if (!value && value !== '') return;

      this.$emit('eventHandler', value);
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@scss/_input-text';
</style>
