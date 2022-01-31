import { ref, watchEffect } from 'vue';
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

const Template = ({ value, ...args }) => ({
  components: { Checkbox },
  setup() {
    const check = ref(false);

    watchEffect(() => {
      check.value = value;
    });

    return { args, check };
  },
  template:
    '<Checkbox v-bind="args" :value="check"  @update:value="check = $event" />',
});

export const Basic = Template.bind({});
Basic.args = {
  label: 'This checkbox has a label',
  text: 'this is some text',
  errorMsg: 'This value must be true',
  id: 'check-1',
};
