import { useEffect, useRef } from "react";
import { TYPES } from "../config/const";
import { type FieldType, type IdType } from "../types";
import TrashcanIcon from "./icons/trashcan-icon";

interface DataInputProps {
  id: IdType;
  name: string;
  type: FieldType;
  removeField: () => void;
  changeName: (id: IdType, name: string) => void;
  changeType: (id: IdType, type: FieldType) => void;
}

export default function DataInput({
  id,
  name,
  type,
  removeField,
  changeName,
  changeType,
}: DataInputProps) {
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
      inputRef.current.select();
    }
  }, []);

  return (
    <div className="flex flex-col gap-2 font-mono sm:flex-row sm:items-center">
      <input
        type="text"
        ref={inputRef}
        name={name}
        value={name}
        onChange={(event) => changeName(id, event.target.value)}
        className="w-full flex-1 rounded border-zinc-600 bg-zinc-700 px-2 py-1 text-sm sm:max-w-[250px]"
      />
      <span className="hidden sm:flex">:</span>
      <select
        name={`${name}-type`}
        value={type}
        onChange={(event) => changeType(id, event.target.value as FieldType)}
        className="flex-1 rounded border-zinc-600 bg-zinc-700 px-2 py-1 text-sm"
      >
        {TYPES.map((type, index) => (
          <option key={index} value={type}>
            {type}
          </option>
        ))}
      </select>
      <button
        type="button"
        onClick={removeField}
        className="grid place-items-center rounded bg-red-700/60 p-1 text-sm transition-colors hover:bg-red-700"
      >
        <TrashcanIcon width={18} height={18} />
      </button>
    </div>
  );
}
