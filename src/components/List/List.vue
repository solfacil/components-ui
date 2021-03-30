<template>
  <div :id="id || `list-${_uid}`" class="sol-list">
    <div class="list">
      <slot />
    </div>
    <div class="list-item">
      <slot name="listItem" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'List',

  props: {
    /**
     * Specify a custom id
     */
    id: {
      type: String,
      default: '',
    },
  },
};
</script>
<style lang="scss" scoped>
@import '@scss/_list';
</style>
