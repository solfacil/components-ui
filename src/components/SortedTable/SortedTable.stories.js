import { action } from '@storybook/addon-actions';
import SortedTable from './SortedTable.vue';

export default {
  title: 'Components/UI Elements/SortedTable',
  component: SortedTable,
  argTypes: {},

  parameters: {
    componentSubtitle:
      'Tables are used to make large volumes of data easy to understand and to access.',
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { SortedTable },
  template: `
    <SortedTable v-bind="$props" :fields="titleTHead" order-by="asc" @sort="sortBy" id="table-1">
      <template #thead-th>
        <th><strong>Last</strong></th>
      </template>

      <template #tbody>
        <tr role="row">
          <td role="cell">teste</td>
          <td role="cell">teste</td>
          <td role="cell">teste</td>
          <td role="cell">teste</td>
          <td role="cell">teste</td>
        </tr>

        <tr role="row">
          <td role="cell">teste</td>
          <td role="cell">teste</td>
          <td role="cell">teste</td>
          <td role="cell">teste</td>
          <td role="cell">teste</td>
        </tr>
      </template>
    </SortedTable>`,
  data() {
    return {
      titleTHead: [
        { key: 'nome_cliente', title: 'Nome do cliente', sortable: true },
        { key: 'valor_financiado', title: 'Valor financiado', sortable: true },
        { key: 'valor_bruto', title: 'Valor bruto' },
        { key: 'valor_aquisicao', title: 'Valor de aquisição', sortable: true },
      ],
    };
  },
  methods: {
    sortBy: action('Update'),
  },
});

Template.bind({});

export const Basic = Template.bind({});
