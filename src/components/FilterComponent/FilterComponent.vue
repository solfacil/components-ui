<template>
  <div v-click-outside="hideFilters" class="sol-filter">
    <div
      :class="['filter-btn dropdown-trigger', { active: countFilters() > 0 }]"
      @click="toggleShowFilters"
    >
      <span class="dropdown-trigger">Filtro</span>
      <IconFilter class="dropdown-trigger" />

      <div v-if="countFilters() > 0" class="filter-counter-token">
        {{ countFilters() }}
      </div>
    </div>
    <div :class="['filter-overlay', { 'display-hidden': !showFilters }]">
      <div class="filter-overlay-content">
        <div class="filter-menu">
          <div
            v-for="item in filters"
            :key="item.name"
            :class="[
              'item',
              item.type,
              {
                active: isActiveItem(item.name),
                'has-applied-filter':
                  item.type !== 'binary' && filterApplied[item.name].length > 0,
              },
            ]"
            @click="handleClickMenuItem(item)"
          >
            <template v-if="item.type === 'binary'">
              <div class="label">
                {{ item.name }}
              </div>
              <ToggleSwitch
                id="toggle-inativos"
                v-model="binaryStates[item.name]"
                :checked="binaryStates[item.name]"
                @input="(value) => handleSwitch(value, item.name)"
              />
            </template>
            <template v-else>
              <div class="active-mark"></div>
              <span>{{ item.name }}</span>
            </template>
          </div>
        </div>

        <div v-if="hasActiveFilterSelected" class="filter-select">
          <component
            :is="activeFilterComponent"
            id="filter-body-active"
            :value="filtersSelected[activeFilter.name]"
            :filter="activeFilter"
            @change="handleChangeFilterModel"
          />
        </div>

        <div class="filter-footer">
          <Button
            id="btn-filter-limpar"
            size="small"
            variant="secondary"
            @click="clearFilters"
            >Limpar</Button
          >
          <Button id="btn-filter-apply" size="small" @click="applyFilters">
            Aplicar
          </Button>
        </div>
      </div>
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
      activeFilter: null,
      filtersSelected: {},
      filterApplied: {},
      binaryStates: {},
    };
  },

  computed: {
    hasActiveFilterSelected() {
      if (!this.filtersSelected || !this.activeFilter) {
        return false;
      }

      return true;
    },
    activeFilterComponent() {
      if (!this.hasActiveFilterSelected) {
        return '';
      }

      switch (this.activeFilter.type) {
        case 'list':
          return 'FilterSelectList';
        case 'range':
          return 'FilterRange';
        case 'custom':
          return this.activeFilter.component;
        default:
          return '';
      }
    },
  },

  watch: {
    filters: {
      handler: function () {
        this.setupFilters();
        const filtersForActive = this.filters.filter(
          (item) => item.type !== 'binary',
        );

        if (filtersForActive && filtersForActive.length > 0) {
          this.activeFilter = { ...filtersForActive[0] };
        }
      },
      deep: true,
    },
  },

  created() {
    const filtersForActive = this.filters.filter(
      (item) => item.type !== 'binary',
    );

    if (filtersForActive && filtersForActive.length > 0) {
      this.activeFilter = { ...filtersForActive[0] };
    }

    this.setupBinaryFilters();
    this.setupFilters();
  },
  methods: {
    setupBinaryFilters() {
      let binaryStatesTemp = {};
      this.filters
        .filter((item) => item.type === 'binary')
        .forEach((item) => {
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
    isActiveItem(name) {
      return this.activeFilter?.name === name;
    },
    handleClickMenuItem(item) {
      if (item.type !== 'binary') {
        this.activeFilter = { ...item };
      }
    },
    handleSwitch(value, name) {
      this.filtersSelected[name] = value;
    },
    setupFilters() {
      this.filters.forEach((filter) => {
        let value = [];
        switch (filter.type) {
          case 'binary':
            value = false;
            break;
          case 'custom':
            value = filter.defaultValue;
            break;
          default:
            value = [];
        }
        this.filtersSelected[filter.name] = value;
        this.filterApplied[filter.name] = value;
      });

      for (const item in this.binaryStates) {
        this.binaryStates[item] = false;
      }
    },
    // Apply filters and emit them to parent component
    applyFilters() {
      const filterToApply = { ...this.filtersSelected };
      this.filters.forEach((filter) => {
        this.filterApplied[filter.name] = filterToApply[filter.name];
      });
      this.$emit('applyFilters', this.filterApplied);
      this.$forceUpdate();
    },

    clearFilters() {
      this.setupFilters();
      this.applyFilters();
    },
    /**
     * The following 'should' be a computed property
     * but Vue's core can't detect the change in data for it to work
     */
    countFilters() {
      const count = Object.keys(this.filterApplied).reduce((acc, key) => {
        if (Array.isArray(this.filterApplied[key])) {
          return acc + this.filterApplied[key].length;
        }

        if (this.filterApplied[key]) {
          return acc + 1;
        }

        return acc;
      }, 0);

      return count.toLocaleString('pt-br', { minimumIntegerDigits: 2 });
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@scss/_filtercomponent';
</style>
