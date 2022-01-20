<template>
  <div class="scroll-table">
    <table
      :id="id"
      class="sort-table"
      :class="{ 'last-item-right': lastRight }"
    >
      <thead role="rowgroup">
        <tr role="row">
          <template v-for="(field, index) in fields" :key="index">
            <th
              v-if="field.hasOwnProperty('visibled') ? field.visibled : true"
              role="columnheader"
            >
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
                <Tooltip
                  v-if="field.tooltip"
                  :id="field.key"
                  class="ml-2"
                  :position="field.tooltip.position"
                >
                  <img src="@img/icon/icon-question.svg" />
                  <template slot="tooltip">{{
                    field.tooltip.message
                  }}</template>
                </Tooltip>
              </strong>
            </th>
          </template>

          <slot name="thead-th" />
        </tr>
      </thead>

      <tbody role="rowgroup" :class="{ 'no-hover': noHover }">
        <slot name="tbody" />
      </tbody>
    </table>
  </div>
</template>

<script>
import Tooltip from '@components/Tooltip/Tooltip';

export default {
  name: 'SortedTable',

  components: {
    Tooltip,
  },

  props: {
    /**
     * Provide the content for the `<thead />`
     */
    fields: {
      required: true,
      type: Array,
      validator: (obj) => {
        if (!(obj && obj.constructor === Array)) return false;
        const tableProperties = ['title'].filter(
          (property) => !Object.prototype.hasOwnProperty.call(obj[0], property),
        );
        return tableProperties.length === 0;
      },
    },

    /**
     * Specify a custom id
     */
    id: {
      type: String,
      required: true,
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

    /**
     * Desabled hover line
     */
    noHover: {
      type: Boolean,
      default: false,
    },

    /**
     * Set initial key active sortable arrow
     */
    keyActive: {
      type: String,
      default: null,
    },
  },

  data() {
    return {
      activeItem: null,
    };
  },

  created() {
    this.activeItem = this.keyActive;
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

<style lang="scss">
.scroll-table {
  table {
    .sol-tooltip {
      .content-tooltip {
        max-width: 210px;
      }
    }
  }
}
</style>
