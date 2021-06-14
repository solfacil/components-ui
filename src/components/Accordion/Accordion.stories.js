import Accordion from './Accordion.vue';

export default {
  title: 'Components/UI Elements/Accordion',
  component: Accordion,
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
  components: { Accordion },
  template: '<Accordion v-bind="$props"></Accordion>',
});

export const Default = Template.bind({});
Default.args = {};
