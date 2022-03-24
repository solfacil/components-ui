**Demo**

```html
<search-filter
  id="search"
  v-model="search"
  :fields="[{ name: 'Teste', value: 'FIELD' }]"
  placeholder="Busque por"
  @change="changeFunction"
  @input="inputFunction"
/>
```
