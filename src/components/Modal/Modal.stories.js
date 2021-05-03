import Modal from './Modal.vue';
import Button from '@components/Button/Button';

export default {
  title: 'Components/UI Elements/Modal',
  component: Modal,
  argTypes: {},

  parameters: {
    componentSubtitle: '',
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Modal, Button },
  data() {
    return {
      show: false,
    };
  },
  methods: {
    showModal() {
      this.show = true;
    },
  },
  template:
    '<div><Button id="show-modal" @click="showModal">Show modal</button><Modal v-bind="$props" v-model="show">Main modal<template v-slot:footer></template></Modal></div>',
});

export const Default = Template.bind({});
Default.args = {
  id: 'modal',
  title: 'Lorem ipsum dolor petrus qualis.',
  buttonClose: true,
};
