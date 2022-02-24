<template>
  <div :id="id" class="sol-filterselectlist">
    <Input
      v-if="hasScrolling && !hideSearch"
      id="filter-searchbar"
      v-model="searchString"
      class="filter-searchbar"
      type="search"
      :placeholder="placeholderSearch"
    />

    <div
      ref="filterSelectlist"
      :class="['list', { 'non-searchable': !hasScrolling || hideSearch }]"
    >
      <div
        v-for="item in items"
        :key="item.value"
        class="list-item"
        @click.prevent.stop="handleClickSelectItem(item)"
      >
        <span>{{ item.name }}</span>
        <Checkbox :id="`${item.name}-checkbox`" :value="isItemSelected(item)" />
      </div>
    </div>
  </div>
</template>

<script>
import Input from '@components/Input/Input';
import Checkbox from '@components/Checkbox/Checkbox';

export default {
  name: 'FilterSelectList',

  components: {
    Input,
    Checkbox,
  },
  props: {
    id: {
      type: String,
      default: 'sol-filterselectlist',
    },
    filter: {
      type: Object,
      required: true,
      validator: (obj) => {
        return obj.items && Array.isArray(obj.items);
      },
    },
    value: {
      type: Array,
      default: () => [],
    },
    placeholderSearch: {
      type: String,
      default: 'Busque aqui',
    },

    hideSearch: {
      type: Boolean,
      default: () => false,
    },
  },

  data() {
    return {
      searchString: '',
      data: [...this.value],
      interval: null,
      hasScrolling: false,
    };
  },
  computed: {
    filterSelectlist() {
      return this.$refs.filterSelectlist || {};
    },
    items() {
      return this.filter.items.filter((item) => {
        if (!this.searchString) {
          return true;
        }

        return item.name.toLowerCase().includes(
          this.searchString
            .normalize('NFD')
            .replace(/[^\w\d\s]/gu, '')
            .toLowerCase(),
        );
      });
    },
  },
  watch: {
    value() {
      this.data = [...this.value];
    },
  },
  mounted() {
    this.interval = setInterval(this.verifyScroll, 100);
  },
  destroyed() {
    clearInterval(this.interval);
  },
  methods: {
    verifyScroll() {
      if (!this.filterSelectlist) {
        this.hasScrolling = false;
        return;
      }

      if (this.searchString !== '') {
        return;
      }

      this.hasScrolling =
        this.filterSelectlist.scrollHeight > this.filterSelectlist.clientHeight;
    },
    handleClickSelectItem(item) {
      this.isItemSelected(item)
        ? this.unselectItem(item)
        : this.selectItem(item);

      this.$emit('input', this.data);
      this.$emit('change', this.data);
    },
    isItemSelected(item) {
      return this.data.includes(item.value);
    },

    selectItem(item) {
      this.data.push(item.value);
    },

    unselectItem(item) {
      const index = this.data.indexOf(item.value);
      this.data.splice(index, 1);
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@scss/_filterselectlist';
</style>
