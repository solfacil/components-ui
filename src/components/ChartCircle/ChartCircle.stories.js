import ChartCircle from './ChartCircle.vue';

export default {
  title: 'Components/UI Elements/Chart Circle',
  component: ChartCircle,
  argTypes: {},

  parameters: {
    componentSubtitle:
      'Checkboxes are used for a list of options where the user may select multiple options, including all or none.',
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { ChartCircle },
  template: '<ChartCircle v-bind="$props" />',
});

export const Total = Template.bind({});
Total.args = {
  id: 'total',
  rangeTotal: 25,
  range: 25,
  color: '#999',
};

export const Online = Template.bind({});
Online.args = {
  id: 'online',
  rangeTotal: 25,
  range: 15,
  color: '#4CD89D',
};

export const Offline = Template.bind({});
Offline.args = {
  id: 'offline',
  rangeTotal: 25,
  range: 8,
  color: '#FF7771',
};

export const Sem_producao = Template.bind({});
Sem_producao.args = {
  id: 'semProducao',
  rangeTotal: 25,
  range: 2,
  color: '#FFB600',
};
