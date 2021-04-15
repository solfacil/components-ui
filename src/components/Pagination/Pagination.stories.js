import { action } from '@storybook/addon-actions';
import Pagination from './Pagination.vue';

export default {
  title: 'Components/UI Elements/Pagination',
  component: Pagination,
  argTypes: {},

  parameters: {
    componentSubtitle:
      'Pagination is used for splitting up content or data into several pages, with a control for navigating to the next or previous page.',
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Pagination },
  template:
    '<Pagination v-bind="$props" :data="paginator" @clickHandler="triggerFunction"/>',
  data() {
    return {
      paginator: {
        afterCursor: 'g3QAAAACZAAQZmluYW5jaWFtZW50b19pZGQAA25pbGQAAmlkZAADbmls',
        beforeCursor:
          'g3QAAAACZAAQZmluYW5jaWFtZW50b19pZGQAA25pbGQAAmlkZAADbmls',
        count: 31,
        size: 10,
      },
    };
  },

  methods: {
    triggerFunction: action('clicked'),
  },
});

Template.bind({});

export const Basic = Template.bind({});
Basic.args = {
  pageSize: 5,
};
