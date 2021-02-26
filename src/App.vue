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

            <hr class="my-4" />

            <Button>Button</Button>
          </div>

          <div class="p-6 bg-gray1 rounded-lg shadow-sm">
            <h3 class="mb-2">RadioButton</h3>

            <hr class="my-4" />

            <RadioButton label="label" name="test" val="name" :checked="true" />
          </div>

          <div class="p-6 bg-gray1 rounded-lg shadow-sm">
            <h3 class="mb-2">Switch</h3>

            <hr class="my-4" />

            <ToggleSwitch label="label" :checked="true" />
          </div>
        </div>

        <div class="mt-6">
          <div class="p-6 bg-gray1 rounded shadow-sm">
            <h3 class="mb-2">SortedTable</h3>

            <hr class="my-4" />

            <SortedTable
              :fields="fields"
              order-by="asc"
              last-right
              class="mb-3"
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

            <Pagination
              v-model="page"
              :page-count="10"
              :items-count="440"
              align-right
              @clickHandler="teste"
            />
          </div>
        </div>

        <div class="mt-8">
          <h1 class="text-large">Badge</h1>
          <h3 class="text-medium mt-3">Rounded</h3>
        </div>

        <div class="grid grid-cols-3 gap-8 mt-6">
          <div class="p-6 bg-gray1 rounded shadow-sm">
            <h3 class="mb-2">Done</h3>

            <hr class="my-4" />

            <div class="flex justify-around">
              <Badge variant="done">Concluido</Badge>
              <Badge hidden-icon variant="done">Concluido</Badge>
            </div>
          </div>

          <div class="p-6 bg-gray1 rounded-lg shadow-sm">
            <h3 class="mb-2">Denied</h3>

            <hr class="my-4" />

            <div class="flex justify-around">
              <Badge variant="denied">REPROVADO</Badge>
              <Badge hidden-icon variant="denied">REPROVADO</Badge>
            </div>
          </div>

          <div class="p-6 bg-gray1 rounded-lg shadow-sm">
            <h3 class="mb-2">Review</h3>

            <hr class="my-4" />

            <div class="flex justify-around">
              <Badge variant="review">Em análise</Badge>
              <Badge hidden-icon variant="review">Em análise</Badge>
            </div>
          </div>

          <div class="p-6 bg-gray1 rounded shadow-sm">
            <h3 class="mb-2">In Progress</h3>

            <hr class="my-4" />

            <div class="flex justify-around">
              <Badge variant="in-progress">Em andamento</Badge>
              <Badge hidden-icon variant="in-progress">Em andamento</Badge>
            </div>
          </div>

          <div class="p-6 bg-gray1 rounded-lg shadow-sm">
            <h3 class="mb-2">Approved</h3>

            <hr class="my-4" />

            <div class="flex justify-around">
              <Badge variant="approved">Aprovado</Badge>
              <Badge hidden-icon variant="approved">Aprovado</Badge>
            </div>
          </div>

          <div class="p-6 bg-gray1 rounded-lg shadow-sm">
            <h3 class="mb-2">Message</h3>

            <hr class="my-4" />

            <div class="flex justify-around">
              <Badge variant="message">Message</Badge>
              <Badge hidden-icon variant="message">Message</Badge>
            </div>
          </div>

          <div class="p-6 bg-gray1 rounded-lg shadow-sm">
            <h3 class="mb-2">Message Line</h3>

            <hr class="my-4" />

            <div class="flex justify-around">
              <Badge variant="message-line">Message Line</Badge>
              <Badge hidden-icon variant="message-line">Message Line</Badge>
            </div>
          </div>

          <div class="p-6 bg-gray1 rounded-lg shadow-sm">
            <h3 class="mb-2">Message Line</h3>

            <hr class="my-4" />

            <Input
              id="search"
              v-model="search"
              type="search"
              name="search"
              placeholder="busca"
              @eventHandler="teste"
            />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import {
  Button,
  RadioButton,
  ToggleSwitch,
  SortedTable,
  Pagination,
  Badge,
  Input,
} from './index';

export default {
  name: 'App',

  components: {
    Button,
    RadioButton,
    ToggleSwitch,
    SortedTable,
    Pagination,
    Badge,
    Input,
  },

  data() {
    return {
      search: null,
      page: 1,
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
