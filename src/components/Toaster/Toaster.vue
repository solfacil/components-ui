<template>
  <div :id="id" class="v-toaster">
    <transition-group name="v-toast">
      <div
        v-for="t in items"
        :key="t.key"
        class="v-toast"
        :class="{ [t.theme]: t.theme }"
      >
        <a class="v-toast-btn-clear" @click="remove(t)"></a>{{ t.message }}
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
      required: true,
    },

    timeout: {
      type: Number,
      default: 10000,
    },
  },
  data() {
    return {
      items: [],
    };
  },

  methods: {
    success(message, option = {}) {
      this.add(message, { theme: 'v-toast-success', timeout: option.timeout });
    },

    info(message, option = {}) {
      this.add(message, { theme: 'v-toast-info', timeout: option.timeout });
    },

    warning(message, option = {}) {
      this.add(message, { theme: 'v-toast-warning', timeout: option.timeout });
    },

    error(message, option = {}) {
      this.add(message, { theme: 'v-toast-error', timeout: option.timeout });
    },

    add(message, { theme, timeout }) {
      if (!this.$parent) {
        this.$mount();
        document.body.appendChild(this.$el);
      }
      let item = { message, theme, key: `${Date.now()}-${Math.random()}` };
      this.items.push(item);
      setTimeout(() => this.remove(item), timeout || this.timeout);
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

.v-toaster {
  position: fixed;
  top: 50px;
  right: 0;
  z-index: 10000;
  width: 300px;
  padding-left: 10px;
  padding-right: 10px;
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
.v-toaster .v-toast.v-toast-enter,
.v-toaster .v-toast.v-toast-leave-to {
  -webkit-transform: translate(100%);
  transform: translate(100%);
}
</style>
