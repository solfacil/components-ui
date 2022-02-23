<template>
  <div
    v-if="filters.length"
    v-click-outside="hideFilters"
    class="sol-dropdown-filter"
    data-element="dropdown"
  >
    <span
      class="dropdown-trigger"
      :class="{ count, open: showFilters }"
      @click="toggleShowFilters"
    >
      <span v-if="count">{{ count }}</span>
      Filtro
      <IconFilter :class="{ 'icon-count': count || showFilters }" />
    </span>

    <div :class="[dropwnContentClass, { open: showFilters }]">
      <dl v-if="isMobile" class="filter-menu">
        <template v-for="(item, index) in filters">
          <dt
            :key="`title-${index}`"
            :class="[
              'item',
              item.type,
              {
                active: isActiveItem(index),
                selected: itemIsSelected(item),
              },
            ]"
            @click="handleClickMenuItem({ item, index })"
          >
            <template v-if="itemIsBinary(item)">
              <div class="label">
                {{ item.name }}
              </div>
              <ToggleSwitch
                :id="`toggle-binary-${index}`"
                v-model="binaryStates[item.name]"
                class="toggle-binary"
                :checked="binaryStates[item.name]"
                @input="(value) => handleSwitch(value, item.name)"
              />
            </template>
            <template v-else>
              <span>{{ item.name }}</span>
            </template>
          </dt>

          <transition
            :key="`transition-${index}`"
            mode="out-in"
            name="accordion-content"
          >
            <dd
              v-if="isActiveItem(index) && hasActiveIndex"
              :key="`description-${index}`"
              class="item-content"
              :class="{
                active: isActiveItem(index),
              }"
            >
              <component
                :is="getComponentItem(item)"
                :id="`filter-body-active-${index}`"
                :value="filtersSelected[activeFilter.name]"
                :filter="item"
                @change="handleChangeFilterModel"
              />
            </dd>
          </transition>
        </template>
      </dl>

      <nav v-if="!isMobile">
        <ul>
          <li
            v-for="(item, index) in filters"
            :key="index"
            :class="{
              active: isActiveItem(index),
              selected: itemIsSelected(item),
            }"
            @click="handleClickMenuItem({ item, index })"
          >
            <template v-if="itemIsBinary(item)">
              <div class="label">
                {{ item.name }}
              </div>
              <ToggleSwitch
                :id="`toggle-binary-${index}`"
                v-model="binaryStates[item.name]"
                class="toggle-binary"
                :checked="binaryStates[item.name]"
                @input="(value) => handleSwitch(value, item.name)"
              />
            </template>
            <template v-else>
              <span>{{ item.name }}</span>
            </template>
          </li>
        </ul>
      </nav>

      <div v-if="!isMobile" class="dropdown-main">
        <transition
          v-for="(item, index) in filters"
          :key="`transition-desktop-${index}`"
          mode="out-in"
          name="dropown-main-content"
        >
          <component
            :is="getComponentItem(item)"
            v-if="isActiveItem(index)"
            :id="`filter-body-active-${index}`"
            :key="index"
            :value="filtersSelected[activeFilter.name]"
            :filter="item"
            @change="handleChangeFilterModel"
          />
        </transition>
      </div>

      <footer class="filter-footer">
        <Button
          id="clear"
          variant="secondary"
          size="small"
          @click="clearFilters"
        >
          Limpar
        </Button>

        <Button id="aplly" size="small" @click="applyFilters(true)">
          Aplicar
        </Button>
      </footer>
    </div>
  </div>
</template>

<script>
import FilterSelectList from '@components/FilterComponent/FilterSelectList/FilterSelectList';
import FilterRange from '@components/FilterComponent/FilterRange/FilterRange';
import ClickOutside from '@directives/clickOutside';
import Button from '@components/Button/Button';
import ToggleSwitch from '@components/ToggleSwitch/ToggleSwitch';
import IconFilter from '@img/icon/icon-filter.svg';
import { breakpointable } from './../../mixins/index';
import mapValues from 'lodash/mapValues';
import result from 'lodash/result';

