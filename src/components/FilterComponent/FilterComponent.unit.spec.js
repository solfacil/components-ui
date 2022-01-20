import { shallowMount } from '@vue/test-utils';
import FilterSelectList from './FilterSelectList/FilterSelectList.vue';
import Button from '@components/Button/Button.vue';
import Input from '@components/Input/Input.vue';

const makeSut = ({ customProps = {}, customComputed = {} } = {}) => {
  jest.doMock('vue-slider-component/theme/default.css', () => {});
  const FilterComponent = require('./FilterComponent.vue').default;

  const wrapper = shallowMount(FilterComponent, {
    props: {
      id: 'filter-component',
      filters: [
        {
          name: 'Teste',
          type: 'list',
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
        {
          name: 'Custom',
          type: 'custom',
          defaultValue: '',
          component: Input,
        },
        {
          name: 'Binary',
          type: 'binary',
        },
      ],
      ...customProps,
    },
    computed: {
      isMobile: () => false,
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

describe('FilterComponent - Unit', () => {
  describe('UI State', () => {
    describe('Desktop', () => {
      it('Should match elements with item type list', () => {
        const { wrapper } = makeSut();

        expect(wrapper.findAllComponents(FilterSelectList).length).toBe(1);
        expect(wrapper.find('.dropdown-content').exists()).toBe(true);
        expect(wrapper.find('.dropdown-content-mobile').exists()).toBe(false);
        expect(wrapper.find('.dropdown-trigger').text()).toContain('Filtro');
        expect(wrapper.find('.filter-footer').text()).toContain('Limpar');
        expect(wrapper.find('.filter-footer').text()).toContain('Aplicar');
      });

      it('Should match elements with item type binary', () => {
        const { wrapper } = makeSut({
          customProps: {
            filters: [
              {
                name: 'Custom',
                type: 'binary',
              },
            ],
          },
        });

        expect(wrapper.find('.filter-select').exists()).toBe(false);
      });

      it('Should match elements with item type custom', () => {
        const { wrapper } = makeSut({
          customProps: {
            filters: [
              {
                name: 'Custom',
                type: 'custom',
                defaultValue: '',
                component: Input,
              },
            ],
          },
        });

        expect(wrapper.findAllComponents(Input).length).toBe(1);
      });
    });

    describe('Mobile', () => {
      it('Should match elements in mobile version', async () => {
        const { wrapper } = makeSut({
          customComputed: {
            isMobile: () => true,
          },
        });

        await wrapper.vm.$nextTick();

        expect(wrapper.findAllComponents(FilterSelectList).length).toBe(1);
        expect(wrapper.find('.dropdown-content-mobile').exists()).toBe(true);
        expect(wrapper.find('.dropdown-content').exists()).toBe(false);
        expect(wrapper.find('.dropdown-trigger').text()).toContain('Filtro');
        expect(wrapper.find('.filter-footer').text()).toContain('Limpar');
        expect(wrapper.find('.filter-footer').text()).toContain('Aplicar');
      });
    });
  });

  describe('Behaviors', () => {
    it('selects and apply filters', async () => {
      const { wrapper } = makeSut();
      jest.spyOn(wrapper.vm, '$emit');
      wrapper.findComponent(FilterSelectList).vm.$emit('change', [1]);

      await wrapper.vm.$nextTick();

      wrapper.findAllComponents(Button).at(1).vm.$emit('click');

      await wrapper.vm.$nextTick();

      expect(wrapper.vm.$emit).toHaveBeenCalledTimes(1);
      expect(wrapper.vm.$emit).toHaveBeenCalledWith('applyFilters', {
        Teste: [1],
        Binary: false,
        Custom: '',
      });
    });

    it('selects and clicks on reset button', async () => {
      const { wrapper } = makeSut();
      jest.spyOn(wrapper.vm, '$emit');
      wrapper.findComponent(FilterSelectList).vm.$emit('change', [1]);

      await wrapper.vm.$nextTick();

      wrapper.findAllComponents(Button).at(0).vm.$emit('click');

      await wrapper.vm.$nextTick();

      expect(wrapper.vm.$emit).toHaveBeenCalledTimes(1);
      expect(wrapper.vm.$emit).toHaveBeenCalledWith('applyFilters', {
        Teste: [],
        Binary: false,
        Custom: '',
      });
    });

    it('clicks on filter button and show filters', async () => {
      const { wrapper } = makeSut();
      jest.spyOn(wrapper.vm, '$emit');

      expect(wrapper.find('.open').exists()).toBe(false);

      wrapper.find('.dropdown-trigger').trigger('click');

      await wrapper.vm.$nextTick();

      expect(wrapper.find('.open').exists()).toBe(true);
    });
  });
});
