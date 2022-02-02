import Vue, { createApp } from 'vue';
import App from './App.vue';

import mixins from '@mixins/index.js';

import '@scss/core/index.scss';

Vue.configureCompat({
  COMPONENT_V_MODEL: false,
  CUSTOM_DIR: true,
  RENDER_FUNCTION: false,
  WATCH_ARRAY: false,
});

const app = createApp(App);
app.mixin(mixins);

app.mount('#app');
