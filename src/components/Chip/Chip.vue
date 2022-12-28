<template>
  <span :class="['chip', { small }]">
    {{ label }}
    <div class="svg-wrapper" @click="handleClick()">
      <CloseIcon :class="{ small }" />
    </div>
    <div v-if="tooltip" class="chip-tooltip">
      {{ tooltip }}
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

    tooltip: {
      type: String,
      default: '',
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
