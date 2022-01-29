import { ref } from 'vue';
import InputMinusPlus from './InputMinusPlus.vue';

export default {
  title: 'Components/UI Elements/forms/Input Minus Plus',
  component: InputMinusPlus,
  argTypes: {},

  parameters: {
    componentSubtitle: '',
  },
};

const Template = (args) => ({
  components: { InputMinusPlus },
  setup() {
    const num = ref(0);
    return { args, num };
  },
  template: '<InputMinusPlus v-model="num" v-bind="num"/>',
});

export const Default = Template.bind({});
Default.args = {
  max: 5,
  min: 0,
  id: 'number',
  small: true,
};
