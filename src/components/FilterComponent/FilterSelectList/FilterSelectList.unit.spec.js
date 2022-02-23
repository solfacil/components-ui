import { mount } from '@vue/test-utils';
import FilterSelectList from './FilterSelectList.vue';
import Input from '../../Input/Input.vue';
import Checkbox from '@components/Checkbox/Checkbox';

const makeSut = ({ customProps = {}, customComputed = {} } = {}) => {
  const wrapper = mount(FilterSelectList, {
    props: {
      id: 'filterselectlist',
      filter: {
        items: [
          {
            name: 'Teste01',
            value: 1,
          },
          {
            name: 'Teste02',
            value: 2,
          },
        ],
      },
      ...customProps,
    },
    computed: {
      ...FilterSelectList.computed,
      filterSelectlist: () => ({}),
      ...customComputed,
    },
  });

  const timeoutToInterval = () =>
    new Promise((resolve) => {
      setTimeout(() => resolve(true), 100);
    });

  return {
    timeoutToInterval,
    wrapper,
  };
};

describe('FilterSelectList - Unit', () => {
  describe('UI State', () => {
    it('Should match elements with items in filter', () => {
      const { wrapper } = makeSut();

      expect(wrapper.findComponent({ name: 'Input' }).exists()).toBe(false);
      expect(wrapper.findAllComponents(Checkbox).length).toBe(2);
      expect(wrapper.find('.list').text()).toContain('Teste01');
      expect(wrapper.find('.list').text()).toContain('Teste02');
    });

    it('Should match elements with scrolling in list items', async () => {
      const { wrapper, timeoutToInterval } = makeSut({
        customComputed: {
          filterSelectlist: () => ({
            scrollHeight: 100,
            clientHeight: 50,
          }),
        },
      });

      await timeoutToInterval();

      expect(wrapper.findComponent(Input).exists()).toBe(true);
      expect(wrapper.findAllComponents(Checkbox).length).toBe(2);
      expect(wrapper.find('.list').text()).toContain('Teste01');
      expect(wrapper.find('.list').text()).toContain('Teste02');
    });
    it('Should match elements with empty items', () => {
      const { wrapper } = makeSut({
        customProps: {
          filter: {
            items: [],
          },
        },
      });

      expect(wrapper.findComponent({ name: 'Input' }).exists()).toBe(false);
      expect(wrapper.findAllComponents(Checkbox).length).toBe(0);
    });
  });

  describe('Behaviors', () => {
    it('clicks on select item in list', async () => {
      const { wrapper } = makeSut();
      jest.spyOn(wrapper, 'emitted');

      wrapper.find('.list-item').trigger('click');

      await wrapper.vm.$nextTick();

      expect(Object.keys(wrapper.emitted())).toHaveLength(2);
      expect(wrapper.emitted('input')[0][0]).toEqual([1]);
      expect(wrapper.emitted('change')[0][0]).toEqual([1]);
    });

    it('filters items with input text on search input', async () => {
      const { wrapper, timeoutToInterval } = makeSut({
        customComputed: {
          filterSelectlist: () => ({
            scrollHeight: 100,
            clientHeight: 50,
          }),
        },
      });

      expect(wrapper.find('.list').text()).toContain('Teste01');
      expect(wrapper.find('.list').text()).toContain('Teste02');

      await timeoutToInterval();

      wrapper.findComponent(Input).vm.$emit('update:modelValue', '01');

      await wrapper.vm.$nextTick();

      expect(wrapper.find('.list').text()).toContain('Teste01');
      expect(wrapper.find('.list').text()).not.toContain('Teste02');
    });
  });
});
