import {
  DATE_TYPE,
  EMAIL_TYPE,
  FIRST_NAME_TYPE,
  GENDER_TYPE,
  INDEX_TYPE,
  LAST_NAME_TYPE,
  PHONE_TYPE,
  UUID_TYPE,
} from "../config/const";
import { getRandomDate } from "../data/dates";
import { getRandomEmail } from "../data/emails";
import { getRandomFirstName } from "../data/first-names";
import { getRandomGender } from "../data/genders";
import { getRandomLastName } from "../data/last-names";
import { getRandomPhone } from "../data/phones";
import { type FieldType } from "../types";

const dataHandlers: { [type in FieldType]: () => string } = {
  [INDEX_TYPE]: () => "ERROR",
  [UUID_TYPE]: () => crypto.randomUUID(),
  [FIRST_NAME_TYPE]: () => getRandomFirstName(),
  [LAST_NAME_TYPE]: () => getRandomLastName(),
  [EMAIL_TYPE]: () => getRandomEmail(),
  [GENDER_TYPE]: () => getRandomGender(),
  [PHONE_TYPE]: () => getRandomPhone(),
  [DATE_TYPE]: () => getRandomDate(),
};

export function getData(type: FieldType) {
  const handler = dataHandlers[type];
  return handler();
}
