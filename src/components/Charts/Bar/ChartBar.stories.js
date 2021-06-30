import ChartBar from './ChartBar.vue';

export default {
  title: 'Components/UI Elements/Charts/Combo bar and line',
  component: ChartBar,
  argTypes: {
    view: {
      control: {
        type: 'select',
        options: ['month', 'year'],
      },
      defaultValue: 'month',
    },
  },

  parameters: {
    componentSubtitle: 'The given example combines Column and Line',
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { ChartBar },
  template: '<div style="width: 900px;"><ChartBar v-bind="$props" /></div>',
});

export const Default = Template.bind({});
Default.args = {
  id: 'chartbar',
  view: 'month',
  chartdata: {
    labels: [
      '2021-06-01',
      '2021-06-02',
      '2021-06-03',
      '2021-06-04',
      '2021-06-05',
      '2021-06-06',
      '2021-06-07',
      '2021-06-08',
      '2021-06-09',
      '2021-06-10',
      '2021-06-11',
      '2021-06-12',
      '2021-06-13',
      '2021-06-14',
      '2021-06-15',
      '2021-06-16',
      '2021-06-17',
      '2021-06-18',
      '2021-06-19',
      '2021-06-20',
      '2021-06-21',
      '2021-06-22',
      '2021-06-23',
      '2021-06-24',
      '2021-06-25',
      '2021-06-26',
      '2021-06-27',
      '2021-06-28',
      '2021-06-29',
      '2021-06-30',
    ],
    datasets: [
      [
        46, 40, 37, 40, 50, 30, 40, 46, 30, 50, 0, 51, 40, 46, 50, 0, 40, 40,
        20, 30, 0, 30, 20, 16, 10, 27, 30, 30, 20, 20,
      ],
      [
        50, 50, 50, 50, 50, 50, 50, 50, 42, 50, 50, 48, 45, 50, 50, 50, 50, 50,
        50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50,
      ],
    ],
  },
};
