import { getRandomDate } from "../data/get-random-date";
import { getRandomEmail } from "../data/get-random-email";
import { getRandomFirstName } from "../data/get-random-first-name";
import { getRandomGender } from "../data/get-random-gender";
import { getRandomLastName } from "../data/get-random-last-name";
import { getRandomPhone } from "../data/get-random-phone";
import { type FieldType } from "../types";

const DATA_HANDLERS: { [type in FieldType]: () => string } = {
  Index: () => "ERROR",
  Uuid: () => crypto.randomUUID(),
  "First Name": () => getRandomFirstName(),
  "Last Name": () => getRandomLastName(),
  Email: () => getRandomEmail(),
  Gender: () => getRandomGender(),
  Phone: () => getRandomPhone(),
  "Date (dd/mm/yyyy)": () => getRandomDate(),
};

export function getData(type: FieldType) {
  const handler = DATA_HANDLERS[type];
  return handler();
}
