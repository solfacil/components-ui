import { shallowMount } from '@vue/test-utils';
import Alert from './Alert.vue';

describe('Alert - Unit', () => {
  it('should mount the component ', () => {
    const wrapper = shallowMount(Alert, {
      propsData: {
        id: 'alert',
        close: true,
        iconNumber: 10,
        icon: true,
      },
    });

    expect(wrapper.vm).toBeDefined();
    expect(wrapper.text()).toContain('Fechar');
    expect(wrapper.text()).toContain('10');
  });

  it('should check validator props', () => {
    const wrapper = shallowMount(Alert, {
      propsData: {
        id: 'alert',
      },
    });

    const sizeValidator = wrapper.vm.$options.props.size.validator;
    const variantValidator = wrapper.vm.$options.props.variant.validator;

    expect(
      sizeValidator('small') &&
        sizeValidator('medium') &&
        sizeValidator('large') &&
        sizeValidator('extra-large'),
    ).toBe(true);
    expect(
      variantValidator('success') &&
        variantValidator('error') &&
        variantValidator('warning') &&
        variantValidator('info') &&
        variantValidator('info-neutral') &&
        variantValidator('info-line'),
    ).toBe(true);
  });

  it('should emit the event closed with status when gets clicked', async () => {
    const wrapper = shallowMount(Alert, {
      propsData: {
        id: 'alert',
        close: true,
      },
    });

    await wrapper.find('.alert-close').trigger('click');

    expect(wrapper.emitted().input).toBeTruthy();
    expect(wrapper.emitted().input.length).toBe(1);
    expect(wrapper.emitted().input[0]).toEqual([false]);
  });
});
