**Demo**

```html
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
