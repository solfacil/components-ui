import Calendar from './Calendar.vue';

export default {
  title: 'Components/UI Elements/Calendar',
  component: Calendar,
  argTypes: {
    type: {
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
  template: '<Calendar v-bind="$props"></Calendar>',
});

export const Default = Template.bind({});
Default.args = {
  id: 'calendar',
  inline: true,
};
