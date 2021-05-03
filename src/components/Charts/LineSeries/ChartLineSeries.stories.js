import ChartLineSeries from './ChartLineSeries';

export default {
  title: 'Components/UI Elements/Charts/Line Series',
  component: ChartLineSeries,
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
  components: { ChartLineSeries },
  template: '<ChartLineSeries v-bind="$props" />',
});

export const Default = Template.bind({});
Default.args = {
  id: 'lineSeries',
};
