<template>
  <div
    :id="id"
    ref="root"
    v-click-outside="closeSelect"
    class="sol-multi-select-input"
  >
    <label v-if="label">
      {{ label }}<span v-if="isRequired" class="required">*</span>
    </label>

    <div
      class="select-main"
      data-testid="select"
      :class="{
        'bg-gray1 rounded-t': showOptions,
        'error-input': invalid,
        disabled,
      }"
      @click="toggleSelect"
    >
      <span v-if="!!$slots['icon']" class="icon">
        <!-- @slot Use this slot icon AddOns -->
        <slot name="icon"></slot>
      </span>
      <span
        v-if="(placeholder && selected.length === 0) || hideChips"
        class="placeholder"
      >
        {{ placeholder }}
      </span>
      <div v-else class="selected-wrapper">
        <template v-for="(tag, index) in selected">
          <span :key="index" class="tag">
            {{ tag.name }}
            <img
              src="@img/icon/icon-close.svg"
              @click.stop.prevent="removeSelectedIndex(index)"
            />
          </span>
        </template>
      </div>

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
          v-for="(item, index) in searchItems(searchString)"
          :key="item.value"
          @click.prevent="selectItem(item)"
        >
          <Checkbox
            :id="`list-${index}`"
            :text="item.name"
            :value="isItemSelected(item)"
          />
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
import Checkbox from '@components/Checkbox/Checkbox.vue';
export default {
  name: 'MultiSelect',

  components: {
    Checkbox,
  },

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
      type: Array,
      default: () => [],
    },

    /** Specify whether to show a red * at the end of the label or not */
    isRequired: {
      type: Boolean,
      default: false,
    },

    /** Hide the selection chips */
    hideChips: {
      type: Boolean,
      default: false,
    },
  },

  data: () => ({
    showOptions: false,
    searchString: '',
    selected: [],
  }),

  watch: {
    options() {
      this.selected = null;
    },
  },

  created() {
    if (this.value) {
      this.options.map((item) => {
        if (item.value === this.value) this.selected = [...this.selected, item];
      });
    }
  },

  methods: {
    toggleSelect() {
      this.showOptions = !this.showOptions;
    },

    closeSelect() {
      this.showOptions = false;
    },

    removeSelectedIndex(index) {
      this.selected.splice(index, 1);
    },

    selectItem(option) {
      // Check if option is already selected and delete if it is
      if (this.selected.find((item) => item.value === option.value)) {
        this.selected = this.selected.filter(
          (item) => item.value !== option.value,
        );
      }

      // Add option to selected if not
      else {
        this.selected = [...this.selected, option];
      }

      this.$emit('input', this.selected);
      this.$emit('change', this.selected);
    },

    isItemSelected(item) {
      return !!this.selected.find(
        (selectedItem) => selectedItem.value === item.value,
      );
    },

    searchItems(searchString) {
      if (searchString) {
        const specialCharacters = (v) => {
          return v
            .normalize('NFD')
            .replace(/[^\w\d\s]/gu, '')
            .toLowerCase();
        };

        const searchQuery = specialCharacters(searchString);

        return this.options.filter((item) => {
          const name = specialCharacters(item.name);

          return name.includes(searchQuery);
        });
      }
      return this.options;
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@scss/_multiselect';
</style>