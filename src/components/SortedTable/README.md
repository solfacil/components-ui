**Demo**

```js
<SortedTable :fields="titleTHead" order-by="asc" last-right @sort="sortBy">
  //optional
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
```

**example fields**

```js
fields: [
  { key: 'nome_cliente', title: 'Nome do cliente', sortable: true,  },
  { key: 'valor_financiado', title: 'Valor financiado', sortable: true },
  {
    key: 'valor_bruto',
    title: 'Valor bruto',
    sortable: true,
    disabled: disabled, // disabled col
    tooltip: {
      position: 'left',
      message: 'Produção do sistema sobre a produção estimada',
    },
  },
  { key: 'valor_aquisicao', title: 'Valor de aquisição', sortable: true },
],
```
