<template>
  <div>
    <header class="bg-gray7 px-4">
      <div class="container flex items-center justify-center py-11">
        <img
          :src="require('@/assets/img/logo-solfacil-white.png')"
          class="w-32 h-8 w-auto"
          alt="Solfácil"
        />
      </div>
    </header>

    <section class="py-10">
      <div class="container">
        <div class="grid grid-cols-3 gap-8">
          <div class="p-6 bg-gray1 rounded shadow-sm">
            <h3 class="mb-2">Buttom</h3>
            <Button>Button</Button>
          </div>

          <div class="p-6 bg-gray1 rounded-lg shadow-sm">
            <h3 class="mb-2">RadioButton</h3>
            <RadioButton label="label" name="test" val="name" :checked="true" />
          </div>

          <div class="p-6 bg-gray1 rounded-lg shadow-sm">
            <h3 class="mb-2">Switch</h3>
            <ToggleSwitch label="label" :checked="true" />
          </div>
        </div>

        <div class="mt-6">
          <div class="p-6 bg-gray1 rounded shadow-sm">
            <h3 class="mb-2">SortedTable</h3>

            <SortedTable
              :fields="fields"
              order-by="asc"
              last-right
              @sort="teste"
            >
              <template #thead-th>
                <th><strong>teste</strong></th>
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
            </SortedTable>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { Button, RadioButton, ToggleSwitch, SortedTable } from './index';

export default {
  name: 'App',

  components: {
    Button,
    RadioButton,
    ToggleSwitch,
    SortedTable,
  },

  data() {
    return {
      fields: [
        { key: 'nome_cliente', title: 'Nome do cliente', sortable: true },
        { key: 'valor_financiado', title: 'Valor financiado', sortable: true },
        { key: 'valor_bruto', title: 'Valor bruto' },
        { key: 'valor_aquisicao', title: 'Valor de aquisição', sortable: true },
      ],
    };
  },

  methods: {
    teste(key) {
      console.log(key);
    },
  },
};
</script>

<style lang="scss" scoped></style>
