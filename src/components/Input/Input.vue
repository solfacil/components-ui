<template>
  <div class="sol-input">
    <span v-if="!!$slots['icon']" class="icon">
      <!-- @slot Use this slot icon AddOns -->
      <slot name="icon"></slot>
    </span>

    <input
      :id="id"
      ref="solInput"
      :class="{ invalid, 'is-icon': $slots['icon'], search: type === 'search' }"
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
