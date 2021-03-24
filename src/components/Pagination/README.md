**Demo**

```html
<Pagination
  :data="paginator"
  align-right
  @clickHandler="triggerFunction"
  page-size="5"
/>
```

| Prop name   | Type                | Required | Default |
| ----------- | ------------------- | -------- | ------- |
| data        | `Object<Paginator>` | `true`   | ---     |
| align-right | `Boolean`           | `false`  | `false` |
| page-size   | `Number`            | `false`  | `10`    |
| id          | `String`            | `false`  | `''`    |

**Return object afterCursor or beforeCursor - @clickHandler**

```js
{
  afterCursor: 'g3QAAAACZAAQZmluYW5jaWFtZW50b19pZGQAA25pbGQAAmlkZAADbmls';
}
```
