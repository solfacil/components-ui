import { shallowMount } from '@vue/test-utils';
import List from './List.vue';

// Initializing wrapper variable
let wrapper = null;

// Mount the component to make a wrapper before each test
beforeEach(() => {
  wrapper = shallowMount(List, {
    propsData: {
      id: 'list',

      items: [
        {
          title: 'Lorem ipsum dolor',
          description: 'Vivamus luctus ipsum sed sapien tristique',
          titleClass: 'text-red2',
          descriptionClass: 'text-green2',
        },
        {
          title: 'Lorem ipsum dolor',
          description: 'Vivamus luctus ipsum sed sapien tristique',
          titleClass: 'text-red2',
          descriptionClass: 'text-green2',
        },
        {
          title: 'Lorem ipsum dolor',
          description: 'Vivamus luctus ipsum sed sapien tristique',
        },
      ],
    },
  });
});

describe('List - Unit', () => {
  it('should mount the component', () => {
    expect(wrapper.vm).toBeDefined();
  });

  it('should load items', () => {
    expect(wrapper.vm.hasSlot).toBe(false);

    expect(wrapper.findAll('tr').length).toBe(3);

    expect(wrapper.findAll('th.text-red2').length).toBe(2);

    expect(wrapper.findAll('th.th-width').length).toBe(3);

    expect(wrapper.props().minWidthTitle).toBe(true);
  });

  it('should load item using slot', () => {
    const _wrapper = shallowMount(List, {
      propsData: {
        id: 'list-with-slot',
      },

      slots: {
        default: '<tr><td><span>Testing slot</span></td></tr>',
      },
    });

    expect(_wrapper.findAll('tr').length).toBe(1);
    expect(_wrapper.findAll('span').length).toBe(1);
  });

  it('should validate prop items', async () => {
    const validator = wrapper.vm.$options.props.items.validator;

    expect(
      validator([
        {
          abacate: 'Lorem ipsum dolor',
          banana: 'Vivamus luctus ipsum sed sapien tristique',
        },
      ]),
    ).toBe(false);

    expect(
      validator([
        {
          title: 'Lorem ipsum dolor',
          description: 'Vivamus luctus ipsum sed sapien tristique',
        },
      ]),
    ).toBe(true);
  });
});
