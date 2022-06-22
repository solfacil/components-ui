<template>
  <Component :is="dynamicIcon" :id="id" @click="click" />
</template>

<script>
export default {
  name: 'Icon',
  props: {
    /** Specify a custom id */
    id: {
      type: String,
      required: true,
    },
    /** Specify icon name, You can use any icon that you have inside the
     * components ui, it is not necessary to pass the "icon-",
     * just what comes after that. */
    type: {
      type: String,
      required: true,
    },
  },
  computed: {
    dynamicIcon() {
      return () => import(`@img/icon/icon-${this.type}.svg`);
    },
  },
  methods: {
    click() {
      this.$emit('click');
    },
  },
};
</script>
