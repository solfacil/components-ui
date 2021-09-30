<template>
  <div :id="id" class="accordion">
    <dl>
      <template v-for="(item, index) in headers">
        <dt
          :key="`title-${index}`"
          :class="{ small }"
          @click="handleItem(index)"
        >
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

    /** Specify which if any components initialize open. Elements indexes begins at 0. Can be a number or an array. */
    startOpen: {
      type: [Number, Array],
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

    /** Specify if multiple elements can be opened simultaneously */
    openMulti: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {
      openItems: [],
    };
  },

  mounted() {
    this.handleStartOpen();
  },

  methods: {
    handleItem(index) {
      const includesItem = this.openItems.includes(index);

      const handleSingle = [
        () => (this.openItems = [index]),
        () => (this.openItems = []),
      ][Number(includesItem)];

      const handleMulti = [
        () => (this.openItems = [...this.openItems, index]),
        () =>
          (this.openItems = this.openItems.filter((item) => item !== index)),
      ][Number(includesItem)];

      const handleType = [handleSingle, handleMulti][Number(this.openMulti)];

      handleType();
    },

    showContent(index) {
      return this.openItems.includes(index);
    },

    handleStartOpen() {
      const handleNumber = () => {
        if (this.startOpen >= 0 && this.startOpen < this.headers.length)
          this.openItems = [...this.openItems, this.startOpen];
      };
      const handleArray = () => {
        if (this.startOpen.length > 0 && this.openMulti)
          this.openItems = this.startOpen.reduce((arr, cur) => {
            const agoravai = this.headers.findIndex((e, i) => {
              return i === cur;
            });
            arr = [...arr, agoravai];
            return arr;
          }, []);
      };

      const handleType = [handleNumber, handleArray][
        Number(typeof this.startOpen !== 'number')
      ];

      handleType();
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@scss/_accordion';
</style>
