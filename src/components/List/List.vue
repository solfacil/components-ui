<template>
  <div :id="id || `list-${_uid}`">
    <div v-for="(items, index) in itemsList" :key="index" class="sol-list">
      <div class="list">
        {{ items.title }}
      </div>
      <div class="list-item">
        {{ items.description }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'List',

  props: {
    /**
     * Specify a custom id
     */
    id: {
      type: String,
      default: '',
    },

    /**
     * Provides the contents of the list
     */
    itemsList: {
      type: Array,
      required: true,
      validator: (obj) => {
        if (!(obj && obj.constructor === Array)) return false;
        const ListProperties = ['title', 'description'].filter(
          (property) => !Object.prototype.hasOwnProperty.call(obj[0], property),
        );
        return ListProperties.length === 0;
      },
    },
  },
};
</script>
<style lang="scss" scoped>
@import '@scss/_list';
</style>
