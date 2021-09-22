import { shallowMount } from '@vue/test-utils';
import SelectInput from './SelectInput.vue';
import clickOutside from '@/directives/clickOutside.js';

// Initializing wrapper variable
let wrapper = null;

// Mount the component to make a wrapper before each test
beforeEach(() => {
  wrapper = shallowMount(SelectInput, {
    directives: {
      clickOutside,
    },
    propsData: {
      id: 'select-input',
      options: [{
        value: '1',
        name: 'Sou um cliente e quero tirar dúvidas',
      },
      {
        value: '2',
        name: 'Sou um integrador e quero tirar dúvidas',
      },],
      multiselect: false,
    },
  });
});

describe('SelectInput - Unit', () => {
  it('should mount the component', () => {
    expect(wrapper.vm).toBeDefined();
  });

  it('should ID using prop', async () => {
    const container = wrapper.find('div');

    expect(wrapper.props().id).toBe('select-input');
    expect(container.attributes().id).toBe('select-input');
  });

});
