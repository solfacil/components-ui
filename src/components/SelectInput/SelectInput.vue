<template>
  <div
    :id="id"
    ref="root"
    v-click-outside="closeSelect"
    class="sol-select-input"
  >
    <label v-if="label">
      {{ label }}<span v-if="isRequired" class="required">*</span>
    </label>

    <div
      class="select-main"
      data-testid="select"
      :class="{
        'bg-gray1 rounded-t': showOptions,
        rounded: !showOptions,
        'error-input': invalid,
        disabled,
      }"
      @click="toggleSelect"
    >
      <span v-if="!!$slots['icon']" class="icon">
        <!-- @slot Use this slot icon AddOns -->
        <slot name="icon"></slot>
      </span>

      <span :class="{ placeholder: !selected, 'is-icon': !!$slots['icon'] }">
        {{ selected ? selected.name : placeholder }}
      </span>

      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        :class="{ 'flip-arrow': showOptions && !disabled }"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 7L12 17M12 17L16 13.3636M12 17L8 13.3636"
          stroke="#999999"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>

    <div
      v-if="showOptions && !disabled"
      ref="optionList"
      class="options-container"
      :class="position"
    >
      <input
        v-if="searchable"
        v-model="searchString"
        type="search"
        placeholder="Busque aqui"
        class="shadow-none"
      />
      <ul class="options-list">
        <li
          v-for="item in searchItems(searchString)"
          :key="item.value"
          @click="selectItem(item)"
        >
          {{ item.name }}
        </li>
      </ul>
    </div>

    <small v-if="invalid && msgInvalid" class="msg-error">
      {{ msgInvalid }}
    </small>
  </div>
</template>

<script>
import clickOutside from '@directives/clickOutside.js';

export default {
  name: 'SelectInput',

  directives: {
    clickOutside,
  },

  props: {
    /**
     * Specify a custom id
     */
    id: {
      type: String,
      required: true,
    },

    /**
     * Provides the contents of the options
     */
    options: {
      type: Array,
      required: true,
      // Check if options contains name and value in each element of array
      validator: (options) => {
        return options
          .map((option) => 'name' in option && 'value' in option)
          .reduce((acumulator, item) => acumulator && item);
      },
    },

    /** Specify whether the filed search is enabled */
    searchable: { type: Boolean, default: false },

    /** Specify the placeholder attribute for the input */
    placeholder: {
      type: String,
      default: '',
    },

    /** Position items */
    position: {
      default: 'bottom',
      type: String,
      validator: (value) => ['top', 'bottom'].includes(value.toLowerCase()),
    },

    /** Specify message for invalid field */
    msgInvalid: {
      type: String,
      default: null,
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

    /** Specify whether the control is disabled */
    disabled: {
      type: Boolean,
      default: false,
    },

    /** Specify the value of the input - v-model */
    value: {
      type: [String, Number],
      default: null,
    },

    /** Specify whether to show a red * at the end of the label or not */
    isRequired: {
      type: Boolean,
      default: false,
    },
  },

  data: () => ({
    showOptions: false,
    selected: null,
    searchString: '',
  }),

  watch: {
    options() {
      const action = [
        this.assignSelectedFromOptions,
        () => (this.selected = null),
      ][Number(!this.value)];

      action();
    },

    value() {
      this.assignSelectedFromOptions();
    },
  },

  created() {
    if (this.value) {
      this.assignSelectedFromOptions();
    }
  },

  methods: {
    toggleSelect() {
      this.showOptions = !this.showOptions;
    },

    closeSelect() {
      this.showOptions = false;
    },

    selectItem(option) {
      this.selected = option;
      this.$emit('input', option.value);
      this.$emit('change', option.value);
      this.toggleSelect();
    },

    removeSpecialCharacters(v) {
      return v
        .normalize('NFD')
        .replace(/[^\w\d\s]/gu, '')
        .toLowerCase();
    },

    searchItems(searchString) {
      if (searchString) {
        const searchQuery = this.removeSpecialCharacters(searchString);

        return this.options.filter((item) => {
          const name = this.removeSpecialCharacters(item.name);

          return name.includes(searchQuery);
        });
      } else return this.options;
    },

    assignSelectedFromOptions() {
      const selectedValue = this.options.find(
        (item) => item.value === this.value,
      );
      if (selectedValue) this.selected = selectedValue;
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@scss/_selectinput';
</style>
