import { type Json } from "../types";

interface JsonResultProps {
  json: Json[];
}

export default function JsonResult({ json }: JsonResultProps) {
  return (
    <pre className="flex flex-col gap-8 p-4 border rounded bg-zinc-800 border-zinc-700">
      {JSON.stringify(json, null, 4)}
    </pre>
  );
}