export default {
  name: 'FilterComponent',

  components: {
    Button,
    ToggleSwitch,
    FilterSelectList,
    FilterRange,
    IconFilter,
  },

  directives: { ClickOutside },
  mixins: [breakpointable],
  props: {
    /** Specify a custom id */
    id: {
      type: String,
      default: '',
    },
    filters: {
      type: Array,
      required: true,
    },
  },

  data() {
    return {
      showFilters: false,
      count: null,
      activeFilter: null,
      filtersSelected: {},
      filterApplied: {},
      binaryStates: {},
      activeIndex: null,
    };
  },

  computed: {
    hasActiveIndex() {
      return this.activeIndex !== null;
    },
    isMobile() {
      return ['xs', 'sm'].includes(this.breakpoint);
    },
    dropwnContentClass() {
      return `dropdown-content${this.isMobile ? '-mobile' : ''}`;
    },
  },

  watch: {
    filters: {
      handler: function () {
        this.setupFilters();
      },
      deep: true,
    },
  },

  created() {
    const filtersForActive = this.filters.filter(
      (item) => !this.itemIsBinary(item),
    );

    if (filtersForActive && Boolean(filtersForActive.length)) {
      this.activeFilter = { ...filtersForActive[0] };
      this.activeIndex = 0;
    }

    this.setupBinaryFilters();
    this.setupFilters();
  },
  methods: {
    getComponentItem(item) {
      const componentsObject = {
        list: 'FilterSelectList',
        range: 'FilterRange',
        custom: item.component,
        default: '',
      };

      return componentsObject[item.type] || componentsObject.default;
    },
    setupBinaryFilters() {
      let binaryStatesTemp = {};
      this.filters.filter(this.itemIsBinary).forEach((item) => {
        binaryStatesTemp[item.name] = false;
      });

      this.binaryStates = binaryStatesTemp;
    },
    handleChangeFilterModel(value) {
      this.$set(this.filtersSelected, this.activeFilter.name, value);
    },
    toggleShowFilters() {
      this.showFilters = !this.showFilters;
    },
    hideFilters() {
      this.showFilters = false;
    },
    isActiveItem(index) {
      return this.activeIndex === index;
    },
    itemIsSelected(item) {
      return (
        !this.itemIsBinary(item) &&
        Boolean(this.filterApplied[item.name].length)
      );
    },
    itemIsBinary(item) {
      return item.type === 'binary';
    },
    handleClickMenuItem({ item, index }) {
      if (!this.itemIsBinary(item)) {
        this.activeFilter = this.filters[index];
        this.activeIndex = index;
      }
    },
    handleSwitch(value, name) {
      this.filtersSelected[name] = value;
    },
    setupFilters() {
      this.filters.forEach((filter) => {
        const value = result(
          {
            binary: false,
            custom: filter.defaultValue,
          },
          filter.type,
          [],
        );

        this.filtersSelected[filter.name] = value;
        this.filterApplied[filter.name] = value;
      });

      this.binaryStates = mapValues(this.binaryStates, () => false);
    },
    // Apply filters and emit them to parent component
    applyFilters() {
      const filterToApply = { ...this.filtersSelected };
      this.count = 0;
      this.filters.forEach((filter) => {
        this.filterApplied[filter.name] = filterToApply[filter.name];
        console.info(this.getCountByType(filter), filter.name);
        this.count = this.count + this.getCountByType(filter);
      });

      this.$emit('applyFilters', this.filterApplied);
      this.toggleShowFilters();
      this.$forceUpdate();
    },

    getCountByType(filter) {
      const filterSelected = this.filtersSelected[filter.name];
      const countObject = {
        list: filterSelected?.length,
        range: filterSelected?.length > 1 ? 1 : 0,
        default: this.getCountCustom(filterSelected),
      };

      return result(countObject, filter.type, countObject.default);
    },
    getCountCustom(filterSelected) {
      console.info('filterSelected', filterSelected);
      if (
        ['array', 'object'].includes(
          filterSelected?.constructor?.name?.toLowerCase(),
        )
      ) {
        return Object.keys(filterSelected).length;
      }

      return filterSelected ? 1 : 0;
    },
    clearFilters() {
      this.setupFilters();
      this.applyFilters();
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@scss/_filtercomponent';
</style>

<style lang="scss">
.sol-dropdown-filter {
  .input {
    @apply mb-4;

    input {
      @apply h-9;
    }
  }
}
</style>
