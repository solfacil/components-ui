import { action } from '@storybook/addon-actions';
import { ref } from 'vue';
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

const Template = (args) => ({
  components: { SortedTable },
  setup() {
    const titleTHead = ref([
      {
        key: 'nome_cliente',
        title: 'Nome do cliente',
        sortable: true,
      },
      { key: 'valor_financiado', title: 'Valor financiado', sortable: true },
      {
        key: 'valor_bruto',
        title: 'Valor bruto',
        sortable: true,
        visibled: true,
        tooltip: {
          position: 'left',
          message: 'Produção do sistema',
        },
      },
      { key: 'valor_aquisicao', title: 'Valor de aquisição', sortable: true },
    ]);
    function sortBy() {
      action('Update');
    }
    return { args, titleTHead, sortBy };
  },
  template: `
    <SortedTable v-bind="args" :fields="titleTHead" keyActive="nome_cliente" order-by="asc" @sort="sortBy" id="table-1">
      <template #thead-th>
        <th><strong>Last</strong></th>
      </template>

      <template #tbody>
        <tr role="row" class="hover">
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
});

Template.bind({});

export const Basic = Template.bind({});
