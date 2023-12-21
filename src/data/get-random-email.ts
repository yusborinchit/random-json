import { getRandomNumber } from "../utils/get-random-number";
import { getRandomValueFromArray } from "../utils/get-random-value-from-array";
import { FIRST_NAMES } from "./get-random-first-name";
import { LAST_NAMES } from "./get-random-last-name";

const DOMAINS = ["gmail.com", "yahoo.com", "hotmail.com", "outlook.com"];

export function getRandomEmail() {
  const firstName = getRandomValueFromArray(FIRST_NAMES);
  const lastName = getRandomValueFromArray(LAST_NAMES);
  const domain = getRandomValueFromArray(DOMAINS);
  const extraNumber = getRandomNumber(100, 999);

  return getRandomNumber(1, 10) <= 7
    ? `${firstName}${lastName}${extraNumber}@${domain}`
    : `${lastName}${extraNumber}${firstName}@${domain}`;
}
