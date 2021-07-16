<template>
  <div :id="id" class="accordion">
    <dl>
      <template v-for="(item, index) in headers">
        <dt :key="`title-${index}`" :class="{ small }" @click="openItem(index)">
          {{ item }}

          <span
            class="arrow"
            :class="{
              arrow_down: showContent(index),
            }"
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
        </dt>

        <transition
          :key="`transition-${index}`"
          mode="out-in"
          name="accordion-content"
          @before-enter="beforeEnterCurrent"
          @enter="enterCurrent"
        >
          <dd
            v-show="showContent(index)"
            :key="`description-${index}`"
            :class="{ small }"
          >
            <slot :name="`description-${index}`"></slot>
          </dd>
        </transition>
      </template>
    </dl>
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

    /** If the component begins with an element opened. Elements begin with index 0. */
    open: {
      type: Number,
      default: -1,
    },

    /** An array of titles for the accordion elements. Each header come with a slot named "description-indexOfHeader" to add content. */
    headers: {
      type: Array,
      required: true,
      validator: (valueAccordion) => {
        if (!(valueAccordion && valueAccordion.constructor === Array))
          return false;
        return true;
      },
    },

    /** Specify the small size */
    small: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {
      currentIndex: -1,
      hasOpened: 0,
    };
  },

  watch: {
    open(val) {
      this.openItem(val);
    },
  },

  methods: {
    openItem(current) {
      if (current === this.currentIndex) {
        this.currentIndex = -10;
      } else {
        this.currentIndex = current;
      }
    },

    showContent(index) {
      if (this.hasOpened < 2 && this.open !== -1 && this.open === index) {
        this.currentIndex = this.open;
        this.hasOpened++;
        return index === this.open;
      }
      return this.currentIndex === index;
    },

    beforeEnterCurrent: function (_t) {
      _t.style.display = 'block';
      _t.style.maxHeight = null;
      _t.myHeight = _t.offsetHeight;
      _t.style.maxHeight = 0;
      _t.style.display = null;
    },

    enterCurrent: function (_t) {
      _t.style.maxHeight = _t.myHeight + 'px';
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@scss/_accordion';
</style>
