import { shallowMount } from '@vue/test-utils';

import Input from './Input.vue';

// Initializing wrapper variable
let wrapper = null;

// Mount the component to make a wrapper before each test
beforeEach(() => {
  wrapper = shallowMount(Input, {
    props: {
      disabled: false,
      invalid: false,
      label: null,
      msgInvalid: null,
      name: null,
      id: 'input-2',
      value: null,
      placeholder: null,
      type: 'text',
      controlVisibility: false,
    },

    data() {
      return {
        inputType: 'text',
      };
    },
  });
});

describe('Input - Unit', () => {
  it('should mount the component', () => {
    expect(wrapper.vm).toBeDefined();
  });

  it('should apply masks', async () => {
    expect(wrapper.vm.pattern).toBe(''); // Considering input type as text.

    await wrapper.setProps({ type: 'tel' }); // Should apply mask automatically.

    expect(wrapper.vm.pattern).toBe('(##) #####-####');

    await wrapper.setProps({ customMask: '###.###.###-##' }); // Should overwrite.

    expect(wrapper.vm.pattern).toBe('###.###.###-##');
  });

  it('should clear input value', async () => {
    await wrapper.setProps({
      type: 'search',
      value: 'Busca',
    });

    await wrapper.setData({
      inputType: 'search',
    });

    const clearIcon = wrapper.find('[data-testid="search_clear_icon"]');
    await clearIcon.trigger('click');
    expect(wrapper.emitted().input[0]).toEqual(['']);
  });

  it('should trigger event on enter', async () => {
    await wrapper.setProps({
      value: 'Sample value',
    });
    const input = wrapper.find('[data-testid="input"]');
    await input.trigger('keyup.enter');

    expect(wrapper.emitted().eventHandler[0]).toEqual(['Sample value']);
  });

  it('should trigger event on blur', async () => {
    await wrapper.setProps({
      value: 'Sample value',
    });
    const input = wrapper.find('[data-testid="input"]');
    input.trigger('blur');

    expect(wrapper.emitted().blur[0]).toEqual(['Sample value']);
  });

  it('should toggle password visibility', async () => {
    await wrapper.setProps({
      type: 'password',
      controlVisibility: true,
    });

    await wrapper.setData({
      inputType: 'password',
    });

    const showIcon = wrapper.find('[data-testid="password_show_icon"]');
    await showIcon.trigger('click');

    expect(wrapper.vm.inputType).toBe('text');

    const hideIcon = wrapper.find('[data-testid="password_hide_icon"]');
    await hideIcon.trigger('click');

    expect(wrapper.vm.inputType).toBe('password');
  });
});
