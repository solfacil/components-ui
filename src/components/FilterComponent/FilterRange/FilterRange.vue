<template>
  <div class="sol-filterrange">
    <p v-if="title">{{ title }}</p>

    <vue-slider
      v-model="val"
      :dot-size="16"
      :height="8"
      :interval="interval"
      :min="min"
      :max="max"
      :tooltip="'none'"
      :contained="true"
      @change="change"
    />

    <div class="interval">
      <span>{{ getPrepend(val[0]) }} {{ val[0] }} {{ getAppend(val[0]) }}</span>
      <span>{{ getPrepend(val[1]) }} {{ val[1] }} {{ getAppend(val[1]) }}</span>
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
    append() {
      return this.filter.append || '';
    },
    prepend() {
      return this.filter.prepend || '';
    },
    appendPlural() {
      return this.filter.appendPlural || '';
    },
    prependPlural() {
      return this.filter.prependPlural || '';
    },
    interval() {
      return this.filter.interval || 1.0;
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
    if (this.value.length === 2) {
      this.val = this.value.map((i) => Number(i));
      return;
    }

    this.val = [this.min, this.max];
  },

  methods: {
    getAppend(val) {
      if (!this.filter.appendPlural) {
        return this.append;
      }

      return [this.append, this.appendPlural][Number(val > 1)];
    },
    getPrepend(val) {
      if (!this.filter.prependPlural) {
        return this.prepend;
      }

      return [this.prepend, this.prependPlural][Number(val > 1)];
    },
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
