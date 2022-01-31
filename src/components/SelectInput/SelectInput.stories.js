import { ref } from 'vue';
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

const Template = (args) => ({
  components: { SelectInput },
  setup() {
    const subjectTypes = ref([
      {
        value: 1,
        name: 'Sou um cliente e quero tirar dúvidas',
      },
      {
        value: 2,
        name: 'Sou um integrador e quero tirar dúvidas',
      },
    ]);

    const inputModel = ref(2);
    return { args, inputModel, subjectTypes };
  },
  template: `<div style="width:300px; min-height: 200px">
      <SelectInput v-bind="args" :options="subjectTypes" v-model:value="inputModel" />
    </div>`,
});

export const Default = Template.bind({});
Default.args = {
  position: 'bottom',
  id: 'select',
  searchable: true,
  placeholder: 'Selecione',
};
