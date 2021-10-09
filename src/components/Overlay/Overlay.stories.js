import Overlay from './Overlay.vue';
import List from '../List/List.vue';
import Button from '../Button/Button.vue';

export default {
  title: 'Components/UI Elements/Overlay',
  component: Overlay,

  parameters: {
    componentSubtitle: '',
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Overlay, List, Button },
  template: `
    <div>
      <Overlay v-bind="$props" :show="toggle">
        <List :items="itemsList" id="list-1" />
      </Overlay>

      <br />

      <Button id="button" @click="toggle = !toggle">
        Toggle overlay
      </Button>
    </div>`,
  data() {
    return {
      toggle: false,
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

export const Default = Template.bind({});
Default.args = {
  id: 'overlay',
};
