import { getRandomValueFromArray } from "../utils/get-random-value-from-array";

const GENDERS = ["Femenino", "Masculino", "Otro"];

export function getRandomGender() {
  return getRandomValueFromArray(GENDERS);
}
