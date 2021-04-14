import { action } from '@storybook/addon-actions';
import Button from './Button.vue';

export default {
  title: 'Components/UI Elements/Buttons',
  component: Button,
  argTypes: {
    size: {
      control: {
        type: 'select',
        options: ['small', 'medium', 'large'],
      },
      defaultValue: 'medium',
    },

    variant: {
      control: {
        type: 'select',
        options: ['default', 'secondary', 'exception'],
      },
      defaultValue: 'default',
    },

    tag: {
      control: {
        type: 'select',
        options: ['a', 'button'],
      },
      defaultValue: 'button',
    },
  },

  parameters: {
    componentSubtitle:
      'Use Button to allow users to take actions with clicks and taps.',
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Button },
  template: '<Button v-bind="$props" @click="someMethod">{{label}}</Button>',
  methods: {
    someMethod: action('clicked'),
  },
});

export const Default = Template.bind({});
Default.args = {
  label: 'Default',
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: 'secondary',
  label: 'Secondary',
};

export const Exception = Template.bind({});
Exception.args = {
  variant: 'exception',
  label: 'Exception',
};
