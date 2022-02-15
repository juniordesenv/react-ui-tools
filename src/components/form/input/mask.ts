import IMask from 'imask';

const phone = {
  mask: [{
    mask: '(00) 0000-0000',
  }, {
    mask: '(00) 00000-0000',
  }],
  dispatch: (appended, dynamicMasked) => {
    const number = (dynamicMasked.value + appended).replace(/\D/g, '');

    if (!number) return dynamicMasked.compiledMasks[0];

    return number.length <= 10 ? dynamicMasked.currentMask : dynamicMasked.compiledMasks[1];
  },
};

const phoneDDI = {
  mask: [{
    mask: '+00 (00) 0000-0000',
  }, {
    mask: '+00 (00) 00000-0000',
  }],
  dispatch: (appended, dynamicMasked) => {
    const number = (dynamicMasked.value + appended).replace(/\D/g, '');

    if (!number) return dynamicMasked.compiledMasks[0];

    return number.length <= 12 ? dynamicMasked.currentMask : dynamicMasked.compiledMasks[1];
  },
};

const cpf = {
  mask: '000.000.000-00',
};

const cnpj = {
  mask: '00.000.000/0000-00',
};

const cpfCnpj = {
  mask: [
    cpf,
    cnpj,
  ],
  dispatch: (appended, dynamicMasked) => {
    const number = (dynamicMasked.value + appended).replace(/\D/g, '');

    return number.length <= 11 ? dynamicMasked.compiledMasks[0] : dynamicMasked.compiledMasks[1];
  },
};

const money = {
  mask: Number, // enable number mask
  scale: 2, // digits after point, 0 for integers
  signed: true, // disallow negative
  thousandsSeparator: '.', // any single char
  padFractionalZeros: true, // if true, then pads zeros at end to the length of scale
  normalizeZeros: true, // appends or removes zeros at ends
  radix: ',', // fractional delimiter
  mapToRadix: [''], // symbols to process as radix
};

const postalCode = {
  mask: '00000-000',
};

const creditCard = {
  mask: '0000 0000 0000 0000',
};

const expiryCard = {
  mask: '00/00',
  // pattern: 'm/`Y',
  // blocks: {
  //   m: {
  //     mask: IMask.MaskedRange,
  //     from: 1,
  //     to: 12,
  //     maxLength: 2,
  //   },
  //   Y: {
  //     mask: IMask.MaskedRange,
  //     from: 20,
  //     to: 99,
  //   },
  // },
};

export default {
  phone,
  cpf,
  cnpj,
  cpfCnpj,
  money,
  postalCode,
  creditCard,
  expiryCard,
  phoneDDI,
};
