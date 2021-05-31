import PageSize from './PageSize.vue';

export default {
  title: 'Components/UI Elements/Page Size',
  component: PageSize,
  argTypes: {},

  parameters: {
    componentSubtitle: 'Paging interval size indicator',
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { PageSize },
  template:
    '<PageSize v-bind="$props" id="page-size" v-model="size" @change="handleChange" />',
  data() {
    return {
      size: 10,
    };
  },
});

Template.bind({});

export const Basic = Template.bind({});
Basic.args = {
  id: 'pg-size-1',
  value: 10,
};
