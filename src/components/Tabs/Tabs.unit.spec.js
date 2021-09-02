import { shallowMount } from '@vue/test-utils';
import Accordion from './Tabs.vue';

// Initializing wrapper variable
let wrapper = null;

// Mount the component to make a wrapper before each test
beforeEach(() => {
  wrapper = shallowMount(Accordion, {
    propsData: {
      id: 'tabs-test',
      items: [
        {
          name: 'upload',
          label: 'Upload',
        },
        {
          name: 'formalizacao',
          label: 'Formalização',
        },
        {
          name: 'cancelar_aprovar',
          label: 'Cancelar/Aprovar',
          disabled: true,
        },
      ],
    },
  });
});

describe('Accordion - Unit', () => {
  it('should mount the component', () => {
    expect(wrapper.vm).toBeDefined();
  });
});

it('should initial active tab and watch', async () => {
  await wrapper.setProps({ value: 'formalizacao' });
  wrapper.vm.setActiveLoad();

  expect(wrapper.vm.activeItem).toBe('formalizacao');
});

it('should emit the event click active tab', async () => {
  await wrapper.find('li:nth-child(2)').trigger('click');

  expect(wrapper.emitted().input).toBeTruthy();
  expect(wrapper.emitted().changed).toBeTruthy();
  expect(wrapper.emitted().input.length).toBe(1);
  expect(wrapper.emitted().changed.length).toBe(1);
});
