import { createApp } from 'vue';
import App from './App.vue';

import {
  currency,
  breakpointable,
  capitalizeFirstLetter,
  date,
} from '@mixins/index.js';

import '@scss/core/index.scss';
const app = createApp(App);

app
  .mixin(currency)
  .mixin(breakpointable)
  .mixin(capitalizeFirstLetter)
  .mixin(date);

app.mount('#app');
