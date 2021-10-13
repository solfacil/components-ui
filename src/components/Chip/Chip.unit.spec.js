import { shallowMount } from '@vue/test-utils';
import Chip from './Chip.vue';

// Initializing wrapper variable
let wrapper = null;

// Mount the component to make a wrapper before each test
beforeEach(() => {
  wrapper = shallowMount(Chip, {
    propsData: {
      label: 'Sample text',
    },
  });
});

describe('Chip - Unit', () => {
  it('should mount the component', () => {
    expect(wrapper.vm).toBeDefined();
  });

  it('shold emit close on icon click', async () => {
    const icon = wrapper.find('.svg-wrapper');

    expect(icon.exists()).toBe(true);
    await icon.trigger('click');
    expect(wrapper.emitted()).toHaveProperty('close');
  });
});
