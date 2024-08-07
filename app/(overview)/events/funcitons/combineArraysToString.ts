export function combineArraysToString(arrays: string[][]): string[] {
  return arrays.map((subHeader) => subHeader.join(" "));
}
