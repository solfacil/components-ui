<template>
  <div class="sol-input-search-component">
    <div class="wrapper">
      <SelectInput
        id="select-search"
        v-model="fieldValue"
        class="select"
        :searchable="false"
        :placeholder="placeholder"
        :options="fields"
        @change="changeField()"
      />
      <Input
        id="input-search"
        v-model="inputValue"
        class="input"
        type="search"
        @input="inputEventValue()"
        @change="inputValueChange()"
        @eventHandler="inputEventHandle()"
      />
    </div>
  </div>
</template>

<script>
import Input from '../Input/Input.vue';
import SelectInput from '../SelectInput/SelectInput.vue';
import debounce from 'lodash/debounce';

export default {
  name: 'SolSearchField',
  components: {
    SelectInput,
    Input,
  },
  props: {
    /** Specify a custom `id` for the input */
    id: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      default: 'Selecione',
    },
    fields: {
      type: Array,
      required: true,
      validator: (options) => {
        return options
          .map((option) => 'name' in option && 'value' in option)
          .reduce((acumulator, item) => acumulator && item);
      },
    },
    value: {
      type: Object,
      required: true,
    },
  },
  data: () => ({
    inputValue: '',
    fieldValue: '',
  }),
  computed: {
    model() {
      return { field: this.fieldValue, value: this.inputValue };
    },
  },
  watch: {
    value() {
      this.setupValue();
    },
  },
  created() {
    this.setupValue();
  },
  methods: {
    emitEvents: debounce(function sortDebounce() {
      this.$emit('input', this.model);
      this.$emit('change', this.model);
    }, 300),
    setupValue() {
      this.inputValue = this.value.value;

      if (!this.value.field) {
        this.fieldValue = this.fields[0].value;
        return;
      }

      this.fieldValue = this.value.field;
    },
    inputEventValue() {
      this.$emit('input', this.model);
    },
    inputValueChange() {
      if (!this.inputValue) {
        this.$emit('change', this.model);
      }
    },
    changeField() {
      if (this.inputValue && this.inputValue !== '') {
        this.emitEvents();
      }
    },
    inputEventHandle() {
      this.emitEvents();
    },
  },
};
</script>

<style lang="scss">
@import '@scss/_searchfield';
</style>
