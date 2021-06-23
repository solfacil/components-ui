<template>
  <div :id="id" ref="bar" class="chart-bar">
    <Bar />

    <div class="flex justify-between mt-6">
      <ul class="legend">
        <li class="online">Online</li>
        <li class="offline">Offline</li>
        <li class="disconnected">Desconectado na rede</li>
        <li class="production">Produção estimada</li>
      </ul>

      <span class="print" @click="print">Salvar imagem</span>
    </div>
  </div>
</template>

<script>
import Bar from './Bar';
import html2canvas from 'html2canvas';

export default {
  name: 'ChartBar',

  components: {
    Bar,
  },

  props: {
    /** Specify a custom id */
    id: {
      type: String,
      required: true,
    },
  },

  methods: {
    print() {
      html2canvas(this.$refs.bar).then(function (canvas) {
        console.log(canvas);
        var link = document.createElement('a');
        link.href = canvas.toDataURL('image/jpeg');
        link.download = 'producao-mes.jpeg';
        link.click();
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.chart-bar {
  width: 1000px;
  padding: 20px;
}
@import '@scss/_bar';
</style>
