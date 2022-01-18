<template>
  <transition name="fade-shrink-in" appear>
    <div
      v-show="isDisplay"
      ref="modal"
      tabindex="-1"
      class="sol-modal"
      @click.self="closeSelf"
    >
      <div class="wrapper" :class="{ 'size-lg': sizeLg }" @click.stop>
        <header>
          {{ title }}

          <IconClose v-if="!disableClose" class="icon-close" @click="close" />
        </header>

        <main>
          <div class="overflow" :class="{ 'no-croll': noScroll }">
            <slot></slot>
          </div>
        </main>

        <footer>
          <slot name="footer"></slot>

          <Button
            v-show="buttonClose"
            id="btn-close-modal"
            :variant="buttonClose"
            @click.prevent="close"
            >Fechar</Button
          >
        </footer>
      </div>
    </div>
  </transition>
</template>

<script>
import Button from '@components/Button/Button';
import IconClose from '@img/icon/icon-close.svg';

export default {
  name: 'Modal',

  components: {
    Button,
    IconClose,
  },

  props: {
    /** Specify a custom id */
    id: {
      type: String,
      required: true,
    },

    /** Modal show/hide */
    value: {
      type: Boolean,
      default: false,
      required: true,
    },

    /** Modal title that is used in header */
    title: {
      type: String,
      default: '',
      required: true,
    },

    /** Specify the kind of Butoon/Close you want to create: <br/> primary | secondary" | "exception" */
    buttonClose: {
      default: null,
      type: String,
      validator: (value) =>
        ['primary', 'secondary', 'exception'].includes(value.toLowerCase()),
    },

    /** Close modal click overlay  */
    selfClose: {
      type: Boolean,
      default: true,
    },

    /** Set max width LG / 600px  */
    sizeLg: {
      default: false,
      type: Boolean,
    },

    /** Disable scroll content  */
    noScroll: {
      default: false,
      type: Boolean,
    },

    /** Set callback function if selfClose is false */
    customCloseAction: {
      default: () => {},
      type: Function,
    },

    /** Disable close button */
    disableClose: {
      default: false,
      type: Boolean,
    },
  },

  computed: {
    isDisplay() {
      return this.value;
    },
  },

  destroyed() {
    document.body.classList.remove('overflow-hidden');
  },

  mounted() {
    if (this.isDisplay) {
      document.body.classList.add('overflow-hidden');
    }
  },

  methods: {
    close() {
      document.body.classList.remove('overflow-hidden');
      this.$emit('input', false);
      this.$emit('closeModal');
    },

    closeSelf() {
      if (!this.selfClose) return this.customCloseAction();

      this.close();
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@scss/_modal';
</style>
