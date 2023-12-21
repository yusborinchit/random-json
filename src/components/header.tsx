export default function Header() {
  return (
    <header className="flex justify-center max-w-xl gap-8 p-4 mx-auto">
      <h1 className="flex gap-1 font-mono text-xl font-bold">
        <span className="text-yellow-600">{"{"}</span>
        <span>Random JSON</span>
        <span className="text-yellow-600">{"}"}</span>
      </h1>
    </header>
  );
}
