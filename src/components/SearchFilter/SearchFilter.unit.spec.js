import { shallowMount } from '@vue/test-utils';
import SearchFilter from './SearchFilter.vue';
import SelectInput from '@components/SelectInput/SelectInput.vue';
import Input from '@components/Input/Input.vue';

const makeSut = ({ customProps = {} } = {}) => {
  const wrapper = shallowMount(SearchFilter, {
    propsData: {
      id: 'filter-component',
      fields: [
        {
          name: 'Nome',
          value: 'NAME',
        },
        {
          name: 'Teste',
          value: 'TESTE',
        },
      ],
      value: {},
      ...customProps,
    },
  });

  const timeoutToDebounce = () =>
    new Promise((resolve) => {
      setTimeout(() => resolve(true), 300);
    });

  jest.spyOn(wrapper.vm, '$emit');

  return {
    timeoutToDebounce,
    wrapper,
  };
};

describe('FilterComponent - Unit', () => {
  describe('UI State', () => {
    it('Should match elements with correct props', () => {
      const { wrapper } = makeSut();

      expect(wrapper.findComponent(Input).exists()).toBeTruthy();
      expect(wrapper.findComponent(SelectInput).exists()).toBeTruthy();
      expect(wrapper.findComponent(SelectInput).props('placeholder')).toBe(
        'Selecione',
      );
      expect(wrapper.findComponent(SelectInput).props('options')).toEqual([
        {
          name: 'Nome',
          value: 'NAME',
        },
        {
          name: 'Teste',
          value: 'TESTE',
        },
      ]);
    });

    it('Should match elements with custom select placeholder', () => {
      const { wrapper } = makeSut({
        customProps: {
          placeholder: 'Teste',
        },
      });

      expect(wrapper.findComponent(SelectInput).props('placeholder')).toBe(
        'Teste',
      );
    });
  });

  describe('Behaviors', () => {
    it('Should emits change and input event when user click on search', async () => {
      const { wrapper, timeoutToDebounce } = makeSut({
        customProps: {
          value: {
            value: 'Teste',
          },
        },
      });

      wrapper.findComponent(Input).vm.$emit('eventHandler');

      await timeoutToDebounce();

      expect(wrapper.vm.$emit).toHaveBeenCalledTimes(2);
      expect(wrapper.vm.$emit).toHaveBeenCalledWith('input', {
        field: 'NAME',
        value: 'Teste',
      });
      expect(wrapper.vm.$emit).toHaveBeenCalledWith('change', {
        field: 'NAME',
        value: 'Teste',
      });
    });

    it('Should emits change and input event when user click on clear', async () => {
      const { wrapper } = makeSut({
        customProps: {
          value: {
            value: 'Teste',
          },
        },
      });

      wrapper.findComponent(Input).vm.$emit('input', '');
      wrapper.findComponent(Input).vm.$emit('change', '');

      expect(wrapper.vm.$emit).toHaveBeenCalledTimes(2);
      expect(wrapper.vm.$emit).toHaveBeenCalledWith('input', {
        field: 'NAME',
        value: '',
      });
      expect(wrapper.vm.$emit).toHaveBeenCalledWith('change', {
        field: 'NAME',
        value: '',
      });
    });

    it('Should emits change and input event when user change field', async () => {
      const { wrapper, timeoutToDebounce } = makeSut({
        customProps: {
          value: {
            value: 'Teste',
          },
        },
      });

      wrapper.findComponent(SelectInput).vm.$emit('input', 'TESTE');
      wrapper.findComponent(SelectInput).vm.$emit('change');

      await timeoutToDebounce();

      expect(wrapper.vm.$emit).toHaveBeenCalledTimes(2);
      expect(wrapper.vm.$emit).toHaveBeenCalledWith('input', {
        field: 'TESTE',
        value: 'Teste',
      });
      expect(wrapper.vm.$emit).toHaveBeenCalledWith('change', {
        field: 'TESTE',
        value: 'Teste',
      });
    });
  });
});
