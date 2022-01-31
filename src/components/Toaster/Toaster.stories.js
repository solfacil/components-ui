import Toaster from './Toaster';
import Button from '../Button/Button.vue';

export default {
  title: 'Components/UI Elements/Toaster',
  component: Toaster,
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
  components: { Toaster, Button },
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    triggerToaster() {
      this.count++;

      this.$toaster.success(`Your toaster success message.  ${this.count}`, {
        id: `toaster-${this.count}`,
        autoHideDelay: args.autoHideDelay,
        noAutoHide: args.noAutoHide,
        position: args.position,
        iconNumber: args.iconNumber,
      });
    },
  },
  template: `
    <Button id="button" @click="triggerToaster" class="btn">Trigger Toaster</Button>
      <Toaster />
    `,
});

export const Default = Template.bind({});

Default.parameters = {
  docs: {
    source: {
      code: `
Usage
// In The App.vue you need render the \`<Toaster />\`

<script>
  import { Toaster } from '@solfacil/components-ui';
  //...
</script>

<template>
  //...
  <Toaster />
</template>

// in your component this.$toaster
// ...
this.$toaster.success('Your toaster success message.', { id: '<id>' })

// or custom old params
this.$toaster.success('Your toaster success message.',
  {
    id: '<id>',
    autoHideDelay: 5000,
    noAutoHide: true,
    position: '<position>',
    iconNumber: '<iconNumber>'
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
  iconNumber: 0,
};
