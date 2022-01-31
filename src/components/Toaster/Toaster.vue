<template>
  <div :id="idLocal" class="sol-toaster" :class="[itemPosition]">
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
import { defineComponent, ref, getCurrentInstance } from 'vue';

export default defineComponent({
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

  setup(props) {
    const instance = getCurrentInstance();

    const items = ref([]);
    const itemPosition = ref(null);
    const idLocal = ref(props.id || 'toaster');

    function success(message, option = {}) {
      add(message, {
        theme: 'success',
        autoHideDelay: option.autoHideDelay || props.autoHideDelay,
        noAutoHide: option.noAutoHide || props.noAutoHide,
        id: option.id || props.id,
        position: option.position || props.position,
        iconNumber: option.iconNumber || props.iconNumber,
      });
    }

    function info(message, option = {}) {
      add(message, {
        theme: 'info',
        autoHideDelay: option.autoHideDelay,
        noAutoHide: option.noAutoHide,
        id: option.id || props.id,
        position: option.position || props.position,
        iconNumber: option.iconNumber,
      });
    }

    function warning(message, option = {}) {
      add(message, {
        theme: 'warning',
        autoHideDelay: option.autoHideDelay,
        noAutoHide: option.noAutoHide,
        id: option.id || props.id,
        position: option.position || props.position,
        iconNumber: option.iconNumber,
      });
    }

    function error(message, option = {}) {
      add(message, {
        theme: 'error',
        autoHideDelay: option.autoHideDelay,
        noAutoHide: option.noAutoHide,
        id: option.id || props.id,
        position: option.position || props.position,
        iconNumber: option.iconNumber,
      });
    }

    function add(
      message,
      { theme, autoHideDelay, noAutoHide = false, id, position, iconNumber },
    ) {
      idLocal.value = id;
      itemPosition.value = position;

      if (!instance.parent) {
        document.body.appendChild(instance.$el);
      }

      let item = { message, theme, id, position, iconNumber };
      items.value.push(item);

      if (!noAutoHide) {
        setTimeout(() => remove(item), autoHideDelay || props.autoHideDelay);
      }
    }

    function remove(item) {
      let i = items.value.indexOf(item);
      if (i >= 0) {
        items.value.splice(i, 1);
      }
    }

    instance.appContext.config.globalProperties.$toaster = {
      remove,
      add,
      error,
      warning,
      success,
      info,
    };

    return {
      idLocal,
      items,
      itemPosition,
      remove,
      add,
      error,
      warning,
      success,
      info,
    };
  },
});
</script>

<style lang="scss" scoped>
@import '@scss/_toaster';
</style>
