import Overlay from './Overlay.vue';
import List from '../List/List.vue';
import Button from '../Button/Button.vue';
import { ref } from 'vue';

export default {
  title: 'Components/UI Elements/Overlay',
  component: Overlay,

  parameters: {
    componentSubtitle: '',
  },
};

const Template = (args) => ({
  components: { Overlay, List, Button },
  setup() {
    const toggle = ref(false);

    const itemsList = ref([
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
    ]);
    return { args, toggle, itemsList };
  },

  template: `
    <div>
      <Overlay v-bind="args" :show="toggle">
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
    };
  },
});

export const Default = Template.bind({});
Default.args = {
  id: 'overlay',
};
