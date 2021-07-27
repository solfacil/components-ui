import { shallowMount } from '@vue/test-utils';
import Alert from './Alert.vue';

// Initalizing wrapper variable
let wrapper = null;

// Mount the component to make a wrapper before each test
beforeEach(() => {
  wrapper = shallowMount(Alert, {
    propsData: {
      id: 'alert',
    },
  });
});

describe('Alert - Unit', () => {
  it('should mount the component ', () => {
    expect(wrapper.vm).toBeDefined();
  });

  it('should v-model using prop', async () => {
    await wrapper.setProps({ value: false });

    expect(wrapper.props().value).toBe(false);
  });

  it('should icon number using prop', async () => {
    await wrapper.setProps({ iconNumber: 10 });

    expect(wrapper.props().iconNumber).toBe(10);
    expect(wrapper.text()).toBe('10');
  });

  it('should icon using prop', async () => {
    await wrapper.setProps({ icon: true });
    const container = wrapper.find('div');

    expect(wrapper.props().icon).toBe(true);
    expect(container.classes('alert-icon')).toBe(true);
  });

  it('should ID using prop', async () => {
    const container = wrapper.find('div');

    expect(wrapper.props().id).toBe('alert');
    expect(container.attributes().id).toBe('alert');
  });

  it('should size using prop', async () => {
    await wrapper.setProps({ size: 'small' });
    const container = wrapper.find('div');
    const sizeValidator = wrapper.vm.$options.props.size.validator;

    expect(
      sizeValidator('small') &&
        sizeValidator('medium') &&
        sizeValidator('large') &&
        sizeValidator('extra-large'),
    ).toBe(true);
    expect(wrapper.props().size).toBe('small');
    expect(container.classes('small')).toBe(true);
  });

  it('should variant using prop', async () => {
    await wrapper.setProps({ variant: 'error' });
    const container = wrapper.find('div');
    const variantValidator = wrapper.vm.$options.props.variant.validator;

    expect(
      variantValidator('success') &&
        variantValidator('error') &&
        variantValidator('warning') &&
        variantValidator('info') &&
        variantValidator('info-neutral') &&
        variantValidator('info-line'),
    ).toBe(true);
    expect(wrapper.props().variant).toBe('error');
    expect(container.classes('error')).toBe(true);
  });

  it('should icon close using prop', async () => {
    await wrapper.setProps({ close: true });

    expect(wrapper.props().close).toBe(true);
    expect(wrapper.text()).toBe('Fechar');
  });

  it('should emit the event closed with status when gets clicked', async () => {
    await wrapper.setProps({ close: true });
    await wrapper.find('.alert-close').trigger('click');

    expect(wrapper.emitted().input).toBeTruthy();
    expect(wrapper.emitted().input.length).toBe(1);
    expect(wrapper.emitted().input[0]).toEqual([false]);
  });
});
