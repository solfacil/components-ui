import Vue from 'vue';

Vue.filter('currency', (value) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value);
});

Vue.filter('date', (value, hours) => {
  const data = new Date(value);
  const options = {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    hour12: false,
    timeZone: 'America/Sao_Paulo',
  };

  if (hours) return new Intl.DateTimeFormat('pt-BR', options).format(data);

  return new Intl.DateTimeFormat('pt-BR', {
    timeZone: 'America/Sao_Paulo',
  }).format(data);
});
