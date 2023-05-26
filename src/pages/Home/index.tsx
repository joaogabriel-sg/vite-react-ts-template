import reactLogo from '@/assets/react.svg';

export function Home() {
  return (
    <main className="flex h-screen w-screen flex-col items-center justify-center gap-8 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-slate-300 via-gray-200 to-zinc-300">
      <div className="flex items-center justify-center gap-4">
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src="/vite.svg" alt="Vite logo" className="w-12" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} alt="React logo" className="w-12" />
        </a>
      </div>

      <h1 className="text-6xl font-bold text-stone-800">
        Vite React TS Template
      </h1>
    </main>
  );
}
