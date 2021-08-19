import { shallowMount } from '@vue/test-utils';
import Accordion from './Accordion.vue';

// Initializing wrapper variable
let wrapper = null;

// Initializing transition lifecycle hooks
const transitionStub = () => ({
  render: function () {
    return this.$options._renderChildren;
  },
});

// Mount the component to make a wrapper before each test
beforeEach(() => {
  wrapper = shallowMount(Accordion, {
    propsData: {
      id: 'accordion-test',
      headers: ['Example 1', 'Example 2'],
    },
    stubs: {
      transition: transitionStub(),
    },
  });
});

describe('Accordion - Unit', () => {
  it('should mount the component', () => {
    expect(wrapper.vm).toBeDefined();
  });

  it('should enter component with first element open', async () => {
    await wrapper.setProps({ open: 0 });
    const firstDescription = wrapper.find('dd');

    expect(wrapper.props().open).toBeGreaterThanOrEqual(0);
    expect(firstDescription.attributes().style).toBe('');
  });

  it('should size using prop', async () => {
    await wrapper.setProps({ small: true });
    const firstTitle = wrapper.find('dt');

    expect(wrapper.props().small).toBe(true);
    expect(firstTitle.attributes().class).toBe('small');
  });

  it('should openAll using prop', async () => {
    await wrapper.setProps({ openAll: true });
    const firstDescription = wrapper.findAll('dd');

    await wrapper.findAll('dt').at(0).trigger('click');
    await wrapper.findAll('dt').at(1).trigger('click');

    expect(wrapper.props().openAll).toBe(true);
    expect(firstDescription.at(0).attributes().style).toBe('');
    expect(firstDescription.at(1).attributes().style).toBe('');

    await wrapper.findAll('dt').at(1).trigger('click');

    expect(firstDescription.at(1).attributes().style).toBe('display: none;');
  });
});
