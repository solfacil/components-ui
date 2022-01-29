import { ref } from 'vue';
import Textarea from './Textarea.vue';

export default {
  title: 'Components/UI Elements/Forms/Textarea',
  component: Textarea,
  argTypes: {},

  parameters: {
    componentSubtitle: '',
  },
};

const Template = (args) => ({
  components: { Textarea },
  setup() {
    const inputModel = ref(null);
    return { args, inputModel };
  },
  template: '<Textarea v-bind="args" v-model="inputModel"></Textarea>',
});

export const Default = Template.bind({});
Default.args = {
  id: 'textarea',
  label: 'Textarea',
};
