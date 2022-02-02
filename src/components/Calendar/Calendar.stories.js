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

const Template = (args) => ({
  components: { Calendar },
  setup() {
    const data = [new Date(2021, 8, 2), new Date(2021, 8, 30)];
    function confirmMethod() {
      action('OK');
      console.log('ok');
    }

    function clearMethod() {
      action('CANCELAR');
      console.log('cancel');
    }

    return {
      data,
      action,
      confirmMethod,
      clearMethod,
      args,
    };
  },
  template: `
  <div style="height: 300px">
    <Calendar v-bind="args" v-model="data" @confirm="() => action('OK', 'ha')" @clear="clearMethod" />
  </div>
    `,
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
