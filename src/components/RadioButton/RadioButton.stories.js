import RadioButton from './RadioButton.vue';

export default {
  title: 'Components/UI Elements/RadioButton',
  component: RadioButton,
  argTypes: {},

  parameters: {
    componentSubtitle:
      'RadioButton are used for a list of options where the user may select multiple options, including all or none.',
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { RadioButton },
  template: '<RadioButton v-bind="$props" v-model="check" />',
  data() {
    return {
      check: null,
    };
  },
});

export const Basic = Template.bind({});
Basic.args = {
  label: 'label',
};
