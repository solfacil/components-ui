import '../src/assets/scss/core/index.scss';
import '../src/stories/assets/scss/global.scss';

import { addDecorator, addParameters } from '@storybook/vue3';

addDecorator(() => ({
  template: '<div class="content-component"><story/></div>',
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
