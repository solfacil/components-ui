import { createApp } from 'vue';
import App from './App.vue';

import mixins from '@mixins/index.js';

import '@scss/core/index.scss';

const app = createApp(App);
app.mixin(mixins);

app.mount('#app');
