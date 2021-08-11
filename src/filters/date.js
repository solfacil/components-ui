import Vue from 'vue';

export default Vue.filter('date', (value, variant) => {
  const data = new Date(value);

  const options = {
    year: ['dateTime', null].includes(variant) ? 'numeric' : undefined,
    month: ['dateTime', null].includes(variant) ? 'numeric' : undefined,
    day: ['dateTime', null].includes(variant) ? 'numeric' : undefined,
    hour: ['dateTime', 'timeOnly', 'fullTime'].includes(variant)
      ? 'numeric'
      : undefined,
    minute: ['dateTime', 'timeOnly', 'fullTime'].includes(variant)
      ? 'numeric'
      : undefined,
    second: ['dateTime', 'fullTime'].includes(variant) ? 'numeric' : undefined,
    hour12: false,
    timeZone: 'America/Sao_Paulo',
  };

  return new Intl.DateTimeFormat('pt-BR', options).format(data);
});
