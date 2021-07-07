import { action } from '@storybook/addon-actions';
import Calendar from './Calendar.vue';

export default {
  title: 'Components/UI Elements/Calendar',
  component: Calendar,
  argTypes: {
    view: {
      control: {
        type: 'select',
        options: ['date', 'month', 'year'],
      },
      defaultValue: 'date',
    },
  },

  parameters: {
    componentSubtitle: '',
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Calendar },
  template:
    '<Calendar v-bind="$props" @confirm="confirmMethod" @clear="clearMethod" />',
  methods: {
    confirmMethod: action('OK'),
    clearMethod: action('CANCELAR'),
  },
});

export const Default = Template.bind({});
Default.args = {
  id: 'calendar',
  placeholder: 'Selecione',
};

export const Inline = Template.bind({});
Inline.args = {
  id: 'inline',
  inline: true,
};

export const Range = Template.bind({});
Range.args = {
  id: 'range',
  inline: true,
  range: true,
  rangeLimit: 45,
};

export const Month = Template.bind({});
Month.args = {
  id: 'range',
  inline: true,
  view: 'month',
};

export const Year = Template.bind({});
Year.args = {
  id: 'year',
  inline: true,
  view: 'year',
};
