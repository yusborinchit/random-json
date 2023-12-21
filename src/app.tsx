import { useState, type FormEvent } from "react";
import Header from "./components/header";
import JsonForm from "./components/json-form";
import JsonResult from "./components/json-result";
import { type Field, type FieldType, type IdType, type Json } from "./types";
import { getData } from "./utils/get-data";

const DEFAULT_JSON: Json[] = [{ id: crypto.randomUUID() }];

const DEFAULT_FIELD: Field = {
  id: crypto.randomUUID(),
  name: "id",
  type: "Uuid",
};

export default function App() {
  const [fields, setFields] = useState<Field[]>([DEFAULT_FIELD]);
  const [json, setJson] = useState<Json[]>(DEFAULT_JSON);

  const handleGenerateJson = (event: FormEvent<HTMLFormElement>) => {
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

  const handleChangeName = (id: IdType, name: string) => {
    const draft = [...fields];

    const index = draft.findIndex((field) => field.id === id);
    draft[index] = { ...draft[index], name };

    setFields(draft);
  };

  const handleChangeType = (id: IdType, type: FieldType) => {
    const draft = [...fields];

    const index = draft.findIndex((field) => field.id === id);
    draft[index] = { ...draft[index], type };

    setFields(draft);
  };

  const handleAddField = () => {
    setFields((oldFields) => [
      ...oldFields,
      { ...DEFAULT_FIELD, id: crypto.randomUUID() },
    ]);
  };

  return (
    <>
      <Header />
      <main className="flex flex-col max-w-xl gap-8 p-4 mx-auto">
        <section className="flex flex-col gap-2">
          <h2 className="text-xs text-zinc-400">Your input:</h2>
          <JsonForm
            fields={fields}
            handleGenerateJson={handleGenerateJson}
            handleChangeName={handleChangeName}
            handleChangeType={handleChangeType}
            handleAddField={handleAddField}
          />
        </section>
        <section className="flex flex-col gap-2">
          <h2 className="text-xs text-zinc-400">Your output:</h2>
          <JsonResult json={json} />
        </section>
      </main>
    </>
  );
}
