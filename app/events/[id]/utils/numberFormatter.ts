export function numberFormatter(number: number): string {
  const length = number.toString().length;
  if (length > 3) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  return number.toString();
}
