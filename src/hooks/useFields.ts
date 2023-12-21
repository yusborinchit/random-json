import { useState } from "react";
import { UUID_TYPE } from "../config/const";
import { type Field, type FieldType, type IdType } from "../types";

export function useFields({ defaultFields }: { defaultFields: Field[] }) {
  const [fields, setFields] = useState<Field[]>(defaultFields);

  const addField = () => {
    setFields((oldFields) => [
      ...oldFields,
      { id: crypto.randomUUID(), name: "id", type: UUID_TYPE },
    ]);
  };

  const removeField = (id: IdType) => {
    setFields((oldFields) => [...oldFields].filter((field) => field.id !== id));
  };

  const changeFieldName = (id: IdType, name: string) => {
    const draft = [...fields];

    const index = draft.findIndex((field) => field.id === id);
    draft[index] = { ...draft[index], name };

    setFields(draft);
  };

  const changeFieldType = (id: IdType, type: FieldType) => {
    const draft = [...fields];

    const index = draft.findIndex((field) => field.id === id);
    draft[index] = { ...draft[index], type };

    setFields(draft);
  };

  return { fields, addField, removeField, changeFieldName, changeFieldType };
}
