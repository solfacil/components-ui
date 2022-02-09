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
        <dl v-if="isMobile" class="filter-menu">
          <template v-for="(item, index) in filters">
            <dt
              :key="`title-${index}`"
              :class="[
                'item',
                item.type,
                {
                  active: isActiveItem(index),
                  'has-applied-filter':
                    item.type !== 'binary' &&
                    filterApplied[item.name].length > 0,
                },
              ]"
              @click="handleClickMenuItem({ item, index })"
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

        <div v-else class="filter-menu">
          <div
            v-for="(item, index) in filters"
            :key="index"
            :class="[
              'item',
              item.type,
              {
                active: isActiveItem(index),
                'has-applied-filter':
                  item.type !== 'binary' && filterApplied[item.name].length > 0,
              },
            ]"
            @click="handleClickMenuItem({ index, item })"
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

        <div v-if="!isMobile && hasActiveIndex" class="filter-select">
          <transition
            v-for="(item, index) in filters"
            :key="`transition-desktop-${index}`"
            mode="out-in"
            name="accordion-menu-content"
          >
            <component
              :is="getComponentItem(item)"
              v-if="isActiveItem(index)"
              :id="`filter-body-active-${index}`"
              :value="filtersSelected[activeFilter.name]"
              :filter="item"
              @change="handleChangeFilterModel"
            />
          </transition>
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
import { breakpointable } from './../../mixins/index';

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
      (item) => item.type !== 'binary',
    );

    if (filtersForActive && filtersForActive.length > 0) {
      this.activeFilter = { ...filtersForActive[0] };
      this.activeIndex = 0;
    }

    this.setupBinaryFilters();
    this.setupFilters();
  },
  methods: {
    getComponentItem(item) {
      switch (item.type) {
        case 'list':
          return 'FilterSelectList';
        case 'range':
          return 'FilterRange';
        case 'custom':
          return item.component;
        default:
          throw new Error(`Type: ${item.type} not supported`);
      }
    },
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
    isActiveItem(index) {
      return this.activeIndex === index;
    },
    handleClickMenuItem({ item, index }) {
      if (item.type !== 'binary') {
        this.activeFilter = this.filters[index];
        this.activeIndex = index;
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
