<template>
  <span :class="['chip', { small }]">
    {{ label }}
    <div class="svg-wrapper" @click="handleClick()">
      <CloseIcon :class="{ small }" />
    </div>
  </span>
</template>

<script>
import CloseIcon from '@img/icon/icon-close.svg';
export default {
  name: 'Chip',

  components: {
    CloseIcon,
  },

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
