<template>
  <table v-if="items.length" :id="id" class="sol-table-list">
    <tr v-for="(item, index) in items" :key="index">
      <th :class="{ 'th-width': thWidth }">{{ item.title }}</th>
      <td>{{ item.description }}</td>
    </tr>
  </table>
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
      required: true,
    },

    /**
     * Provides the contents of the list
     */
    items: {
      type: Array,
      required: true,
      validator: (obj) => {
        if (!(obj && obj.constructor === Array)) return false;
        if (obj.length === 0) return true;
        const ListProperties = ['title', 'description'].filter(
          (property) => !Object.prototype.hasOwnProperty.call(obj[0], property),
        );
        return ListProperties.length === 0;
      },
    },
    /** Set header cell, th tag, min width MD / 150px  */
    thWidth: {
      default: true,
      type: Boolean,
    },
  },
};
</script>
<style lang="scss" scoped>
@import '@scss/_list';
</style>
