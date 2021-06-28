<template>
  <div :id="id" class="accordion">
    <dl class="">
      <template v-for="(item, index) in data">
        <dt :key="`title-${index}`" @click="openItem(index)">
          <span class="accordion_title">{{ item.title }}</span>
          <span
            class="accordion__arrow"
            :class="{ accordion__arrow_down: currentIndex === index }"
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
          <dd v-show="currentIndex === index" :key="`description-${index}`">
            <!-- eslint-disable vue/no-v-html -->
            <p v-html="item.description" />
            <!--eslint-enable-->
          </dd>
        </transition>
        <hr v-show="bottomLine" :key="`bottom-line-${index}`" />
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

    /** If the component have the bottom line separator */
    bottomLine: {
      type: Boolean,
      default: false,
    },

    data: {
      type: Array,
      required: true,
      validator: (valueAccordion) => {
        if (!(valueAccordion && valueAccordion.constructor === Array))
          return false;

        const accordionProperties = ['title', 'description', 'active'].filter(
          (property) =>
            !Object.prototype.hasOwnProperty.call(valueAccordion[0], property),
        );

        return accordionProperties.length === 0;
      },
    },
  },

  data() {
    return {
      currentIndex: 0,
    };
  },

  methods: {
    openItem(current) {
      if (current === this.currentIndex) {
        this.currentIndex = -10;
      } else {
        this.currentIndex = current;
      }
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
