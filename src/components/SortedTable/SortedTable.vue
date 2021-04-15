<template>
  <div class="scroll-table">
    <table
      :id="id || `table-${_uid}`"
      class="sort-table"
      :class="{ 'last-item-right': lastRight }"
    >
      <thead role="rowgroup">
        <tr role="row">
          <th v-for="(field, index) in fields" :key="index" role="columnheader">
            <strong
              :class="{ 'cursor-pointer': field.sortable }"
              @click="bind(field.key, field.sortable)"
            >
              {{ field.title }}

              <i
                v-if="field.sortable && field.key"
                class="arrow-sort"
                :class="{
                  asc: isActiveAsc(field.key),
                  desc: isActiveDesc(field.key),
                }"
              />
            </strong>
          </th>

          <slot name="thead-th" />
        </tr>
      </thead>

      <tbody role="rowgroup">
        <slot name="tbody" />
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'SortedTable',

  props: {
    /**
     * Provide the content for the `<thead />`
     */
    fields: {
      required: true,
      type: Array,
      validator: (obj) => {
        if (!(obj && obj.constructor === Array)) return false;
        const accordionProperties = ['title'].filter(
          (property) => !Object.prototype.hasOwnProperty.call(obj[0], property),
        );
        return accordionProperties.length === 0;
      },
    },

    /**
     * Specify a custom id
     */
    id: {
      type: String,
      default: null,
    },

    /**
     * Align text last item right thead an tbody`
     */
    lastRight: {
      type: Boolean,
      default: false,
    },

    /**
     * Active arrow by order 'asc' or 'desc'
     */
    orderBy: {
      required: true,
      type: String,
    },
  },

  data() {
    return {
      activeItem: null,
    };
  },

  methods: {
    bind(key, sortable) {
      if (!sortable || !key) return;

      this.activeItem = key;
      this.$emit('sort', key);
    },

    isActiveAsc(key) {
      return this.activeItem === key && this.orderBy.toLowerCase() === 'asc';
    },

    isActiveDesc(key) {
      return this.activeItem === key && this.orderBy.toLowerCase() === 'desc';
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@scss/_tables';
</style>
