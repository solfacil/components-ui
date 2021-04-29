import ChartBar from './ChartBar.vue';

export default {
  title: 'Components/UI Elements/Charts/Bar',
  component: ChartBar,
  argTypes: {},

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
