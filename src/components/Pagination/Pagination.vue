<template>
  <div :id="id" class="sol-pagination" :class="{ 'justify-end': alignRight }">
    <span>{{ initLimit }} - {{ endLimit }} de {{ data.count }}</span>

    <div v-if="toggle">
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
      initLimit: 1,
      endLimit: null,
      innerValue: 1,
      remainder: null,
    };
  },

  computed: {
    toggle() {
      return this.data.count > this.data.size;
    },

    hasPrevPage() {
      return Boolean(this.data.beforeCursor);
    },

    hasNextPage() {
      return Boolean(this.data.afterCursor);
    },
  },

  watch: {
    reset: function (val) {
      if (val) {
        this.initLimit = 1;
        this.innerValue = 1;
        this.endLimit = this.pageSize;
        this.remainder = this.data.count % this.data.size;
      }
    },
  },

  mounted() {
    this.endLimit =
      this.pageSize > this.data.count ? this.data.count : this.pageSize;
    this.remainder = this.data.count % this.data.size;
  },

  methods: {
    getPage(cursor, type) {
      if (type === 'prev' && this.hasPrevPage) {
        this.initLimit -= this.pageSize;

        if (this.hasNextPage) {
          this.endLimit -= this.pageSize;
        } else {
          this.endLimit -= this.remainder;
        }

        this.$emit('clickHandler', cursor);

        return;
      }

      if (type === 'next' && this.hasNextPage) {
        this.initLimit += this.pageSize;
        this.endLimit =
          this.endLimit + this.pageSize > this.data.count
            ? this.endLimit + this.remainder
            : (this.endLimit += this.pageSize);

        this.$emit('clickHandler', cursor);

        return;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@scss/_pagination';
</style>
