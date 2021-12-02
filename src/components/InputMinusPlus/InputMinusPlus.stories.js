import InputMinusPlus from './InputMinusPlus.vue';

export default {
  title: 'Components/UI Elements/forms/Input Minus Plus',
  component: InputMinusPlus,
  argTypes: {},

  parameters: {
    componentSubtitle: '',
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { InputMinusPlus },
  data: () => {
    return {
      num: 0,
    };
  },
  template: '<InputMinusPlus v-model="num" v-bind="$props"/>',
});

export const Default = Template.bind({});
Default.args = {
  max: 5,
  min: 0,
  id: 'number',
  small: true,
};
