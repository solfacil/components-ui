import { shallowMount } from '@vue/test-utils';
import SelectInput from './SelectInput.vue';
import clickOutside from '@/directives/clickOutside.js';

// Initializing wrapper variable
let wrapper = null;

// Mount the component to make a wrapper before each test
beforeEach(() => {
  wrapper = shallowMount(SelectInput, {
    directives: {
      clickOutside,
    },
    propsData: {
      id: 'select-input',
      options: [
        {
          value: '1',
          name: 'Sou um cliente e quero tirar dúvidas',
        },
        {
          value: '2',
          name: 'Sou um integrador e quero tirar dúvidas',
        },
      ],
      multiselect: false,
    },
    data: () => ({
      showOptions: false,
    }),
  });
});

describe('SelectInput - Unit', () => {
  it('should mount the component', () => {
    expect(wrapper.vm).toBeDefined();
  });

  it('should ID using prop', async () => {
    const container = wrapper.find('div');

    expect(wrapper.props().id).toBe('select-input');
    expect(container.attributes().id).toBe('select-input');
  });

  it('should icon close using prop', async () => {
    const select = wrapper.find('[data-testid="select"]');
    await wrapper.setData({ showOptions: true });
    await select.trigger('click');

    expect(wrapper.vm.showOptions).toBe(false);
  });

  it('should single selection of item', async () => {
    await wrapper.setProps({
      multiselect: false,
    });
    await wrapper.find('[data-testid="select"]').trigger('click');
    await wrapper.findAll('li').at(0).trigger('click');

    expect(wrapper.vm.showOptions).toBe(false);
  });

  it('should multiple selection of items', async () => {
    await wrapper.setProps({
      multiselect: true,
    });
    await wrapper.find('[data-testid="select"]').trigger('click');
    await wrapper.findAll('li').at(0).trigger('click');
    await wrapper.findAll('li').at(1).trigger('click');

    expect(wrapper.emitted().input.length).toBe(2);
    expect(wrapper.emitted().change.length).toBe(2);
  });

  it('should selection of item', async () => {
    await wrapper.setProps({
      multiselect: false,
      options: [
        {
          value: '1',
          name: 'Sou um cliente e quero tirar dúvidas',
        },
      ],
    });
    await wrapper.find('[data-testid="select"]').trigger('click');
    await wrapper.findAll('li').at(0).trigger('click');
    expect(wrapper.props().options).toStrictEqual([
      {
        value: '1',
        name: 'Sou um cliente e quero tirar dúvidas',
      },
    ]);
  });

  it('should selection of multiple item', async () => {
    await wrapper.setProps({
      multiselect: true,
      options: [
        {
          value: '1',
          name: 'Sou um cliente e quero tirar dúvidas',
        },
        {
          value: '2',
          name: 'Sou um integrador e quero tirar dúvidas',
        },
      ],
    });

    await wrapper.find('[data-testid="select"]').trigger('click');
    await wrapper.findAll('li').at(0).trigger('click');
    expect(wrapper.props().options).toStrictEqual([
      {
        value: '1',
        name: 'Sou um cliente e quero tirar dúvidas',
      },
      {
        value: '2',
        name: 'Sou um integrador e quero tirar dúvidas',
      },
    ]);
  });
});
