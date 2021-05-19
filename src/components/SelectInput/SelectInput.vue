<template>
  <div ref="root" v-click-outside="closeSelect" class="sol-select-input">
    <div
      class="select-main"
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
  </div>
</template>

<script>
export default {
  name: 'SelectInput',

  directives: {
    clickOutside: {
      bind: function (el, binding, vnode) {
        window.event = function (event) {
          if (!(el == event.target || el.contains(event.target))) {
            vnode.context[binding.expression](event);
          }
        };
        document.body.addEventListener('click', window.event);
      },
      unbind: function () {
        document.body.removeEventListener('click', window.event);
      },
    },
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

    /** Specify whether the control is currently invalid */
    invalid: {
      type: Boolean,
      default: false,
    },

    /** Specify whether the control is disabled */
    disabled: {
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
      this.selected = null;
    },
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
      } else return this.options;
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@scss/_selectinput';
</style>