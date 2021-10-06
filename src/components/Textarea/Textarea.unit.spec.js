import { shallowMount } from '@vue/test-utils';
import Textarea from './Textarea.vue';

// Initializing wrapper variable
let wrapper = null;

// Mount the component to make a wrapper before each test
beforeEach(() => {
  wrapper = shallowMount(Textarea, {
    propsData: {
      id: 'textarea',
    },
  });
});

describe('Textarea - Unit', () => {
  it('should mount the component', () => {
    expect(wrapper.vm).toBeDefined();
  });
});
