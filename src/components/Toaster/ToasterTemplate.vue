<template>
  <div :id="id" class="sol-toaster" :class="[itemPosition]">
    <transition-group name="sol-toast">
      <div
        v-for="item in items"
        :key="item.id"
        class="sol-toast-item"
        :class="[item.theme, item.position]"
      >
        <div>
          <i v-if="item.iconNumber">{{ item.iconNumber }}</i>
          <img
            v-else
            :src="require(`@img/icon/icon-${item.theme}.svg?url`)"
            class="inline"
            :alt="item.message"
          />
          <span class="msg">{{ item.message }}</span>
          <span class="close" @click="remove(item)">fechar</span>
        </div>
      </div>
    </transition-group>
  </div>
</template>

<script>
export default {
  name: 'Toaster',

  props: {
    /** Specify a custom id */
    id: {
      type: String,
      default: '',
      required: true,
    },

    /** Timeout close Toaster */
    autoHideDelay: {
      type: Number,
      default: 5000,
    },

    /** Optionally icon number */
    iconNumber: {
      default: null,
      type: Number,
    },

    /** Disabled auto hide */
    noAutoHide: {
      type: Boolean,
      default: false,
    },

    /** Position Toaster */
    position: {
      default: 'topright',
      type: String,
      validator: (value) =>
        [
          'top',
          'topright',
          'topleft',
          'bottom',
          'bottomleft',
          'bottomright',
        ].includes(value.toLowerCase()),
    },
  },

  data() {
    return {
      items: [],
      itemPosition: null,
    };
  },

  methods: {
    success(message, option = {}) {
      this.add(message, {
        theme: 'success',
        autoHideDelay: option.autoHideDelay,
        noAutoHide: option.noAutoHide,
        id: option.id,
        position: option.position || this.position,
        iconNumber: option.iconNumber,
      });
    },

    info(message, option = {}) {
      this.add(message, {
        theme: 'info',
        autoHideDelay: option.autoHideDelay,
        noAutoHide: option.noAutoHide,
        id: option.id,
        position: option.position || this.position,
        iconNumber: option.iconNumber,
      });
    },

    warning(message, option = {}) {
      this.add(message, {
        theme: 'warning',
        autoHideDelay: option.autoHideDelay,
        noAutoHide: option.noAutoHide,
        id: option.id,
        position: option.position || this.position,
        iconNumber: option.iconNumber,
      });
    },

    error(message, option = {}) {
      this.add(message, {
        theme: 'error',
        autoHideDelay: option.autoHideDelay,
        noAutoHide: option.noAutoHide,
        id: option.id,
        position: option.position || this.position,
        iconNumber: option.iconNumber,
      });
    },

    add(
      message,
      { theme, autoHideDelay, noAutoHide = false, id, position, iconNumber },
    ) {
      this.itemPosition = position;

      if (!this.$parent) {
        this.$mount();
        document.body.appendChild(this.$el);
      }

      let item = { message, theme, id, position, iconNumber };
      this.items.push(item);

      if (!noAutoHide) {
        setTimeout(
          () => this.remove(item),
          autoHideDelay || this.autoHideDelay,
        );
      }
    },

    remove(item) {
      let i = this.items.indexOf(item);
      if (i >= 0) {
        this.items.splice(i, 1);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@scss/_toaster';
</style>
