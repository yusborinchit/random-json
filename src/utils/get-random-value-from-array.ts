import { getRandomNumber } from "./get-random-number";

export function getRandomValueFromArray<T>(array: T[]) {
  const index = getRandomNumber(0, array.length);
  return array[index];
}
