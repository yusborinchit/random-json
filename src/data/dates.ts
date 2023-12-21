import { getRandomNumber } from "../utils/get-random-number";

export function getRandomDate() {
  const startTime = new Date(1980, 0, 1).getTime();
  const endTime = new Date(2040, 0, 1).getTime();

  const time = getRandomNumber(startTime, endTime);
  const date = new Date(time).toLocaleDateString("es-UY");

  return date;
}
