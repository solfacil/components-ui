import { action } from '@storybook/addon-actions';
import Popover from './Popover.vue';
import Button from '../Button/Button.vue';

export default {
  title: 'Components/UI Elements/Popover',
  component: Popover,
  argTypes: {
    position: {
      control: {
        type: 'select',
        options: ['top', 'right', 'bottom', 'left'],
      },
      defaultValue: 'top',
    },
  },

  parameters: {
    componentSubtitle: 'The floating card popped by hovering.',
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Popover, Button },
  template: `
    <Popover v-bind="$props">
      <Button>Hover Popover</Button>

      <template slot="popover">
        Vivamus sagittis lacus vel augue laoreet rutrum faucibus.
      </template>
    </Popover>`,
  methods: {
    someMethod: action('clicked'),
  },
});

export const Top = Template.bind({});
Top.args = {
  position: 'top',
  title: 'Title Top',
};

export const Right = Template.bind({});
Right.args = {
  position: 'right',
  title: 'Title Right',
};

export const Bottom = Template.bind({});
Bottom.args = {
  position: 'bottom',
  title: 'Title Bottom',
};

export const Left = Template.bind({});
Left.args = {
  position: 'left',
  title: 'Title Left',
};
