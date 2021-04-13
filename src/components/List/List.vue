<template>
  <table :id="id || `list-${_uid}`" class="sol-table-list">
    <tr v-for="(items, index) in itemsList" :key="index">
      <th>{{ items.title }}</th>
      <td>{{ items.description }}</td>
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
