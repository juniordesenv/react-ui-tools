export const numberToMoneyBr = (value: number, hideSymbol?: boolean): string => {
  const formatter = new Intl.NumberFormat('pt-br', {
    style: 'currency',
    currency: 'BRL',
  });
  return hideSymbol ? formatter.format(value).replace('R$', '').trim() : formatter.format(value);
};
