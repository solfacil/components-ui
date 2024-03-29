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
  data() {
    return {
      data: [new Date(2021, 8, 2), new Date(2021, 8, 30)],
    };
  },
  template:
    '<Calendar v-bind="$props" v-model="data" @confirm="confirmMethod" @clear="clearMethod" />',
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

export const Disabled = Template.bind({});
Disabled.args = {
  id: 'disabled',
  inline: true,
  disabledBefore: new Date('2021-07-20T00:00:00'),
};

export const RangeDisabled = Template.bind({});
RangeDisabled.args = {
  id: 'range',
  inline: true,
  range: true,
  rangeLimit: 45,
  disabledBefore: new Date('2021-07-20T00:00:00'),
};
