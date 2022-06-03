<template>
  <div :id="id" class="accordion">
    <dl>
      <template v-for="(item, index) in headers">
        <dt
          :key="`title-${index}`"
          :class="[dynamicSmallClass, variant, darkThemeOn()]"
          @click="handleItem(index)"
        >
          {{ item }}

          <span
            class="arrow"
            :class="[dynamicArrowClass(index), variant, darkThemeOn()]"
            :index="index"
          >
            <ArrowDown v-if="variant === 'content' && !darkTheme" />
            <ArrowDownWhite v-else-if="darkTheme" />
            <HalfArrowDown v-else />
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
            :class="[dynamicSmallClass, variant, darkThemeOn()]"
          >
            <slot :name="`description-${index}`"></slot>
          </dd>
        </transition>
      </template>
    </dl>
    <hr />
  </div>
</template>

<script>
import HalfArrowDown from '@img/icon/half-arrow-down.svg';
import ArrowDown from '@img/icon/arrow-down.svg';
import ArrowDownWhite from '@img/icon/arrow-down-white.svg';

export default {
  name: 'Accordion',

  components: {
    HalfArrowDown,
    ArrowDown,
    ArrowDownWhite,
  },

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

    /** Specify if the accordion will use the dark theme of components */
    darkTheme: {
      type: Boolean,
      default: false,
    },

    /** Specify which variant should be used */
    variant: {
      type: String,
      default: 'content',
      validator: (value) => {
        return ['content', 'navigator'].includes(value.toLowerCase());
      },
    },
  },

  data() {
    return {
      openItems: [],
    };
  },

  computed: {
    dynamicSmallClass() {
      return ['', 'small'][Number(this.small)];
    },
  },

  watch: {
    startOpen() {
      this.handleStartOpen();
    },
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
            const headerIndex = this.headers.findIndex((e, i) => {
              return i === cur;
            });
            arr = [...arr, headerIndex];
            return arr;
          }, []);
      };

      const handleType = [handleNumber, handleArray][
        Number(typeof this.startOpen !== 'number')
      ];

      handleType();
    },

    dynamicArrowClass(el) {
      return ['', 'arrow-down'][Number(this.showContent(el))];
    },

    darkThemeOn() {
      return ['', 'dark-theme'][Number(this.darkTheme)];
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@scss/_accordion';
</style>
