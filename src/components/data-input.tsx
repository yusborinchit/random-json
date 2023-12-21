import { useEffect, useRef } from "react";
import { TYPES } from "../config/const";
import { type FieldType, type IdType } from "../types";

interface DataInputProps {
  id: IdType;
  changeName: (id: IdType, name: string) => void;
  changeType: (id: IdType, type: FieldType) => void;
  name: string;
  type: FieldType;
}

export default function DataInput({
  id,
  changeName,
  changeType,
  name,
  type,
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
    </div>
  );
}
