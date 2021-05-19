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
      this.$toaster.$slots = '<p>xxxxxxxx</p>';
      console.log(this.$toaster.$slots);
      this.$toaster.success('Your toaster success message.', {
        id: 'teste',
        noAutoHide: true,
        position: 'top',
      });
      // this.$toaster.info('Your toaster info message.', {
      //   id: 'info',
      //   noAutoHide: true,

      // });
      // this.$toaster.error('Your toaster error message.', {
      //   id: 'error',
      //   noAutoHide: true,
      // });
      // this.$toaster.warning('Your toaster warning message.', {
      //   id: 'warning',
      //   noAutoHide: true,
      // });
    },
  },
};
</script>

<style lang="scss" scoped></style>
