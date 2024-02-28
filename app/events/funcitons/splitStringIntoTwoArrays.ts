export function splitStringIntoTwoArrays(str: string): [string[], string[]] {
  const words = str.split(" ");
  if (words.length % 2 == 0) {
    const middleIndex = Math.floor(words.length / 2);
    const firstHalf = words.slice(0, middleIndex + 1);
    const secondHalf = words.slice(middleIndex + 1);
    return [firstHalf, secondHalf];
  } else {
    const middleIndex = Math.floor(words.length / 2);
    const firstHalf = words.slice(0, middleIndex);
    const secondHalf = words.slice(middleIndex);
    return [firstHalf, secondHalf];
  }
}
