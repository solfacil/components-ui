<template>
  <div class="textarea">
    <label v-if="label" :for="id" :class="sizeClass">
      {{ label }} <span v-if="isRequired" class="required">*</span>
    </label>

    <div class="wrapper-textarea">
      <textarea
        :id="id"
        ref="solTextarea"
        :class="[
          {
            invalid,
          },
          sizeClass,
          hideResize,
        ]"
        :rows="rows"
        data-testid="textarea"
        :disabled="disabled"
        :name="name"
        :placeholder="placeholder"
        :value="value"
        :minlength="minlength"
        :maxlength="maxlength"
        @input="$emit('input', $event.target.value)"
        @keyup.enter="handleEvent($event.target.value)"
      />
    </div>

    <small v-if="invalid && msgInvalid" class="msg-error">
      {{ msgInvalid }}
    </small>
  </div>
</template>

<script>
export default {
  name: 'Textarea',

  props: {
    /** Specify a custom id */
    id: {
      type: String,
      required: true,
    },

    /** Specify if is disabled */
    disabled: {
      type: Boolean,
      default: false,
    },

    /** Is currently invalid */
    invalid: {
      type: Boolean,
      default: false,
    },

    /** Specify message for invalid field */
    msgInvalid: {
      type: String,
      default: null,
    },

    /** Specify a label */
    label: {
      type: String,
      default: null,
    },

    /** Specify a name */
    name: {
      type: String,
      default: null,
    },

    /** Specify a placeholder */
    placeholder: {
      type: String,
      default: null,
    },

    /** Specify the value of the input - v-model */
    value: {
      type: String,
      default: null,
    },

    /** Specify whether to show a red * at the end of the label or not */
    isRequired: {
      type: Boolean,
      default: false,
    },

    /** Number of rows */
    rows: {
      type: Number,
      default: 6,
    },

    /** Is resizable? default:false */
    resizable: {
      type: Boolean,
      default: false,
    },

    /** Large variation, 16px text */
    large: {
      type: Boolean,
      default: false,
    },

    /** Specify a min length */
    minlength: {
      type: String,
      default: null,
    },

    /** Specify a max length */
    maxlength: {
      type: String,
      default: null,
    },
  },

  data() {
    return {};
  },

  computed: {
    /** set large class for large prop */
    sizeClass() {
      return this.large ? 'large' : '';
    },

    /** set hide-resize class for resize prop false */
    hideResize() {
      return !this.resizable ? 'hide-resize' : '';
    },
  },

  methods: {
    handleEvent(value) {
      if (!value && value !== '') return;

      this.$emit('eventHandler', value);
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@scss/_textarea';
</style>
