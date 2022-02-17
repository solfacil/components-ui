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
    ],
  },
  {
    name: 'Scroll',
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
      {
        name: 'Teste03',
        value: 3,
      },
      {
        name: 'Teste04',
        value: 4,
      },
      {
        name: 'Teste05',
        value: 5,
      },
      {
        name: 'Teste06',
        value: 6,
      },
      {
        name: 'Teste07',
        value: 7,
      },
      {
        name: 'Teste08',
        value: 8,
      },
      {
        name: 'Teste09',
        value: 9,
      },
    ],
  },
  {
    name: 'Range',
    type: 'range',
    title: 'Modifique o minímo e máximo.',
    min: 0,
    max: 10,
    append: '(kW)',
    interval: 0.1,
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
  argTypes: {
    filters: {
      type: { name: 'array', required: true },
      defaultValue: [],
      description:
        'Array of objects with type field, supported type: `custom | range | list`. In type `custom` is necessary event `@change` implemented in custom component',
    },
  },
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
