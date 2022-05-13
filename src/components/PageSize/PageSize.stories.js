import { action } from '@storybook/addon-actions';
import PageSize from './PageSize.vue';

export default {
  title: 'Components/UI Elements/Page Size',
  component: PageSize,
  argTypes: {
    value: {
      control: {
        type: 'select',
      },
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
    '<PageSize id="page-size" v-model="value" @change="handleChange" :options="options"/>',
});

Template.bind({});

export const Basic = Template.bind({});
Basic.args = {
  id: 'pg-size-1',
  value: 10,
};

export const Variation = Template.bind({});
Variation.args = {
  id: 'pg-size-2',
  value: 3,
  options: [
    {
      value: 3,
      name: '3',
    },
    {
      value: 6,
      name: '6',
    },
    {
      value: 9,
      name: '9',
    },
    {
      value: 12,
      name: '12',
    },
  ],
};
