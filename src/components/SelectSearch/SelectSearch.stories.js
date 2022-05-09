import SelectSearch from './SelectSearch.vue';

export default {
  title: 'Components/UI Elements/SelectSearch',
  component: SelectSearch,
  argTypes: {},

  parameters: {
    componentSubtitle: '',
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { SelectSearch },
  data() {
    return {
      subjectTypes: new Array(7).fill('').map((item, index) => {
        return {
          value: `${index}`,
          name: `Opção ${index}`,
        };
      }),

      inputModel: [],
    };
  },
  template:
    '<SelectSearch v-bind="$props" v-model="inputModel" :options="subjectTypes" />',
});

export const Basic = Template.bind({});
Basic.args = {
  label: 'Buscar',
  id: 'selectsearch-1',
};
