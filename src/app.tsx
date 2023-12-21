import Header from "./components/header";
import JsonForm from "./components/json-form";
import JsonResult from "./components/json-result";
import { useJson } from "./hooks/useJson";
import { type Field, type Json } from "./types";

const DEFAULT_JSON: Json[] = [{ id: crypto.randomUUID() }];

const DEFAULT_FIELDS: Field[] = [
  { id: crypto.randomUUID(), name: "id", type: "Uuid" },
];

export default function App() {
  const { fieldsHooks, jsonHooks } = useJson({
    defaultFields: DEFAULT_FIELDS,
    defaultJson: DEFAULT_JSON,
  });

  const { fields, addField, changeFieldName, changeFieldType } = fieldsHooks;
  const { json, generateJson } = jsonHooks;

  return (
    <>
      <Header />
      <main className="flex flex-col max-w-xl gap-8 p-4 mx-auto">
        <section className="flex flex-col gap-2">
          <h2 className="text-xs text-zinc-400">Your input:</h2>
          <JsonForm
            fields={fields}
            changeFieldName={changeFieldName}
            changeFieldType={changeFieldType}
            addField={addField}
            generateJson={generateJson}
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
