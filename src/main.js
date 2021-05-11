import Vue from 'vue';
import App from './App.vue';

import '@scss/core/index.scss';

import { Toaster } from '../src/components/Toaster/index';
Vue.use(Toaster);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount('#app');
