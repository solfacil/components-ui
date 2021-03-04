<template>
  <div
    v-if="toggle"
    :id="id || `pagination-${_uid}`"
    class="pagination"
    :class="{ 'justify-end': alignRight }"
  >
    <span>{{ initLimit }} - {{ endLimit }} de {{ data.count }}</span>

    <div>
      <a
        class="prev"
        :class="{ disabled: prevPage }"
        @click="getPage({ beforeCursor: data.beforeCursor }, 'prev')"
      >
        <span>Anterior</span>
      </a>
      <a
        class="next"
        :class="{ disabled: nextPage }"
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
    alignRight: {
      required: false,
      type: Boolean,
      default: false,
    },

    /** Specify a custom id */
    id: {
      type: String,
      default: '',
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

    prevPage() {
      return !this.data.beforeCursor || this.initLimit === 1;
    },

    nextPage() {
      return !this.data.afterCursor || this.endLimit >= this.data.count;
    },
  },

  mounted() {
    this.endLimit = this.data.size;
    this.remainder = this.data.count % this.data.size;
  },

  methods: {
    getPage(cursor, type) {
      if (type === 'prev' && !this.prevPage) {
        this.initLimit -= this.data.size;

        if (this.nextPage) {
          this.endLimit -= this.remainder;
        } else {
          this.endLimit -= this.data.size;
        }

        this.$emit('clickHandler', cursor);

        return;
      }

      if (type === 'next' && !this.nextPage) {
        this.initLimit += this.data.size;
        this.endLimit =
          this.endLimit + this.data.size > this.data.count
            ? this.endLimit + this.remainder
            : (this.endLimit += this.data.size);

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
