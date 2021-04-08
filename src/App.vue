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
        <div class="p-6 bg-gray1 rounded shadow-sm">
          <h3 class="mb-2">Alert</h3>

          <hr class="my-4" />

          <div class="grid grid-cols-2 gap-4">
            <Alert variant="success" close icon-number="22">Success</Alert>
            <Alert variant="error" icon close>Error</Alert>
            <Alert variant="warning" icon>Warning</Alert>
            <Alert variant="info" close>Info</Alert>
            <Alert icon>Default</Alert>
            <Alert variant="info-line" icon close count="22">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
              orci mi, porttitor nec orci eu, tristique feugiat sapien.
            </Alert>

            <div class="flex flex-col">
              <Alert variant="success" size="md">Success - MD</Alert>
            </div>

            <div class="flex flex-col">
              <Alert variant="error" size="lg">Error - LG</Alert>
            </div>

            <div class="flex flex-col">
              <Alert variant="warning" size="xl" icon>Warning - XL</Alert>
            </div>
          </div>
        </div>

        <div class="grid grid-cols-3 gap-8 mt-8">
          <div class="p-6 bg-gray1 rounded shadow-sm">
            <h3 class="mb-2">Buttom</h3>

            <hr class="my-4" />

            <div class="grid grid-cols-2 gap-2">
              <Button>Button</Button>
              <Button disabled>Button</Button>
              <Button variant="secondary">Button</Button>
              <Button variant="secondary" disabled>Button</Button>
              <Button variant="exception">Button</Button>
              <Button variant="exception" disabled>Button</Button>
            </div>
          </div>

          <div class="p-6 bg-gray1 rounded-lg shadow-sm">
            <h3 class="mb-2">RadioButton</h3>

            <hr class="my-4" />

            <RadioButton
              v-model="radio"
              label="label"
              name="test"
              val="teste"
            />
          </div>

          <div class="p-6 bg-gray1 rounded-lg shadow-sm">
            <h3 class="mb-2">Checkbox</h3>

            {{ check }}

            <hr class="my-4" />
            <div class="flex gap-3 flex-col">
              <div class="border rounded p-2 border-gray3">
                <Checkbox
                  v-model="check"
                  label="This checkbox has a label"
                  text="this is some text"
                  name="e"
                />
              </div>
              <div class="border rounded p-2 border-gray3">
                <Checkbox
                  v-model="check"
                  text="This is a disabled checkbox"
                  disabled
                  value="b"
                  name="e"
                />
              </div>
              <div class="border rounded p-2 border-gray3">
                <Checkbox
                  v-model="check"
                  label="This checkbox has a label"
                  text="this is some text"
                  name="e"
                  :invalid="!check"
                  error-msg="This value must be true"
                />
              </div>
              <div class="border rounded p-2 border-gray3">
                <Checkbox
                  v-model="check"
                  text="This is a rtl checkbox"
                  value="b"
                  name="e"
                  rtl
                />
              </div>
            </div>
          </div>

          <div class="p-6 bg-gray1 rounded-lg shadow-sm">
            <h3 class="mb-2">Switch</h3>

            <hr class="my-4" />

            <ToggleSwitch v-model="valSwitch" label="label" :checked="true" />
          </div>

          <div class="p-6 bg-gray1 rounded-lg shadow-sm">
            <h3 class="mb-2">Input search</h3>

            <hr class="my-4" />

            <Input
              id="search"
              v-model="search"
              type="search"
              name="search"
              placeholder="busca"
              @clear="clearData"
              @eventHandler="teste"
            />
          </div>

          <div class="p-6 bg-gray1 rounded-lg shadow-sm">
            <h3 class="mb-2">Popover</h3>

            <hr class="my-4" />

            <Popover title="Teste de titulo">
              <Button>Hover Popover</Button>

              <template slot="popover">
                Vivamus sagittis lacus vel augue laoreet rutrum faucibus.
              </template>
            </Popover>
          </div>
        </div>

        <div class="mt-8">
          <div class="p-6 bg-gray1 rounded shadow-sm">
            <h3 class="mb-2">Tabs</h3>

            <hr class="my-4" />

            <Tabs
              v-model="currentTab"
              :items="items"
              active="cancelar_aprovar"
              @changed="getDataTab"
            />
          </div>
        </div>

        <div class="mt-8">
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

            <Pagination :data="paginator" align-right @clickHandler="teste" />
          </div>
        </div>

        <div class="mt-8">
          <h1 class="text-large">Badge</h1>
          <h3 class="text-medium mt-3">Rounded</h3>
        </div>

        <div class="grid grid-cols-3 gap-8 mt-4">
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
        </div>
      </div>
      <div class="container mt-5">
        <div class="p-6 bg-gray1 rounded shadow-sm">
          <h3 class="mb-2">List</h3>
          <hr class="my-4" />
          <List :items-list="itemsList" />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import {
  Alert,
  Badge,
  Button,
  Checkbox,
  Input,
  Pagination,
  Popover,
  RadioButton,
  SortedTable,
  Tabs,
  ToggleSwitch,
  List,
} from './index';

export default {
  name: 'App',

  components: {
    Alert,
    Badge,
    Button,
    Checkbox,
    Input,
    Pagination,
    Popover,
    RadioButton,
    SortedTable,
    Tabs,
    ToggleSwitch,
    List,
  },

  data() {
    return {
      valSwitch: null,
      radio: null,
      check: null,
      search: null,
      page: 1,
      fields: [
        { key: 'nome_cliente', title: 'Nome do cliente', sortable: true },
        { key: 'valor_financiado', title: 'Valor financiado', sortable: true },
        { key: 'valor_bruto', title: 'Valor bruto' },
        { key: 'valor_aquisicao', title: 'Valor de aquisição', sortable: true },
      ],
      currentTab: null,
      items: [
        {
          name: 'upload',
          label: 'Upload de documentos',
          disabled: true,
        },
        {
          name: 'formalizacao',
          label: 'Formalização',
        },
        {
          name: 'cancelar_aprovar',
          label: 'Cancelar/Aprovar',
        },
      ],
      itemsList: [
        {
          title: 'Lorem ipsum dolor',
          description: 'Vivamus luctus ipsum sed sapien tristique',
        },
        {
          title: 'Lorem ipsum dolor',
          description: 'Vivamus luctus ipsum sed sapien tristique',
        },
        {
          title: 'Lorem ipsum dolor',
          description: 'Vivamus luctus ipsum sed sapien tristique',
        },
      ],

      paginator: {
        afterCursor: 'g3QAAAACZAAQZmluYW5jaWFtZW50b19pZGQAA25pbGQAAmlkZAADbmls',
        beforeCursor:
          'g3QAAAACZAAQZmluYW5jaWFtZW50b19pZGQAA25pbGQAAmlkZAADbmls',
        count: 31,
        size: 10,
      },
    };
  },

  methods: {
    teste(key) {
      console.log(key);
    },

    clearData() {
      console.log('reset');
    },

    getDataTab(tab) {
      console.log(tab);
    },
  },
};
</script>

<style lang="scss" scoped></style>
