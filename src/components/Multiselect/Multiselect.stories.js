import { ref } from 'vue';
import Multiselect from './Multiselect.vue';

export default {
  title: 'Components/UI Elements/Forms/Multiselect',
  component: Multiselect,
  parameters: {
    componentSubtitle: '',
  },
};

const Template = (args) => ({
  components: { Multiselect },
  setup() {
    const subjectTypes = ref(
      new Array(10).fill('').map((item, index) => ({
        value: `${index}`,
        name: `Opção ${index}`,
      })),
    );

    const inputModel = ref([]);

    return { args, subjectTypes, inputModel };
  },
  template:
    '<div style="width:500px; min-height: 200px"><Multiselect v-bind="args" :options="subjectTypes" v-model="inputModel" /></div>',
});

export const Default = Template.bind({});
Default.args = {
  id: 'multi-select',
};
