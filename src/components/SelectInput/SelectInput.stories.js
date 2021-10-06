import SelectInput from './SelectInput.vue';

export default {
  title: 'Components/UI Elements/Forms/SelectInput',
  component: SelectInput,
  argTypes: {
    position: {
      control: {
        type: 'select',
        options: ['top', 'bottom'],
      },
      defaultValue: 'bottom',
    },
  },

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
      inputModel: null,
    };
  },
  template:
    '<div style="width:300px; min-height: 200px"><SelectInput v-bind="$props" :options="subjectTypes" v-model="inputModel" /></div>',
});

export const Default = Template.bind({});
Default.args = {
  position: 'bottom',
  id: 'select',
  searchable: true,
  multiselect: false,
  placeholder: 'Selecione',
};

const TemplateMultiSelect = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { SelectInput },
  data() {
    return {
      subjectTypes: [
        {
          value: '1',
          name: 'Opção 1',
        },
        {
          value: '2',
          name: 'Opção 2',
        },
        {
          value: '3',
          name: 'Opção 3',
        },
        {
          value: '4',
          name: 'Opção 4',
        },
        {
          value: '5',
          name: 'Opção 5',
        },
      ],
      inputModel: '1',
    };
  },
  template:
    '<div style="width:300px; min-height: 200px"><SelectInput v-bind="$props" :options="subjectTypes" v-model="inputModel" /></div>',
});

export const MultiSelect = TemplateMultiSelect.bind({});
MultiSelect.args = {
  position: 'bottom',
  id: 'multiselect',
  searchable: false,
  multiselect: true,
  placeholder: 'Selecione',
};

const TemplateWithIcon = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { SelectInput },
  data() {
    return {
      subjectTypes: [
        {
          value: '1',
          name: 'Opção 1',
        },
        {
          value: '2',
          name: 'Opção 2',
        },
        {
          value: '3',
          name: 'Opção 3',
        },
        {
          value: '4',
          name: 'Opção 4',
        },
        {
          value: '5',
          name: 'Opção 5',
        },
      ],
      inputModel: '1',
    };
  },
  template:
    '<div style="width:300px; min-height: 200px"><SelectInput v-bind="$props" :options="subjectTypes" v-model="inputModel"><template slot="icon">x</template></template></SelectInput></div>',
});

export const WithIcon = TemplateWithIcon.bind({});
WithIcon.args = {
  position: 'bottom',
  id: 'with-icon',
  searchable: false,
  multiselect: false,
  placeholder: 'Selecione',
};
