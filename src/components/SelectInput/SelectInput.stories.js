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
          value: 'Sou um cliente e quero tirar dúvidas',
          name: 'Sou um cliente e quero tirar dúvidas',
        },
        {
          value: 'Sou um integrador e quero tirar dúvidas',
          name: 'Sou um integrador e quero tirar dúvidas',
        },
<<<<<<< HEAD
=======
        {
          value: `Tenho interesse em trabalhar na Solfácil e quero tirar dúvidas`,
          name: `Tenho interesse em trabalhar na Solfácil e quero tirar dúvidas`,
        },
>>>>>>> 8141de0... bump version
      ],
    };
  },
  template:
    '<div style="width:300px; min-height: 200px"><SelectInput v-bind="$props" :options="subjectTypes"></SelectInput></div>',
});

export const Default = Template.bind({});
Default.args = {
  id: 'select',
  searchable: true,
  placeholder: 'Selecione',
};
