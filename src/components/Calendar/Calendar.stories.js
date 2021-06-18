import Calendar from './Calendar.vue';

export default {
  title: 'Components/UI Elements/Calendar',
  component: Calendar,
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
  components: { Calendar },
  template: '<Calendar v-bind="$props"></Calendar>',
});

export const Default = Template.bind({});
Default.args = {
  id: 'calendar',
};
