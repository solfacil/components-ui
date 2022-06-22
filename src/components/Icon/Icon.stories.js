import Icon from './Icon.vue';

export default {
  title: 'Components/UI Elements/Icon',
  component: Icon,
  argTypes: {
    type: {
      control: {
        type: 'select',
        options: ['remove', 'error', 'filter', 'info'],
      },
      defaultValue: 'remove',
    },
  },

  parameters: {
    componentSubtitle: 'Dynamic icon',
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Icon },
  template: '<Icon v-bind="$props" @click="handleClick"/>',
});

Template.bind({});

export const Remove = Template.bind({});
Remove.args = {
  id: 'icon-1',
  type: 'remove',
};

export const Error = Template.bind({});
Error.args = {
  id: 'icon-1',
  type: 'error',
};

export const Filter = Template.bind({});
Filter.args = {
  id: 'icon-1',
  type: 'filter',
};

export const Info = Template.bind({});
Info.args = {
  id: 'icon-1',
  type: 'info',
};
