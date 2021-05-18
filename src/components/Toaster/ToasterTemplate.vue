<template>
  <div :id="id" class="sol-toaster">
    <transition-group name="sol-toast">
      <div
        v-for="item in items"
        :key="item.id"
        class="v-toast"
        :class="{ [item.theme]: item.theme }"
      >
        <div>
          <img
            :src="require(`@img/icon/icon-${item.theme}.svg`)"
            class="inline"
            :alt="item.message"
          />
          {{ item.message }}
          <span @click="remove(t)">fechar</span>
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
      // required: true,
    },

    /** Timeout close Toaster */
    autoHideDelay: {
      type: Number,
      default: 500099,
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
      });
    },

    info(message, option = {}) {
      this.add(message, {
        theme: 'info',
        autoHideDelay: option.autoHideDelay,
        noAutoHide: option.noAutoHide,
        id: option.id,
        position: option.position || this.position,
      });
    },

    warning(message, option = {}) {
      this.add(message, {
        theme: 'warning',
        autoHideDelay: option.autoHideDelay,
        noAutoHide: option.noAutoHide,
        id: option.id,
        position: option.position || this.position,
      });
    },

    error(message, option = {}) {
      this.add(message, {
        theme: 'error',
        autoHideDelay: option.autoHideDelay,
        noAutoHide: option.noAutoHide,
        id: option.id,
        position: option.position || this.position,
      });
    },

    add(message, { theme, autoHideDelay, noAutoHide = false, id, position }) {
      if (!this.$parent) {
        this.$mount();
        document.body.appendChild(this.$el);
      }
      let item = { message, theme, id, position };
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

.sol-toaster {
  @apply fixed z-50 w-full;
  max-width: 336px;

  .v-toast {
    margin-bottom: 10px;
    transition: all 0.3s ease;
    border: 1px solid #454d5d;
    border-radius: 8px;
    color: #fff;
    display: block;
    padding: 1rem;
    background: rgba(69, 77, 93, 0.9);
    border-color: #454d5d;
    &.v-toast-success {
      background: rgba(50, 182, 67, 0.9);
      border-color: #32b643;
    }
    &.v-toast-warning {
      background: rgba(255, 183, 0, 0.9);
      border-color: #ffb700;
    }
    &.v-toast-info {
      background: rgba(91, 192, 222, 0.9);
      border-color: #5bc0de;
    }
    &.v-toast-error {
      background: rgba(232, 86, 0, 0.9);
      border-color: #e85600;
    }
    &.v-toast-primary {
      background: rgba(66, 139, 202, 0.9);
      border-color: #428bca;
    }
    .v-toast-btn-clear {
      background: transparent;
      border: 0;
      color: currentColor;
      opacity: 0.45;
      text-decoration: none;
      float: right;
      cursor: pointer;
      &:hover {
        opacity: 0.85;
      }
      &::before {
        content: '\2715';
      }
    }
  }
}

.sol-toaster .sol-toast.sol-toast-enter,
.sol-toaster .sol-toast.sol-toast-leave-to {
  -webkit-transform: translate(100%);
  transform: translate(100%);
}
</style>
