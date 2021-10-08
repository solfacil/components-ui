import { shallowMount } from '@vue/test-utils';
import Multiselect from './Multiselect.vue';

// Initializing wrapper variable
let wrapper = null;

// Mount the component to make a wrapper before each test
beforeEach(() => {
  wrapper = shallowMount(Multiselect, {
    propsData: {
      id: 'multiselect',
    },
  });
});

describe('Multiselect - Unit', () => {
  it('should mount the component', () => {
    expect(wrapper.vm).toBeDefined();
  });
});
