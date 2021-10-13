import Chip from './Chip.vue';

export default {
  title: 'Components/UI Elements/Chip',
  component: Chip,

  parameters: {
    componentSubtitle: '',
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Chip },
  template: '<Chip v-bind="$props"></Chip>',
});

export const Default = Template.bind({});
Default.args = {
  label: 'Sample text',
};

const SmallTemplate = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Chip },
  template: `<Chip v-bind="$props" small></Chip>`,
});
export const Small = SmallTemplate.bind({});
Small.args = {
  label: 'Sample text',
};
