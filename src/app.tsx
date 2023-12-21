import Header from "./components/header";
import JsonForm from "./components/json-form";
import JsonResult from "./components/json-result";
import { FIRST_NAME_TYPE, LAST_NAME_TYPE, UUID_TYPE } from "./config/const";
import { useJson } from "./hooks/useJson";

const DEFAULT_JSON = [
  { id: crypto.randomUUID(), firstName: "Santiago", lastName: "Garcia" },
];

const DEFAULT_FIELDS = [
  { id: crypto.randomUUID(), name: "id", type: UUID_TYPE },
  { id: crypto.randomUUID(), name: "firstName", type: FIRST_NAME_TYPE },
  { id: crypto.randomUUID(), name: "lastName", type: LAST_NAME_TYPE },
];

export default function App() {
  const { fieldsHooks, jsonHooks } = useJson({
    defaultFields: DEFAULT_FIELDS,
    defaultJson: DEFAULT_JSON,
  });
  ``;

  const { fields, addField, removeField, changeFieldName, changeFieldType } =
    fieldsHooks;
  const { json, generateJson, copyJsonToClipboard } = jsonHooks;

  return (
    <>
      <Header />
      <main className="flex flex-col max-w-xl gap-8 p-4 mx-auto">
        <section className="flex flex-col gap-2">
          <h2 className="text-xs text-zinc-400">Your input:</h2>
          <JsonForm
            fields={fields}
            addField={addField}
            removeField={removeField}
            changeFieldName={changeFieldName}
            changeFieldType={changeFieldType}
            generateJson={generateJson}
          />
        </section>
        <section className="flex flex-col gap-2">
          <h2 className="text-xs text-zinc-400">Your output:</h2>
          <JsonResult
            json={json}
            copyJsonToClipboard={copyJsonToClipboard}
          />
        </section>
      </main>
    </>
  );
}
