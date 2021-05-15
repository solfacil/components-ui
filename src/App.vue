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

    <button @click="teste">teste</button>
  </div>
</template>

<script>
export default {
  name: 'App',

  mounted() {},

  methods: {
    teste() {
      this.$toaster.success('Your toaster success message.', { id: 'teste' });
      // this.$toaster.info('Your toaster info message.');
      // this.$toaster.error('Your toaster error message.');
      // this.$toaster.warning('Your toaster warning message.');
    },
  },
};
</script>

<style lang="scss" scoped></style>
