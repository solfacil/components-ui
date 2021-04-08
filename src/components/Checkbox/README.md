**Demo**

```html
<Checkbox
  v-model="checkValue"
  label="This checkbox has a label"
  text="this is some text"
  name="e"
  :invalid="!checkValue"
  error-msg="This value must be true"
/>
```

| Prop name | Type      | Required | Default | info                                               |
| --------- | --------- | -------- | ------- | -------------------------------------------------- |
| value     | `Boolean` | `false`  | `false` | control checkbox value (use `v-model`)             |
| text      | `String`  | `false`  | `''`    | text beside checkbox                               |
| label     | `String`  | `false`  | `''`    | label above checkbox                               |
| disabled  | `Boolean` | `false`  | `false` | disable checkbox                                   |
| invalid   | `Boolean` | `false`  | `false` | tag for input error                                |
| error-msg | `String`  | `false`  | `''`    | error message that only shows when `invalid: true` |
| id        | `String`  | `false`  | `''`    | custom input id                                    |
| name      | `String`  | `false`  | `''`    | name for the underlying input node                 |
| rtl       | `Boolean` | `false`  | `false` | change to a rtl interface (text before checkbox)   |
