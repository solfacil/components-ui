import { action } from '@storybook/addon-actions';
import PageSize from './PageSize.vue';

export default {
  title: 'Components/UI Elements/Page Size',
  component: PageSize,
  argTypes: {
    value: {
      control: {
        type: 'select',
        options: [10, 20, 50, 100],
      },
      defaultValue: 10,
    },
  },
  parameters: {
    componentSubtitle: 'Paging interval size indicator',
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { PageSize },
  methods: {
    handleChange: action('size'),
  },
  template:
    '<PageSize id="page-size" v-model="value" @change="handleChange" />',
});

Template.bind({});

export const Basic = Template.bind({});
Basic.args = {
  id: 'pg-size-1',
};
