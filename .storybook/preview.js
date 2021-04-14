import '../src/assets/scss/core/index.scss';
import '../src/stories/assets/scss/global.scss';

import { addDecorator, addParameters } from '@storybook/vue';

addDecorator(() => ({
  template: '<div class="p-8 bg-white rounded"><story/></div>',
}));

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },

  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },

  layout: 'centered',

  options: {
    storySort: {
      order: [
        'Getting started',
        ['Intro', 'Installation'],
        // 'Documentation',
        // 'Templates',
        // 'Components',
      ],
    },
  },
};
