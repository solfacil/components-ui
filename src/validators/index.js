export default {
  hasTwoWordsOrMore: (value) => /([a-zA-Z]+\s?\b){2,}/.test(value),
  hasNumber: (value) => /^([^0-9]*)$/.test(value),
  hasAtLeastOneNumber: (value) => /\d+/.test(value),
  emailSolfacil: (value) =>
    process.env.NODE_ENV === 'development'
      ? /[a-zA-Z]+@example.com/.test(value)
      : /[a-zA-Z]+@solfacil.com.br/.test(value),
  emailHasBrDomain: (value) =>
    process.env.NODE_ENV === 'development' ? true : /.br/.test(value),
  phone: (value) => /\+\d{2} \(\d{2}\) \d{4,5}-\d{4}/.test(value),
  hasLetters: (value) => /^([^a-zA-Z]*)$/.test(value),
  hasAtLeastOneUpperCase: (value) => /[A-Z]+/.test(value),
  hasAtLeastOneSymbol: (value) => /[!@#$%^&*)(+=._-]+/.test(value),
};
