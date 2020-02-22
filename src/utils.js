import currencyFormatter from 'currency-formatter';

const formattingOptions = {
  thousand: '.',
  precision: 0,
  decimal: ',',
};

export function unFormatNumber(inputValue) {
  return currencyFormatter.unformat(inputValue, formattingOptions);
}

export function formatNumber(amount) {
  return `${currencyFormatter.format(amount, formattingOptions)}`;
}

export function formatRupiah(amount) {
  return `Rp ${currencyFormatter.format(amount, formattingOptions)}`;
}
