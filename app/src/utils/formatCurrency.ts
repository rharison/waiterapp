export function formatCurrency(value: number) {
  return new Intl.NumberFormat(
    'pt-BR',
    { style: 'currency', currency: 'BRL' }
  ).format(value/100).replace(/^(\D+)/, '$1 ').replace(/\s+/, ' ');
}

