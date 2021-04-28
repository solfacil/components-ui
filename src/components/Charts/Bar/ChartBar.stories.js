import ChartBar from './ChartBar.vue';

export default {
  title: 'Components/UI Elements/Charts/Bar',
  component: ChartBar,
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
  components: { ChartBar },
  template: '<ChartBar v-bind="$props" />',
});

export const Default = Template.bind({});
Default.args = {
  id: 'chartbar',
};
