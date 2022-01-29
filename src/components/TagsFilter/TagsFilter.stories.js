import { ref } from 'vue';
import TagsFilter from './TagsFilter.vue';

export default {
  title: 'Components/UI Elements/Tags Filter',
  component: TagsFilter,

  parameters: {
    componentSubtitle: '',
  },
};

const Template = (args) => ({
  components: { TagsFilter },
  setup() {
    const tags = ref(['teste', 'old teste']);
    return { args, tags };
  },
  template: '<TagsFilter v-bind="tags" v-model="tags" />',
});

export const Default = Template.bind({});
Default.args = {
  id: 'tags',
};
