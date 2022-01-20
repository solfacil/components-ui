import { shallowMount } from '@vue/test-utils';
import Badge from './Badge.vue';

// Initializing wrapper variable
let wrapper = null;

// Mount the component to make a wrapper before each test
beforeEach(() => {
  wrapper = shallowMount(Badge, {
    props: {
      id: 'badge',
    },
  });
});

describe('Badge - Unit', () => {
  it('should mount the component', () => {
    expect(wrapper.vm).toBeDefined();
  });

  it('should icon visibility using prop', async () => {
    expect(wrapper.props().hiddenIcon).toBe(false);

    const span = wrapper.find('span');

    expect(span.classes('hidden-ico')).toBe(false);

    await wrapper.setProps({ hiddenIcon: true });

    expect(span.classes('hidden-ico')).toBe(true);
  });

  it('should variant using prop', async () => {
    await wrapper.setProps({ variant: 'done' });

    const span = wrapper.find('span');

    const variantValidator = wrapper.vm.$options.props.variant.validator;

    expect(
      variantValidator('done') &&
        variantValidator('denied') &&
        variantValidator('in-progress') &&
        variantValidator('approved') &&
        variantValidator('message') &&
        variantValidator('message-line') &&
        variantValidator('removed'),
    ).toBe(true);

    expect(wrapper.props().variant).toBe('done');

    expect(span.classes('done')).toBe(true);
  });
});
