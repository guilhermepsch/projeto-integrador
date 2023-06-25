export function numberToMoneyString(num: number): string {
  return 'R$' + num.toFixed(2).replace('.', ',');
}