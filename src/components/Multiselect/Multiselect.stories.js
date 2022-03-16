import Multiselect from './Multiselect.vue';

export default {
  title: 'Components/UI Elements/Forms/Multiselect',
  component: Multiselect,
  parameters: {
    componentSubtitle: '',
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Multiselect },
  data() {
    return {
      subjectTypes: new Array(10).fill('').map((item, index) => {
        return {
          value: `${index}`,
          name: `Opção ${index}`,
        };
      }),

      inputModel: [],
    };
  },
  template:
    '<div style="width:500px; min-height: 200px"><Multiselect v-bind="$props" :options="subjectTypes" :value="inputModel" /></div>',
});

export const Default = Template.bind({});
Default.args = {
  id: 'multi-select',
};
