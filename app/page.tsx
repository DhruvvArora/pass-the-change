export default function Home() {
  return (
    <main className="space-y-6">

      <header className="flex justify-between items-center">
        <h1 className="font-semibold text-lg">Pass the Change</h1>
        <button className="p-2 rounded-full border">⚙️</button>
      </header>

      <section>
        <h2 className="text-3xl font-bold">
          Your change is working.
        </h2>

        <p className="muted mt-2">
          Every paycheck, a little goes a long way.
        </p>
      </section>

      <div className="card p-5">
        <p className="muted text-sm">You've donated</p>
        <p className="text-3xl font-bold">$24.83</p>
        <p className="muted text-sm">Since March</p>
      </div>

      <div
        className="rounded-xl p-5 text-white"
        style={{ background: "#2E2218" }}
      >
        <p className="text-sm opacity-80">Next paycheck</p>
        <p className="text-lg font-semibold">
          Mar 15 · every 2 weeks
        </p>

        <div className="mt-3">
          <p className="text-sm opacity-80">
            Change to donate
          </p>
          <p className="text-xl font-bold">$3.47</p>
        </div>
      </div>

    </main>
  );
}
