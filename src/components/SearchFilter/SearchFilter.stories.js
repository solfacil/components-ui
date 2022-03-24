import SearchFilter from './SearchFilter.vue';

export default {
  title: 'Components/UI Elements/SearchFilter',
  component: SearchFilter,
  argTypes: {},

  parameters: {
    componentSubtitle: '',
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { SearchFilter },
  data() {
    return {
      subjectTypes: [
        {
          value: 'NAME',
          name: 'Nome',
        },
        {
          value: 'CITY',
          name: 'Cidade',
        },
      ],
      inputModel: {},
    };
  },
  template:
    '<div style="width:100%; min-height: 200px"><SearchFilter id="field" v-bind="$props" :fields="subjectTypes" v-model="inputModel" /></div>',
});

export const Default = Template.bind({});
Default.args = {
  id: 'input-search',
  fields: [
    {
      value: 'NAME',
      name: 'Nome',
    },
  ],
};
