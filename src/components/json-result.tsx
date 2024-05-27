import { type Json } from "../types";
import ClipboardIcon from "./icons/clipboard-icon";

interface JsonResultProps {
  json: Json[];
  copyJsonToClipboard: () => void;
}

export default function JsonResult({
  json,
  copyJsonToClipboard,
}: JsonResultProps) {
  const handleCopyToCLipboard = () => {
    copyJsonToClipboard();
    alert("JSON copied to clipboard correctly.");
  };

  return (
    <pre className="relative flex flex-col gap-8 whitespace-break-spaces rounded border border-zinc-700 bg-zinc-800 p-4">
      <button
        onClick={handleCopyToCLipboard}
        className="absolute right-2 top-2 grid place-items-center rounded bg-yellow-600 p-1 text-sm text-white transition-colors hover:bg-yellow-700"
      >
        <ClipboardIcon width={18} height={18} />
      </button>
      {JSON.stringify(json, null, 4)}
    </pre>
  );
}
