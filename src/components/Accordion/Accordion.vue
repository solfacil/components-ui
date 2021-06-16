<template>
  <div :id="id" class="accordion">
    <div class="description" @click="showContent = !showContent">
      <h2>{{ title }}</h2>
      <span
        class="accordion__arrow"
        :class="{ accordion__arrow_down: showContent }"
      >
        <svg
          width="10"
          height="12"
          viewBox="0 0 10 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5 1L5 11M5 11L9 7.36364M5 11L1 7.36364"
            stroke="#666666"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </span>
    </div>

    <transition name="accordion-content">
      <slot></slot>
    </transition>

    <hr v-show="bottomLine" />
  </div>
</template>

<script>
export default {
  name: 'Accordion',

  props: {
    /** Specify a custom id */
    id: {
      type: String,
      required: true,
    },

    /** The text that appear before the button */
    title: {
      type: String,
      required: true,
      default: 'Title',
    },

    /** If the component instantiate open or closed */
    open: {
      type: Boolean,
      default: false,
    },

    /** If the component have the bottom line separator */
    bottomLine: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {
      showContent: this.open,
    };
  },

  methods: {},
};
</script>

<style lang="scss" scoped>
@import '@scss/_accordion';
</style>
