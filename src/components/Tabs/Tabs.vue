<template>
  <ul :id="id" class="sol-tabs" :class="{ small }">
    <li
      v-for="(item, index) in items"
      :key="index"
      :class="{ active: isActive(item.name), disabled: item.disabled }"
      @click="setActive(item)"
    >
      {{ item.label }}
    </li>
  </ul>
</template>

<script>
export default {
  name: 'Tabs',

  props: {
    /** Specify a custom id */
    id: {
      type: String,
      required: true,
    },

    /** Provide the content */
    items: {
      type: Array,
      required: true,
      validator: (obj) => {
        if (!(obj && obj.constructor === Array)) return false;
        const accordionProperties = ['name', 'label'].filter(
          (property) => !Object.prototype.hasOwnProperty.call(obj[0], property),
        );
        return accordionProperties.length === 0;
      },
    },

    /** Specify the small size */
    small: {
      type: Boolean,
      default: false,
    },

    /** Specify the value of the input - v-model */
    value: {
      type: [String, Number],
      default: null,
    },
  },

  data() {
    return {
      activeItem: null,
    };
  },

  watch: {
    value(val) {
      this.activeItem = val;
    },
  },

  beforeMount() {
    this.setActiveLoad();
  },

  methods: {
    isActive(item) {
      return this.activeItem === item;
    },

    setActive(item) {
      if (this.activeItem === item.name || item.disabled) return;
      this.activeItem = item.name;
      this.$emit('input', item.name);
      this.$emit('changed', item.name);
    },

    setActiveLoad() {
      const active = this.items.find((obj) => !obj.disabled);
      this.activeItem = this.value ? this.value : active.name;
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@scss/_tabs';
</style>
