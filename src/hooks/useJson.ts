import { useState, type FormEvent } from "react";
import { type Field, type Json } from "../types";
import { useFields } from "./useFields";

export function useJson({
  defaultFields,
  defaultJson,
}: {
  defaultFields: Field[];
  defaultJson: Json[];
}) {
  const [json, setJson] = useState<Json[]>(defaultJson);
  const { fields, addField, changeFieldName, changeFieldType } = useFields({
    defaultFields,
  });

  const generateJson = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const amount = formData.get("amount") as string;

    const fieldsMap = new Map<string, number>();
    fields.forEach((field) => {
      const currentKey = fieldsMap.get(field.name);
      if (!currentKey) fieldsMap.set(field.name, 1);
      else fieldsMap.set(field.name, currentKey + 1);
    });

    const hasDuplicated = Array.from(fieldsMap).some(([_, count]) => count > 1);
    if (hasDuplicated) {
      alert("Please remove duplicated keys");
      return;
    }

    const newJson: Json[] = Array.from({ length: +amount }).map((_, index) => {
      const aux: Json = {};
      fields.forEach((field) => {
        aux[field.name] = field.type === "Index" ? index : getData(field.type);
      });
      return aux;
    });

    setJson(newJson);
  };

  return {
    fieldsHooks: {
      fields,
      addField,
      changeFieldName,
      changeFieldType,
    },
    jsonHooks: {
      json,
      generateJson,
    },
  };
}
