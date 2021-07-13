<template>
  <div :id="id" class="tags-filter">
    <template v-for="(tag, index) in tags">
      <span :key="index">
        {{ tag }}
        <img src="@img/icon/icon-close-black.svg" @click="deleteTag(index)" />
      </span>
    </template>
  </div>
</template>

<script>
export default {
  name: 'TagsFilter',

  props: {
    /** Specify a custom id */
    id: {
      type: String,
      required: true,
    },

    /** Specify tags value */
    value: {
      type: Array,
      required: true,
      default: () => [],
    },
  },

  data() {
    return {
      tags: this.value || [],
    };
  },

  watch: {
    tags(n) {
      this.$emit('input', n);
      this.$emit('delete');
    },
  },

  methods: {
    deleteTag(index) {
      this.tags.splice(index, 1);
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@scss/_tags-filter';
</style>
