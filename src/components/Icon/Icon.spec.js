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

  it('should receive the prop type remove', async () => {
    expect(wrapper.props().type).toBe('remove');
  });

  it('should render correct component in template', async () => {
    const IconRemove = await import('@img/icon/icon-remove.svg');
    expect(wrapper.findComponent(IconRemove).exists()).toBeTruthy();
  });

  it('should emits click on click in icon', async () => {
    jest.spyOn(wrapper.vm, '$emit');

    const IconRemove = await import('../../assets/img/icon/icon-remove.svg');
    wrapper.findComponent(IconRemove).vm.$emit('click');

    expect(wrapper.vm.$emit).toHaveBeenCalledWith('click');
  });
});
