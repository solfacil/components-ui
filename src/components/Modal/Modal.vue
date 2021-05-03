<template>
  <transition name="fade-shrink-in" appear>
    <div
      v-show="isDisplay"
      ref="modal"
      tabindex="-1"
      class="sol-modal"
      @click.self="closeSelf"
    >
      <div class="wrapper" @click.stop>
        <header>
          {{ title }}

          <span class="icon-close" @click="close"></span>
        </header>

        <main>
          <slot></slot>
        </main>

        <footer>
          <slot name="footer"></slot>

          <Button
            v-show="buttonClose"
            id="btn-close-modal"
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

export default {
  name: 'Modal',

  components: {
    Button,
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

    /** Specify whether the Button should be disabled */
    buttonClose: {
      type: Boolean,
      default: true,
    },

    /** Close modal click overlay  */
    selfClose: {
      type: Boolean,
      default: true,
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
      if (!this.selfClose) return;

      this.close();
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@scss/_modal';
</style>
