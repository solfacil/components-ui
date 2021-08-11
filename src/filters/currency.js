import Vue from 'vue';

Vue.filter('currency', (value, noSign) => {
  const formated = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value);

  if (noSign) return formated.substring(3);

  return formated;
});
