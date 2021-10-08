import Textarea from './Textarea.vue';

export default {
  title: 'Components/UI Elements/Forms/Textarea',
  component: Textarea,
  argTypes: {},

  parameters: {
    componentSubtitle: '',
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Textarea },
  data() {
    return {
      inputModel: null,
    };
  },
  template: '<Textarea v-bind="$props" v-model="inputModel"></Textarea>',
});

export const Default = Template.bind({});
Default.args = {
  id: 'textarea',
  label: 'Textarea',
};
