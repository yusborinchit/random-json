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
    <pre className="relative flex flex-col gap-8 p-4 border rounded bg-zinc-800 border-zinc-700">
      <button
        onClick={handleCopyToCLipboard}
        className="absolute grid p-1 text-sm text-white bg-yellow-600 rounded place-items-center top-2 right-2"
      >
        <ClipboardIcon
          width={18}
          height={18}
        />
      </button>
      {JSON.stringify(json, null, 4)}
    </pre>
  );
}
