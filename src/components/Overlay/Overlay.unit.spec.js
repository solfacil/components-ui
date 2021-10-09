import { shallowMount } from '@vue/test-utils';
import Overlay from './Overlay.vue';

// Initializing wrapper variable
let wrapper = null;

// Mount the component to make a wrapper before each test
beforeEach(() => {
  wrapper = shallowMount(Overlay, {
    propsData: {
      id: 'overlay',
    },
  });
});

describe('Overlay - Unit', () => {
  it('should mount the component', () => {
    expect(wrapper.vm).toBeDefined();
  });

  it('should show using prop', async () => {
    await wrapper.setProps({ show: true });

    expect(wrapper.find('.sol-overlay').exists()).toBeTruthy();
  });
});
