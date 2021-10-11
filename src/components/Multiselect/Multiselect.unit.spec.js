import { shallowMount } from '@vue/test-utils';
import Multiselect from './Multiselect.vue';

// Initializing wrapper variable
let wrapper = null;

// Mount the component to make a wrapper before each test
beforeEach(() => {
  wrapper = shallowMount(Multiselect, {
    propsData: {
      id: 'multiselect',
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
    },
  });
});

describe('Multiselect - Unit', () => {
  it('should mount the component', () => {
    expect(wrapper.vm).toBeDefined();
  });

  it('should ID using prop', async () => {
    const container = wrapper.find('div');

    expect(wrapper.props().id).toBe('multiselect');
    expect(container.attributes().id).toBe('multiselect');
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

    await wrapper.findAll('li').at(1).trigger('click');

    expect(wrapper.emitted().input.length).toBe(3);
    expect(wrapper.emitted().change.length).toBe(3);
  });

  it('should remove special caracteres', async () => {
    expect(wrapper.vm.removeSpecialCharacters('nômade')).toBe('nomade');
  });

  it('should return all options', async () => {
    expect(wrapper.vm.searchItems('')).toStrictEqual([
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

  it('should return filtered options', async () => {
    expect(wrapper.vm.searchItems('cliente')).toStrictEqual([
      {
        value: '1',
        name: 'Sou um cliente e quero tirar dúvidas',
      },
    ]);
  });
});
