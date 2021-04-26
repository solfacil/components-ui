import TagsFilter from './TagsFilter.vue';

export default {
  title: 'Components/UI Elements/Tags Filter',
  component: TagsFilter,

  parameters: {
    componentSubtitle: '',
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { TagsFilter },
  data() {
    return {
      tags: ['teste', 'old teste'],
    };
  },
  template: '<TagsFilter v-bind="$props" v-model="tags" />',
});

export const Default = Template.bind({});
Default.args = {
  id: 'tags',
};
