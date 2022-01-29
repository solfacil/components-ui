import { ref } from 'vue';
import List from './List.vue';

export default {
  title: 'Components/UI Elements/List',
  component: List,
  argTypes: {},

  parameters: {
    componentSubtitle:
      'List component show a number of connected items written consecutively, typically one below the other.',
  },
};

const Template = (args) => ({
  components: { List },
  setup() {
    const itemsList = ref([
      {
        title: 'Lorem ipsum dolor',
        description: 'Vivamus luctus ipsum sed sapien tristique',
        titleClass: 'text-red2',
        descriptionClass: 'text-green2',
      },
      {
        title: 'Lorem ipsum dolor',
        description: 'Vivamus luctus ipsum sed sapien tristique',
      },
      {
        title: 'Lorem ipsum dolor',
        description: 'Vivamus luctus ipsum sed sapien tristique',
      },
    ]);

    return { args, itemsList };
  },
  template: '<List v-bind="args" :items="itemsList" id="list-1" />',
});

Template.bind({});

export const Basic = Template.bind({});
