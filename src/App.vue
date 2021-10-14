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
    <!-- Sandbox para teste fora do ambiente do storybook -->
    <div class="sandbox">
      <Chip small label="test" />
      <Badge id="badge" variant="done" label="sample text">Sample text</Badge>
    </div>
  </div>
</template>

<script>
import Chip from '@components/Chip/Chip';
import Badge from '@components/Badge/Badge';
export default {
  name: 'App',
  components: { Chip, Badge },
};
</script>

<style lang="scss" scoped>
.sandbox {
  height: 500px;
  width: 100vw;
  display: grid;
  place-items: center;
}
</style>
