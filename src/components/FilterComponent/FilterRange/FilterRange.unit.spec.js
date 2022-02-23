import { mount } from '@vue/test-utils';

const makeSut = ({ customProps = {}, customFilterProps = {} } = {}) => {
  jest.doMock('vue-slider-component/theme/default.css', () => {});
  const FilterRange = require('./FilterRange.vue').default;
  const wrapper = mount(FilterRange, {
    props: {
      id: 'filterRange',
      filter: {
        title: 'Selecione de 0 a 10',
        min: 0,
        max: 10,
        ...customFilterProps,
      },
      ...customProps,
    },
  });

  jest.spyOn(wrapper, 'emitted');

  return {
    wrapper,
  };
};

describe('FilterRange - Unit', () => {
  describe('UI State', () => {
    it('Should match elements with min 0 and max 10 and title', () => {
      const { wrapper } = makeSut();

      expect(wrapper.text()).toContain('Selecione de 0 a 10');
      expect(wrapper.findComponent({ name: 'VueSlider' }).isVisible()).toBe(
        true,
      );
      expect(wrapper.findComponent({ name: 'VueSlider' }).props('min')).toBe(0);
      expect(wrapper.findComponent({ name: 'VueSlider' }).props('max')).toBe(
        10,
      );
      expect(wrapper.findAll('.interval span').at(0).text()).toBe('0');
      expect(wrapper.findAll('.interval span').at(1).text()).toBe('10');
    });

    it('Should match elements with min 0 and max 10 and empty title', async () => {
      const { wrapper } = makeSut({
        customFilterProps: {
          title: '',
        },
      });

      expect(wrapper.text()).not.toContain('Selecione de 0 a 10');
      expect(wrapper.findComponent({ name: 'VueSlider' }).exists()).toBe(true);
      expect(wrapper.findComponent({ name: 'VueSlider' }).props('min')).toBe(0);
      expect(wrapper.findComponent({ name: 'VueSlider' }).props('max')).toBe(
        10,
      );
      expect(wrapper.findAll('.interval span').at(0).text()).toBe('0');
      expect(wrapper.findAll('.interval span').at(1).text()).toBe('10');
    });
  });

  describe('Behaviors', () => {
    it('changes value in slider', async () => {
      const { wrapper } = makeSut();

      wrapper.findComponent({ name: 'VueSlider' }).vm.$emit('change', [2, 5]);
      wrapper.findComponent({ name: 'VueSlider' }).vm.$emit('input', [2, 5]);

      await wrapper.vm.$nextTick();

      expect(Object.values(wrapper.emitted())).toHaveLength(2);
      expect(wrapper.emitted('input')[0][0]).toEqual([2, 5]);
      expect(wrapper.emitted('change')[0][0]).toEqual([2, 5]);
    });
  });
});
