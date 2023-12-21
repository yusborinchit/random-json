import { useState, type FormEvent } from "react";
import DataInput from "./components/data-input";
import { type Field, type FieldType, type IdType, type Json } from "./types";
import { getData } from "./utils/get-data";

const DEFAULT_JSON: Json = {
  id: crypto.randomUUID(),
};

const DEFAULT_FIELD: Field = {
  id: crypto.randomUUID(),
  name: "id",
  type: "Uuid",
};

export default function App() {
  const [fields, setFields] = useState<Field[]>([DEFAULT_FIELD]);
  const [json, setJson] = useState<Json>(DEFAULT_JSON);

  const handleGenerateJSON = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

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

    const newJson: Json = {};
    fields.forEach((field, idx) => {
      newJson[field.name] = field.type === "Index" ? idx : getData(field.type);
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
      <header className="max-w-xl gap-8 p-4 mx-auto">
        <h1 className="flex gap-1 font-mono text-xl font-bold">
          <span className="text-yellow-600">{"{"}</span>
          <span>Random JSON</span>
          <span className="text-yellow-600">{"}"}</span>
        </h1>
      </header>
      <main className="flex flex-col max-w-xl gap-8 p-4 mx-auto">
        <section className="flex flex-col gap-2">
          <h2 className="text-xs text-zinc-400">Your input:</h2>
          <form
            onSubmit={handleGenerateJSON}
            className="flex flex-col gap-8 p-4 border rounded bg-zinc-800 border-zinc-700"
          >
            <div className="flex flex-col gap-2">
              {fields.map((field) => (
                <DataInput
                  key={field.id}
                  id={field.id}
                  changeName={handleChangeName}
                  changeType={handleChangeType}
                  name={field.name}
                  type={field.type}
                />
              ))}
            </div>
            <div className="flex gap-2 text-sm">
              <button
                type="button"
                onClick={handleAddField}
                className="grid px-4 py-2 bg-yellow-600 rounded place-items-center w-fit"
              >
                + Add field
              </button>
              <button
                type="submit"
                className="p-2 underline w-fit"
              >
                Generate
              </button>
            </div>
          </form>
        </section>

        <section className="flex flex-col gap-2">
          <h2 className="text-xs text-zinc-400">Your output:</h2>
          <pre className="flex flex-col gap-8 p-4 border rounded bg-zinc-800 border-zinc-700">
            {JSON.stringify(json, null, 4)}
          </pre>
        </section>
      </main>
    </>
  );
}
