import { TYPES } from "./config/const";

type IdType = `${string}-${string}-${string}-${string}-${string}`;

export type FieldType = (typeof TYPES)[number];

export interface Field {
  id: IdType;
  name: string;
  type: FieldType;
}

export interface Json {
  [key: string]: unknown;
}
