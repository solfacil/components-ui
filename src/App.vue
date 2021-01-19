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
            <sol-button>Button</sol-button>
          </div>

          <div class="p-6 bg-gray1 rounded-lg shadow-sm">
            <h3 class="mb-2">RadioButton</h3>
            <SolRadioButton label="label" :checked="true" />
          </div>

          <div class="p-6 bg-gray1 rounded-lg shadow-sm">
            <h3 class="mb-2">Switch</h3>
            <SolSwitch label="label" :checked="true" />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { SolButton, SolRadioButton, SolSwitch } from './index';

export default {
  name: 'App',

  components: {
    SolButton,
    SolRadioButton,
    SolSwitch,
  },
};
</script>

<style lang="scss" scoped></style>
