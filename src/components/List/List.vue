<template>
  <table :id="id || `list-${_uid}`" class="sol-table-list">
    <tr v-for="(item, index) in items" :key="index">
      <th>{{ item.title }}</th>
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
      default: null,
    },

    /**
     * Provides the contents of the list
     */
    items: {
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
