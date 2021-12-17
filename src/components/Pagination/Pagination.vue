<template>
  <div :id="id" class="sol-pagination" :class="{ 'justify-end': alignRight }">
    <span>{{ start }} - {{ end }} de {{ totalItems }}</span>

    <div v-if="isVisibleNav">
      <a
        class="prev"
        :class="{ disabled: !hasPrevPage }"
        @click="getPage({ beforeCursor: data.beforeCursor }, 'prev')"
      >
        <span>Anterior</span>
      </a>
      <a
        class="next"
        :class="{ disabled: !hasNextPage }"
        @click="getPage({ afterCursor: data.afterCursor }, 'next')"
      >
        <span>Próximo</span>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Pagination',

  props: {
    /** Set position right */
    alignRight: {
      type: Boolean,
      default: false,
    },

    /** Reset to initial values (useful on changing sorting) */
    reset: {
      type: Boolean,
      default: false,
    },

    /** Specify a custom id */
    id: {
      type: String,
      required: true,
    },

    data: {
      required: true,
      type: Object,
      validator: function (obj) {
        return (
          'afterCursor' in obj &&
          'beforeCursor' in obj &&
          'count' in obj &&
          'size' in obj
        );
      },
    },

    /** Size of response array */
    pageSize: {
      required: true,
      type: Number,
    },
  },

  data() {
    return {
      start: 1,
      end: null,
      innerValue: 1,
      remainder: null,
    };
  },

  computed: {
    totalItems() {
      return this.data.count;
    },

    isVisibleNav() {
      return this.data.count > this.pageSize;
    },

    hasPrevPage() {
      return Boolean(this.data.beforeCursor);
    },

    hasNextPage() {
      return Boolean(this.data.afterCursor);
    },
  },

  watch: {
    reset(val) {
      if (val) {
        this.initialData();
      }
    },

    pageSize() {
      this.initialData();
    },

    'data.count': {
      deep: true,
      handler(val, oldVal) {
        if (val !== oldVal) this.initialData();
      },
    },
  },

  mounted() {
    this.initialData();
  },

  methods: {
    getPage(cursor, type) {
      if (type === 'prev' && this.hasPrevPage) {
        this.start -= this.pageSize;
        this.$emit('clickHandler', cursor);

        this.end === this.totalItems
          ? (this.end -= this.remainder)
          : (this.end -= this.pageSize);

        return;
      }

      if (type === 'next' && this.hasNextPage) {
        this.start += this.pageSize;

        this.end =
          this.end + this.pageSize > this.totalItems
            ? this.end + this.remainder
            : (this.end += this.pageSize);

        this.$emit('clickHandler', cursor);

        return;
      }
    },

    initialData() {
      this.start = 1;
      this.innerValue = 1;
      this.end =
        this.pageSize > this.data.count ? this.data.count : this.pageSize;
      this.remainder = this.data.count % this.pageSize;
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@scss/_pagination';
</style>
