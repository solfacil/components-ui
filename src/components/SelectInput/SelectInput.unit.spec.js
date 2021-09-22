import { shallowMount } from '@vue/test-utils';
import SelectInput from './SelectInput.vue';

// Initializing wrapper variable
let wrapper = null;

// Mount the component to make a wrapper before each test
beforeEach(() => {
  wrapper = shallowMount(SelectInput, {
    propsData: {
      id: 'select-input',
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
