<template>
  <div v-if="tags.length" :id="id" class="tags-filter">
    <Chip
      v-for="(tag, index) in tags"
      :key="index"
      :label="tag"
      :small="small"
      @close="deleteTag(index)"
    />
  </div>
</template>

<script>
import Chip from '@components/Chip/Chip';
export default {
  name: 'TagsFilter',

  components: {
    Chip,
  },

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

    /** small chips variation */
    small: {
      type: Boolean,
      default: false,
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
    },

    value() {
      this.tags = this.value;
    },
  },

  methods: {
    deleteTag(index) {
      this.tags.splice(index, 1);

      this.$emit('delete');
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@scss/_tags-filter';
</style>
