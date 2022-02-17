import Vue from 'vue';

Vue.filter('currency', (value, noSign) => {
  const formated = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value);

  if (noSign) return formated.substring(3);

  return formated;
});

Vue.filter('currencyInteger', (value, noSign, digits = 2) => {
  let val = value.toString();
  val = digits == 2 ? val : val.slice(0, -2);
  const num = [
    parseInt(val),
    val.substring(0, val.length - 2) + '.' + val.substring(val.length - 2),
  ][Number(digits === 2)];

  const formated = new Intl.NumberFormat('pt-BR', {
    style: noSign ? 'decimal' : 'currency',
    currency: 'BRL',
    minimumFractionDigits: digits,
  }).format(num);

  return formated;
});
