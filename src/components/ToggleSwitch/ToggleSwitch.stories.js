import { ref } from 'vue';
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

const Template = (args) => ({
  components: { ToggleSwitch },
  setup() {
    const check = ref(null);
    return { args, check };
  },
  template: '<ToggleSwitch v-bind="args" v-model="check" />',
});

export const Basic = Template.bind({});
Basic.args = {
  label: 'label',
  id: 'switch-1',
};
