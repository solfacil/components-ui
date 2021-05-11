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
  </div>
</template>

<script>
export default {
  name: 'App',

  mounted() {
    console.log(this.$toaster);
    // ...
    // this.$toaster.success('Your toaster success message.');
  },
};
</script>

<style lang="scss" scoped></style>
