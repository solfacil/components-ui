<template>
  <ul class="sol-tabs">
    <li
      v-for="(item, index) in items"
      :key="index"
      :class="{ active: isActive(item.name) }"
      @click="setActive(item.name)"
    >
      {{ item.label }}
    </li>
  </ul>
</template>

<script>
export default {
  name: 'Tabs',

  props: {
    active: {
      type: String,
      default: null,
    },

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
  },

  data() {
    return {
      activeItem: null,
    };
  },

  beforeMount() {
    this.activeItem = this.active ? this.active : this.items[0].name;
  },

  methods: {
    isActive(item) {
      return this.activeItem === item;
    },

    setActive(item) {
      if (this.activeItem === item) return;
      this.activeItem = item;
      this.$emit('input', item);
      this.$emit('changed', item);
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@scss/_tabs';
</style>
