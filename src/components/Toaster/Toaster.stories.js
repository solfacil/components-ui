import Toaster from './Toaster.vue';

export default {
  title: 'Components/UI Elements/Toaster',
  component: Toaster,
  argTypes: {
    demo: {
      control: {
        type: 'select',
        options: ['1', '2', '3', '4'],
      },
      defaultValue: '1',
    },
  },

  parameters: {
    componentSubtitle: '',
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Toaster },
  template: '<Toaster v-bind="$props"></Toaster>',
});

export const Default = Template.bind({});
Default.args = {
  id: 'ss',
};
