**Demo**

```js
<Tabs
  v-model="currentTab" //optional
  :items="items"
  active="formalizacao" //optional
  @changed="getDataTab"
/>
```

**example items**
```js
items: [
  {
    name: 'upload',
    label: 'Upload de documentos',
  },
  {
    name: 'formalizacao',
    label: 'Formalização',
  },
  {
    name: 'cancelar_aprovar',
    label: 'Cancelar/Aprovar',
    disabled: true //optional
  },
],
```
