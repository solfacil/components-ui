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
      startOpen: -1,
      openMulti: false,
    },
    data() {
      return {
        openItems: [],
      };
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

  it('Should enter component with first element open', async () => {
    const _wrapper = shallowMount(Accordion, {
      propsData: {
        id: 'accordion-test',
        headers: ['Example 1', 'Example 2'],
        startOpen: 0,
      },
      data() {
        return {
          openItems: [],
        };
      },
    });

    expect(_wrapper.vm.openItems).toHaveLength(1);
  });

  it('Should apply size prop', async () => {
    await wrapper.setProps({ small: true });
    const firstTitle = wrapper.find('dt');

    expect(wrapper.props().small).toBe(true);
    expect(firstTitle.attributes().class).toBe('small');
  });

  it('Should allow multiple items to be open simultaneously', async () => {
    await wrapper.setProps({ openMulti: true });

    await wrapper.findAll('dt').at(0).trigger('click');
    await wrapper.findAll('dt').at(1).trigger('click');

    expect(wrapper.vm.openItems).toHaveLength(2);

    await wrapper.findAll('dt').at(1).trigger('click');

    expect(wrapper.vm.openItems).toHaveLength(1);
  });

  it('Should handle openItems on dt click', async () => {
    const dt = wrapper.find('dt');

    await dt.trigger('click');

    expect(wrapper.vm.openItems).toHaveLength(1);

    await dt.trigger('click');

    expect(wrapper.vm.openItems).toHaveLength(0);
  });
});
