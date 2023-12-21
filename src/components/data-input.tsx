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
    <div className="flex items-center gap-2 font-mono ">
      <input
        type="text"
        ref={inputRef}
        name={name}
        value={name}
        onChange={(event) => changeName(id, event.target.value)}
        className="flex-1 px-2 text-sm py-1 border-zinc-600 max-w-[250px] rounded bg-zinc-700"
      />
      <span>:</span>
      <select
        name={`${name}-type`}
        value={type}
        onChange={(event) => changeType(id, event.target.value as FieldType)}
        className="flex-1 px-2 py-1 text-sm rounded border-zinc-600 bg-zinc-700"
      >
        {TYPES.map((type, index) => (
          <option
            key={index}
            value={type}
          >
            {type}
          </option>
        ))}
      </select>
      <button
        type="button"
        onClick={removeField}
        className="grid p-1 text-sm transition-colors rounded bg-red-700/60 hover:bg-red-700 place-items-center"
      >
        <TrashcanIcon
          width={18}
          height={18}
        />
      </button>
    </div>
  );
}
