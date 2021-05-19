import Toaster from './index';
import ToasterTemplate from './ToasterTemplate';
import Button from '../Button/Button.vue';
import Vue from 'vue';

Vue.use(Toaster);

export default {
  title: 'Components/UI Elements/Toaster',
  component: ToasterTemplate,
  argTypes: {
    position: {
      control: {
        type: 'select',
        options: [
          'top',
          'topright',
          'topleft',
          'bottom',
          'bottomleft',
          'bottomright',
        ],
      },
      defaultValue: 'topright',
    },
  },
  parameters: {
    componentSubtitle: '',
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { ToasterTemplate, Button },
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    teste() {
      this.count++;

      this.$toaster.success('Your toaster success message.' + this.count, {
        id: 'teste-' + this.count,
        autoHideDelay: this.autoHideDelay,
        noAutoHide: this.noAutoHide,
        position: this.position,
      });
    },
  },
  template:
    '<Button id="button" @click="teste" class="btn">Trigger Toaster</Button>',
});

export const Default = Template.bind({});

Default.parameters = {
  docs: {
    source: {
      code: `
Usage

import Vue from 'vue'
import { Toaster } from '@solfacil/components-ui';
Vue.use(Toaster, {timeout: 5000})

// in your component this.$toaster
// ...
this.$toaster.success('Your toaster success message.', { id: '<id>' })

// or custom old params
this.$toaster.success('Your toaster success message.',
  {
    id: '<id>',
    autoHideDelay: 5000,
    noAutoHide: true,
    position: '<position>'
  }
)

this.$toaster.info('Your toaster info message.')
this.$toaster.error('Your toaster error message.')
this.$toaster.warning('Your toaster warning message.')
      `,
    },
  },
};

Default.args = {
  id: 'toaster',
  position: 'topright',
};
