<template>
  <div :id="id" class="select-search">
    <SelectInput
      :id="'multiselect-' + id"
      :options="options"
      :value="selectValue"
      :disabled="selectDisabled"
      :placeholder="selectPlaceholder"
      class="select"
    />
    <Input
      :id="'search-' + id"
      :value="inputValue"
      type="search"
      :disabled="inputDisabled"
      :placeholder="inputPlaceholder"
      class="input"
    />
  </div>
</template>

<script>
import Input from '../Input/Input.vue';
import SelectInput from '../SelectInput/SelectInput.vue';
export default {
  name: 'SelectSearch',

  components: {
    SelectInput,
    Input,
  },

  props: {
    /** Specify a custom `id` for the component */
    id: {
      type: String,
      required: true,
    },

    /** Specify whether the select component is disabled */
    selectDisabled: {
      type: Boolean,
      default: false,
    },

    /** Specify whether the input component is disabled */
    inputDisabled: {
      type: Boolean,
      default: false,
    },

    /** Specify the placeholder attribute for the select */
    selectPlaceholder: {
      type: String,
      default: 'Selecione',
    },

    /** Specify the placeholder attribute for the input */
    inputPlaceholder: {
      type: String,
      default: 'Busque aqui',
    },

    /** Specify the value of the input - v-model */
    selectValue: {
      type: [String, Number],
      default: null,
    },

    /** Specify the value of the input - v-model */
    inputValue: {
      type: [String, Number],
      default: null,
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
  },
};
</script>

<style lang="scss" scoped>
@import '@scss/_select-search';
</style>
