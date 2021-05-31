<template>
  <span class="page-size">
    itens
    <SelectInput
      :id="id"
      v-model="currentValue"
      :options="options"
      position="top"
      @change="changeValue"
    />
  </span>
</template>

<script>
import SelectInput from './../SelectInput/SelectInput';

export default {
  name: 'PageSize',

  components: {
    SelectInput,
  },

  props: {
    /** Specify a custom id */
    id: {
      type: String,
      required: true,
    },
    /** Specify a value */
    value: {
      type: Number,
      required: true,
    },
  },

  data() {
    return {
      currentValue: 10,
      options: [
        {
          value: 10,
          name: '10',
        },
        {
          value: 20,
          name: '20',
        },
        {
          value: 50,
          name: '50',
        },
        {
          value: 100,
          name: '100',
        },
      ],
    };
  },

  methods: {
    changeValue(val) {
      this.$emit('change', val);
      this.$emit('input', val);
    },
  },
};
</script>

<style lang="scss" scoped>
.page-size {
  @apply inline-flex items-center text-small leading-tight;
}

.sol-select-input {
  @apply ml-1;
  min-width: 86px;
}
</style>

<style lang="scss">
.sol-select-input {
  @apply shadow-none #{!important};

  .select-main {
    span {
      line-height: 1.1;
    }
  }

  .options-container .options-list {
    @apply m-0 p-0 #{!important};

    li {
      @apply min-h-8 flex items-center py-0 #{!important};
      line-height: 1.1 !important;
    }
  }
}
</style>
