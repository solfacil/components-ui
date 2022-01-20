export default {
  methods: {
    currency(value, noSign) {
      const formatted = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      }).format(value);

      if (noSign) return formatted.substring(3);

      return formatted;
    },

    currencyInteger(value, noSign, digits = 2) {
      let val = value.toString();
      val = digits == 2 ? val : val.slice(0, -2);
      const num = [
        parseInt(val),
        val.substring(0, val.length - 2) + '.' + val.substring(val.length - 2),
      ][Number(digits === 2)];

      const formatted = new Intl.NumberFormat('pt-BR', {
        style: noSign ? 'decimal' : 'currency',
        currency: 'BRL',
        minimumFractionDigits: digits,
      }).format(num);

      return formatted;
    },
  },
};
