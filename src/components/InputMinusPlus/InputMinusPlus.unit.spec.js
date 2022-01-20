import { shallowMount } from '@vue/test-utils';
import InputMinusPlus from './InputMinusPlus.vue';

// Initializing wrapper variable
let wrapper = null;

// Mount the component to make a wrapper before each test
beforeEach(() => {
  wrapper = shallowMount(InputMinusPlus, {
    props: {
      id: 'inputminusplus',
      max: 10,
    },
  });
});

describe('InputMinusPlus - Unit', () => {
  it('should mount the component', () => {
    expect(wrapper.vm).toBeDefined();
  });

  it('should  clicked in button plus', async () => {
    const btn = wrapper.findAll('button');
    await btn.at(1).trigger('click');

    expect(wrapper.vm.newValue).toBe(1);
    expect(wrapper.emitted('input').length).toBe(1);
  });

  it('should  clicked in button minus', async () => {
    const btn = wrapper.findAll('button');
    await btn.at(1).trigger('click');
    await btn.at(0).trigger('click');

    expect(wrapper.vm.newValue).toBe(0);
    expect(wrapper.emitted('input').length).toBe(2);
  });

  it('emits input event when interalValue changes', async () => {
    wrapper.vm.$options.watch.value.call(wrapper.vm, 5);

    expect(wrapper.vm.newValue).toBe(5);
  });
});
