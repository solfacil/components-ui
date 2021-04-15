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

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { List },
  template: '<List v-bind="$props" :items="itemsList" />',
  data() {
    return {
      itemsList: [
        {
          title: 'Lorem ipsum dolor',
          description: 'Vivamus luctus ipsum sed sapien tristique',
        },
        {
          title: 'Lorem ipsum dolor',
          description: 'Vivamus luctus ipsum sed sapien tristique',
        },
        {
          title: 'Lorem ipsum dolor',
          description: 'Vivamus luctus ipsum sed sapien tristique',
        },
      ],
    };
  },
});

Template.bind({});

export const Basic = Template.bind({});
