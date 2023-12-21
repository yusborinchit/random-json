import { getRandomDate } from "../data/dates";
import { getRandomEmail } from "../data/emails";
import { getRandomFirstName } from "../data/first-names";
import { getRandomGender } from "../data/genders";
import { getRandomLastName } from "../data/last-names";
import { getRandomPhone } from "../data/phones";
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
