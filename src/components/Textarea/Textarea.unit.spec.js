import { shallowMount } from '@vue/test-utils';
import Textarea from './Textarea.vue';

// Initializing wrapper variable
let wrapper = null;

// Mount the component to make a wrapper before each test
beforeEach(() => {
  wrapper = shallowMount(Textarea, {
    propsData: {
      id: 'textarea',
      disabled: false,
      label: 'Textarea',
    },
  });
});

describe('Textarea - Unit', () => {
  it('should mount the component', () => {
    expect(wrapper.vm).toBeDefined();
  });

  it('should trigger event on enter', async () => {
    await wrapper.setProps({
      value: 'Sample value',
    });
    const textarea = wrapper.find('[data-testid="textarea"]');
    await textarea.trigger('keyup.enter');

    expect(wrapper.emitted().eventHandler[0]).toEqual(['Sample value']);
  });

  it('should trigger input event on input', async () => {
    await wrapper.setProps({
      value: 'Sample value',
    });
    const textarea = wrapper.find('[data-testid="textarea"]');
    await textarea.trigger('input');

    expect(wrapper.emitted().input[0]).toEqual(['Sample value']);
  });
});
