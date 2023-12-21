import { useState, type FormEvent } from "react";
import { INDEX_TYPE } from "../config/const";
import { type Field, type Json } from "../types";
import { getData } from "../utils/get-data";
import { useFields } from "./useFields";

export function useJson({
  defaultFields,
  defaultJson,
}: {
  defaultFields: Field[];
  defaultJson: Json[];
}) {
  const [json, setJson] = useState<Json[]>(defaultJson);
  const { fields, addField, removeField, changeFieldName, changeFieldType } =
    useFields({ defaultFields });

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

    const emptyArray = Array.from({ length: +amount });
    const newJson = emptyArray.map((_, idx) =>
      fields.reduce(
        (acc, { name, type }) => ({
          ...acc,
          [name]: type === INDEX_TYPE ? idx : getData(type),
        }),
        {}
      )
    );

    setJson(newJson);
  };

  const copyJsonToClipboard = () => {
    navigator.clipboard.writeText(JSON.stringify(json, null, 4));
  };

  return {
    fieldsHooks: {
      fields,
      addField,
      removeField,
      changeFieldName,
      changeFieldType,
    },
    jsonHooks: {
      json,
      generateJson,
      copyJsonToClipboard,
    },
  };
}
