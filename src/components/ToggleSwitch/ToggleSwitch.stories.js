import ToggleSwitch from './ToggleSwitch.vue';

export default {
  title: 'Components/UI Elements/Forms/ToggleSwitch',
  component: ToggleSwitch,
  argTypes: {},

  parameters: {
    componentSubtitle:
      'A toggle is used to quickly switch between two possible states. They are commonly used for “on/off” switches',
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { ToggleSwitch },
  template: '<ToggleSwitch v-bind="$props" v-model="check" />',
  data() {
    return {
      check: null,
    };
  },
});

export const Basic = Template.bind({});
Basic.args = {
  label: 'label',
  id: 'switch-1',
};
