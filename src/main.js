import { createApp } from 'vue';
import App from './App.vue';

import { Mixins } from './index';

import '@scss/core/index.scss';
const app = createApp(App);

app
  // .mixin(Mixins.currency)
  .mixin(Mixins.breakpointable)
  .mixin(Mixins.capitalizeFirstLetter)
  .mixin(Mixins.date);

app.mount('#app');
