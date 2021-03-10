<p align="center">
  <br /><br/>
  <img src="https://raw.githubusercontent.com/solfacil/components-ui/main/public/logo-solfacil-color.svg" />
  <br /><br/>
</p>

Component library based on Vue and Tailwind

## Documentation

For full documentation, visit [Documentation](#).

## Quick start

### 1 Install npm

```bash
npm install @solfacil/components-ui
```

or yarn

```bash
yarn add @solfacil/components-ui
```

### 2 Import and use @solfacil/components-ui

```javascript
import { Button, RadioButton, ToggleSwitch } from '@solfacil/components-ui';

export default {
  components: {
    Button,
    RadioButton,
    ToggleSwitch,
  },
};
```

### 3 Import style Sass

Include pattern based on style guide and tailwind styles

```css
@import '~@solfacil/components-ui/src/assets/scss/core';
```

Or all styles

```css
@import '~@solfacil/components-ui/src/assets/scss/solfacil';
```

Optional / style component

```css
@import '~@solfacil/components-ui/src/assets/scss/buttons';
@import '~@solfacil/components-ui/src/assets/scss/radio-button';
```

## License <a href="https://opensource.org/licenses/MIT"><img src="https://img.shields.io/npm/l/buefy.svg?logo=github" /></a>

Released under the MIT [License](https://opensource.org/licenses/MIT). Copyright (c) Solfácil.
