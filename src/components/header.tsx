export default function Header() {
  return (
    <header className="mx-auto flex max-w-xl justify-center py-4">
      <h1 className="flex gap-1 font-mono text-4xl font-bold">
        <span className="text-yellow-600">{"{"}</span>
        <span>Random JSON</span>
        <span className="text-yellow-600">{"}"}</span>
      </h1>
    </header>
  );
}
