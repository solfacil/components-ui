import Tooltip from './Tooltip.vue';
import Button from '../Button/Button.vue';

export default {
  title: 'Components/UI Elements/Tooltip',
  component: Tooltip,
  argTypes: {
    position: {
      control: {
        type: 'select',
        options: [
          'top',
          'topleft',
          'topright',
          'right',
          'righttop',
          'rightbottom',
          'bottom',
          'bottomleft',
          'bottomright',
          'left',
          'lefttop',
          'leftbottom',
        ],
      },
      defaultValue: 'top',
    },
  },

  parameters: {
    componentSubtitle: 'The floating card popped by hovering.',
  },
};

const Template = (args) => ({
  components: { Tooltip, Button },
  setup() {
    return { args };
  },
  template: `
    <Tooltip v-bind="args" id="tip-1">
      <Button id="button">Hover Tooltip</Button>
      <template #tooltip>Lorem ipsum</template>
    </Tooltip>`,
});

export const Basic = Template.bind({});
