import SelectInput from './SelectInput.vue';

export default {
  title: 'Components/UI Elements/Forms/SelectInput',
  component: SelectInput,
  argTypes: {},

  parameters: {
    componentSubtitle: '',
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { SelectInput },
  data() {
    return {
      subjectTypes: [
        {
          value: '1',
          name: 'Sou um cliente e quero tirar dúvidas',
        },
        {
          value: '2',
          name: 'Sou um integrador e quero tirar dúvidas',
        },
      ],
      inputModel: '2',
    };
  },
  template:
    '<div style="width:300px; min-height: 200px"><SelectInput v-bind="$props" :options="subjectTypes" v-model="inputModel" /></div>',
});

export const Default = Template.bind({});
Default.args = {
  id: 'select',
  searchable: true,
  placeholder: 'Selecione',
};
