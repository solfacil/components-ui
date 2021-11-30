<template>
  <div :id="id" class="sol-inputminusplus">
    <button @click="decrement">-</button>
    <input id="" v-model="newValue" type="number" disabled />
    <button @click="increment">+</button>
  </div>
</template>

<script>
export default {
  name: 'InputMinusPlus',

  props: {
    /** Specify a custom id */
    id: {
      type: String,
      required: true,
    },

    /** Specify the value of the input - v-model */
    value: {
      type: Number,
      default: 0,
    },

    /** Specify the minimum value, default 0 */
    min: {
      type: Number,
      default: 0,
    },

    /** Specify the maximum value */
    max: {
      type: Number,
      required: true,
    },
  },

  data() {
    return {
      newValue: 0,
    };
  },

  watch: {
    value: {
      handler: function (newVal) {
        this.newValue = newVal;
      },
    },
  },

  created: function () {
    this.newValue = this.value ? this.value : this.min;
  },

  methods: {
    increment: function () {
      if (this.newValue < this.max) {
        this.newValue++;
        this.$emit('input', this.newValue);
      }
    },

    decrement: function () {
      if (this.newValue > this.min) {
        this.newValue--;
        this.$emit('input', this.newValue);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@scss/_inputminusplus';
</style>
