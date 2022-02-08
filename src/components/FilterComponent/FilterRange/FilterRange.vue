<template>
  <div class="sol-filterrange">
    <p v-if="title">{{ title }}</p>

    <vue-slider
      v-model="val"
      :dot-size="16"
      :height="8"
      :interval="1.0"
      :min="min"
      :max="max"
      :tooltip="'none'"
      :contained="true"
      @change="change"
    />

    <div class="interval">
      <span>{{ val[0] }}</span>
      <span>{{ val[1] }}</span>
    </div>
  </div>
</template>

<script>
import VueSlider from 'vue-slider-component';
import 'vue-slider-component/theme/default.css';

export default {
  title: 'FilterRange',

  components: {
    VueSlider,
  },

  props: {
    id: {
      type: String,
      default: 'sol-filterrange',
    },
    value: {
      type: Array,
      default: () => [],
    },

    filter: {
      type: Object,
      required: true,
    },
  },

  data() {
    return {
      val: [],
    };
  },

  computed: {
    title() {
      return this.filter.title || '';
    },
    min() {
      return this.filter.min || 0;
    },
    max() {
      return this.filter.max || 0;
    },
  },

  watch: {
    value: function (newVal) {
      if (newVal.length === 2) {
        this.val = newVal.map((i) => Number(i));
        return;
      }

      this.val = [this.min, this.max];
    },
  },

  created: function () {
    this.val = [this.min, this.max];
  },

  methods: {
    change(val) {
      this.$emit('input', val);
      this.$emit('change', val);
    },
  },
};
</script>

<style lang="scss">
@import '@scss/_filterrange';
</style>
