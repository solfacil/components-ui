export default {
  hasTwoWordsOrMore: (value) => /^[A-zÀ-ú]+(\s[A-zÀ-ú]+){1,}$/.test(value),
  hasNumber: (value) => /^([^0-9]*)$/.test(value),
  hasAtLeastOneNumber: (value) => /\d+/.test(value),
  emailSolfacil: (condition) => (value) => {
    return [
      /\w+([.-]?\w+)*@solfacil.com.br/.test(value),
      /\w+([.-]?\w+)*@example.com/.test(value),
    ][Number(condition === 'development')];
  },
  emailHasBrDomain: (condition) => (value) => {
    return [/.br$/.test(value), true][Number(condition === 'development')];
  },
  cpf: (value) => /^\d{3}\.\d{3}\.\d{3}\55\d{2}$/.test(value),
  cnpj: (value) => /^\d{2}\.\d{3}\.\d{3}\/\d{4}\55\d{2}$/.test(value),
  cpf_or_cnpj: (value) =>
    /(^\d{3}\.\d{3}\.\d{3}\55\d{2}$)|(^\d{2}\.\d{3}\.\d{3}\/\d{4}\55\d{2}$)/.test(
      value,
    ),
  phone: (value) => /\+\d{2} \(\d{2}\) \d{4,5}-\d{4}/.test(value),
  hasLetters: (value) => /^([^a-zA-Z]*)$/.test(value),
  hasAtLeastOneUpperCase: (value) => /[A-Z]+/.test(value),
  hasAtLeastOneLowerCase: (value) => /[a-z]+/.test(value),
  hasAtLeastOneSymbol: (value) => /[!@#$%^&*)(+=._-]+/.test(value),
};
