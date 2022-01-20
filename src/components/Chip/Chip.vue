<template>
  <span :class="['chip', { small }]">
    {{ label }}
    <div class="svg-wrapper" @click="handleClick()">
      <img src="@img/icon/icon-close-black.svg" :class="{ small }" />
    </div>
  </span>
</template>

<script>
export default {
  name: 'Chip',

  props: {
    label: {
      type: String,
      required: true,
    },

    small: {
      type: Boolean,
      default: false,
    },
  },

  methods: {
    handleClick() {
      this.$emit('close');
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@scss/_chip';
</style>
