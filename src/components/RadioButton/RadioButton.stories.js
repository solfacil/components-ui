import { ref } from 'vue';
import RadioButton from './RadioButton.vue';

export default {
  title: 'Components/UI Elements/forms/RadioButton',
  component: RadioButton,
  argTypes: {},

  parameters: {
    componentSubtitle:
      'RadioButton are used for a list of options where the user may select multiple options, including all or none.',
  },
};

const Template = (args) => ({
  components: { RadioButton },
  setup() {
    const check = ref(null);
    return { args, check };
  },
  template: '<RadioButton v-bind="args" v-model="check" />',
});

export const Basic = Template.bind({});
Basic.args = {
  label: 'label',
  id: 'radio-1',
};
