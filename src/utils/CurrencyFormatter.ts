/* eslint-disable @typescript-eslint/no-unused-vars */
const defaultOptions = {
  significantDigits: 0,
  thousandsSeparator: '.',
  decimalSeparator: ',',
  symbol: '$',
};

export const currencyFormatter = (value: any, options: any) => {
  if (typeof value !== 'number') value = 0.0;
  options = {...defaultOptions, ...options};
  value = value.toFixed(options.significantDigits);

  const [currency, decimal] = value.split('.');
  return `${options.symbol} ${currency.replace(
    /\B(?=(\d{3})+(?!\d))/g,
    options.thousandsSeparator,
  )}`;
};
