import { ref } from 'vue';
import Checkbox from './Checkbox.vue';

export default {
  title: 'Components/UI Elements/Forms/Checkboxs',
  component: Checkbox,
  argTypes: {},

  parameters: {
    componentSubtitle:
      'Checkboxes are used for a list of options where the user may select multiple options, including all or none.',
  },
};

const Template = (args) => ({
  components: { Checkbox },
  setup() {
    const check = ref(null);
    return { args, check };
  },
  template: '<Checkbox v-bind="args" v-model="check" />',
});

export const Basic = Template.bind({});
Basic.args = {
  label: 'This checkbox has a label',
  text: 'this is some text',
  errorMsg: 'This value must be true',
  id: 'check-1',
};
