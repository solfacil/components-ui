import FilterComponent from './FilterComponent.vue';
import Input from '../Input/Input.vue';

const filters = [
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
    component: Input,
    defaultValue: '',
  },
  {
    name: 'Binary',
    type: 'binary',
  },
];

export default {
  title: 'Components/UI Elements/FilterComponent',
  component: FilterComponent,
  parameters: {
    componentSubtitle:
      'FilterComponent is used for filter results in data table.',
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { FilterComponent },
  template: `
    <div>
      <FilterComponent v-bind="$props"></FilterComponent>
    </div>`,
});

export const Default = Template.bind({});
Default.args = {
  id: 'filter-component',
  filters,
};
