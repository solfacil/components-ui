import { shallowMount } from '@vue/test-utils';
import InputMinusPlus from './InputMinusPlus.vue';

// Initializing wrapper variable
let wrapper = null;

// Mount the component to make a wrapper before each test
beforeEach(() => {
  wrapper = shallowMount(InputMinusPlus, {
    propsData: {
      id: 'inputminusplus',
    },
  });
});

describe('InputMinusPlus - Unit', () => {
  it('should mount the component', () => {
    expect(wrapper.vm).toBeDefined();
  });
});
