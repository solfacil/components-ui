import Chip from './Chip.vue';

export default {
  title: 'Components/UI Elements/Chip',
  component: Chip,

  parameters: {
    componentSubtitle: '',
  },
};

const Template = (args) => ({
  components: { Chip },
  setup() {
    return { args };
  },
  template: '<Chip v-bind="args"></Chip>',
});

export const Default = Template.bind({});
Default.args = {
  label: 'Sample text',
};

const SmallTemplate = (args) => ({
  components: { Chip },
  setup() {
    return { args };
  },
  template: `<Chip v-bind="args" small></Chip>`,
});
export const Small = SmallTemplate.bind({});
Small.args = {
  label: 'Sample text',
};
