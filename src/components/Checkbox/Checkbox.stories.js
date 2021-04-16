import Checkbox from './Checkbox.vue';

export default {
  title: 'Components/UI Elements/Checkboxs',
  component: Checkbox,
  argTypes: {},

  parameters: {
    componentSubtitle:
      'Checkboxes are used for a list of options where the user may select multiple options, including all or none.',
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Checkbox },
  template: '<Checkbox v-bind="$props" v-model="check" />',
  data() {
    return {
      check: null,
    };
  },
});

export const Basic = Template.bind({});
Basic.args = {
  label: 'This checkbox has a label',
  text: 'this is some text',
  errorMsg: 'This value must be true',
  id: 'check-1',
};
