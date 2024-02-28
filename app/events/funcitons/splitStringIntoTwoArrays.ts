export function splitStringIntoTwoArrays(str: string): [string[], string[]] {
  const words = str.split(" ");
  const middleIndex = Math.floor(words.length / 2);
  console.log(middleIndex);
  const firstHalf = words.slice(0, middleIndex);
  const secondHalf = words.slice(middleIndex);
  return [firstHalf, secondHalf];
}
