import Vue from 'vue';

export default Vue.directive('clickOutside', {
  bind: function (el, binding, vnode) {
    window.event = function (event) {
      if (!(el == event.target || el.contains(event.target))) {
        vnode.context[binding.expression](event);
      }
    };
    document.body.addEventListener('click', window.event);
  },
  unbind: function () {
    document.body.removeEventListener('click', window.event);
  },
});
