import Modal from './Modal.vue';
import Button from '@components/Button/Button';
import { ref, watchEffect } from 'vue';

export default {
  title: 'Components/UI Elements/Modal',
  component: Modal,
  argTypes: {
    buttonClose: {
      control: {
        type: 'select',
        options: ['primary', 'secondary', 'exception'],
      },
      defaultValue: null,
    },
  },

  parameters: {
    componentSubtitle: '',
  },
};

const Template = ({ value, ...args }) => ({
  components: { Modal, Button },
  setup() {
    const show = ref(false);

    watchEffect(() => {
      show.value = value;
    });

    function showModal() {
      show.value = true;
    }

    return { args, show, showModal };
  },

  template: `
    <div>
      <Button id="show-modal" @click="showModal">
        Show modal
      </button>

      <Modal v-bind="args" v-model:value="show">
        <p>
          Main modal <br> Main modal <br> Main modal <br> Main modal <br> Main modal <br> Main modal <br> Main modal
        </p>
        <template v-slot:footer></template>
      </Modal>
    </div>
  `,
});

export const Default = Template.bind({});
Default.args = {
  id: 'modal',
  title: 'Lorem ipsum dolor petrus qualis.',
};
