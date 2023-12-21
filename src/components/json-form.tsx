import { type FormEvent } from "react";
import { type Field, type FieldType, type IdType } from "../types";
import DataInput from "./data-input";

interface JsonFormProps {
  fields: Field[];
  handleGenerateJson: (event: FormEvent<HTMLFormElement>) => void;
  handleChangeName: (id: IdType, name: string) => void;
  handleChangeType: (id: IdType, name: FieldType) => void;
  handleAddField: () => void;
}

export default function JsonForm({
  fields,
  handleGenerateJson,
  handleChangeName,
  handleChangeType,
  handleAddField,
}: JsonFormProps) {
  return (
    <form
      onSubmit={handleGenerateJson}
      className="flex flex-col gap-8 p-4 border rounded bg-zinc-800 border-zinc-700"
    >
      <div className="flex items-center gap-2">
        <label htmlFor="amount">Amount:</label>
        <input
          type="number"
          id="amount"
          name="amount"
          className="flex-1 px-2 py-1 rounded border-zinc-600 bg-zinc-700"
        />
      </div>

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
  );
}
