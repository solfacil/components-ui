import { action } from '@storybook/addon-actions';
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

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Tabs },
  template: `
    <Tabs
      v-bind="$props"
      :items="itemsTabs"
      @changed="getDataTab"
      v-model="currentTab"
      id="tab-1"
    />`,
  data() {
    return {
      currentTab: 'formalizacao',
      itemsTabs: [
        {
          name: 'upload',
          label: 'Upload de documentos',
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
      ],
    };
  },
  methods: {
    getDataTab: action('Tab'),
  },
});

Template.bind({});

export const Basic = Template.bind({});
