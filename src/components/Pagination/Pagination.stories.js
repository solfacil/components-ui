import { action } from '@storybook/addon-actions';
import { ref } from 'vue';
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

const Template = (args) => ({
  components: { Pagination },
  setup() {
    const paginator = ref({
      afterCursor: 'g3QAAAACZAAQZmluYW5jaWFtZW50b19pZGQAA25pbGQAAmlkZAADbmls',
      beforeCursor: 'g3QAAAACZAAQZmluYW5jaWFtZW50b19pZGQAA25pbGQAAmlkZAADbmls',
      count: 37,
      size: 10,
    });

    function triggerFunction() {
      action('clicked');
    }
    return { args, paginator, triggerFunction };
  },
  template:
    '<Pagination v-bind="args" :data="paginator" id="pagination" @clickHandler="triggerFunction"/>',
});

Template.bind({});

export const Basic = Template.bind({});
Basic.args = {
  pageSize: 10,
  id: 'pag-1',
};
