import { shallowMount } from '@vue/test-utils';
import Icon from './Icon.vue';

// Initializing wrapper variable
let wrapper = null;

// Mount the component to make a wrapper before each test
beforeEach(() => {
  wrapper = shallowMount(Icon, {
    propsData: {
      id: 'icon',
      type: 'remove',
    },
  });
});

describe('Icon - Unit', () => {
  it('should mount the component', () => {
    expect(wrapper.vm).toBeDefined();
  });

  it('should icon visibility using prop', async () => {
    expect(wrapper.props().type).toBe('remove');
  });
});
