<template>
  <div class="pagination" :class="{ 'justify-end': alignRight }">
    <span>{{ innerValue }} - {{ pageCount }} de {{ itemsCount }}</span>

    <div>
      <a class="prev" :class="{ disabled: firstPage() }" @click="prevPage()">
        <span>Anterior</span>
      </a>
      <a class="next" :class="{ disabled: lastPage() }" @click="nextPage()">
        <span>Próximo</span>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Pagination',

  props: {
    pageCount: {
      type: Number,
      required: true,
    },

    itemsCount: {
      type: Number,
      required: true,
    },

    alignRight: {
      required: false,
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {
      innerValue: 1,
    };
  },

  computed: {
    selected: {
      get: function () {
        return this.value || this.innerValue;
      },
      set: function (newValue) {
        this.innerValue = newValue;
      },
    },
  },

  methods: {
    handlePageSelected(selected) {
      if (this.selected === selected) return;

      this.innerValue = selected;
      this.$emit('input', selected);
      this.$emit('clickHandler', selected);
    },

    prevPage() {
      if (this.selected <= 1) return;

      this.handlePageSelected(this.selected - 1);
    },

    nextPage() {
      if (this.selected >= this.pageCount) return;

      this.handlePageSelected(this.selected + 1);
    },

    firstPage() {
      return this.selected === 1;
    },

    lastPage() {
      return this.selected === this.pageCount || this.pageCount === 0;
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@scss/_pagination';
</style>
