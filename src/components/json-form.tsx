import { type FormEvent } from "react";
import { type Field, type FieldType, type IdType } from "../types";
import DataInput from "./data-input";

interface JsonFormProps {
  fields: Field[];
  addField: () => void;
  removeField: (id: IdType) => void;
  changeFieldName: (id: IdType, name: string) => void;
  changeFieldType: (id: IdType, name: FieldType) => void;
  generateJson: (event: FormEvent<HTMLFormElement>) => void;
}

export default function JsonForm({
  fields,
  addField,
  removeField,
  changeFieldName,
  changeFieldType,
  generateJson,
}: JsonFormProps) {
  return (
    <form
      onSubmit={generateJson}
      className="flex flex-col gap-8 rounded border border-zinc-700 bg-zinc-800 p-4"
    >
      <div className="flex items-center gap-2">
        <label htmlFor="amount" className="text-sm">
          Amount:
        </label>
        <input
          type="number"
          id="amount"
          name="amount"
          min={1}
          defaultValue={1}
          max={100}
          className="flex-1 rounded border-zinc-600 bg-zinc-700 px-2 py-1 text-sm"
        />
      </div>

      <div className="flex flex-col gap-6 sm:gap-2">
        {fields.map(({ id, name, type }) => (
          <DataInput
            key={id}
            id={id}
            name={name}
            type={type}
            removeField={() => removeField(id)}
            changeName={changeFieldName}
            changeType={changeFieldType}
          />
        ))}
      </div>
      <div className="flex gap-2 text-sm">
        <button
          type="button"
          onClick={addField}
          className="grid w-fit place-items-center rounded bg-yellow-600 px-4 py-2 transition-colors hover:bg-yellow-700"
        >
          + Add field
        </button>
        <button type="submit" className="w-fit p-2 underline">
          Generate JSON
        </button>
      </div>
    </form>
  );
}
