import { action } from '@storybook/addon-actions';
import { ref } from 'vue';
import Tabs from './Tabs.vue';

export default {
  title: 'Components/UI Elements/Tabs',
  component: Tabs,
  argTypes: {},

  parameters: {
    componentSubtitle:
      'Tabs allow users to navigate easily between views within the same context',
  },
};

const Template = (args) => ({
  components: { Tabs },
  setup() {
    const currentTab = ref('formalizacao');
    const itemsTabs = ref([
      {
        name: 'upload',
        label: 'Upload',
      },
      {
        name: 'formalizacao',
        label: 'Formalização',
      },
      {
        name: 'cancelar_aprovar',
        label: 'Cancelar/Aprovar',
        disabled: true, //optional
      },
    ]);

    function getDataTab() {
      action('Tab');
    }
    return { args, itemsTabs, currentTab, getDataTab };
  },
  template: `
    <Tabs
      v-bind="args"
      :items="itemsTabs"
      @changed="getDataTab"
      v-model="currentTab"
      id="tab-1"
    />`,
});

Template.bind({});

export const Basic = Template.bind({});
