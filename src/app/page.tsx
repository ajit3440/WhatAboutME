export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900">
      <header className="border-b border-zinc-200 bg-white/70 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <span className="text-lg font-semibold tracking-tight">WhatAboutME</span>
          <nav className="flex gap-4 text-sm font-medium text-zinc-600">
            <a href="#services" className="hover:text-zinc-900">
              Services
            </a>
            <a href="#portfolio" className="hover:text-zinc-900">
              Portfolio
            </a>
            <a href="#cta" className="hover:text-zinc-900">
              Quote
            </a>
          </nav>
        </div>
      </header>

      <main className="mx-auto flex max-w-6xl flex-col gap-16 px-6 py-12 sm:py-16">
        <section className="grid items-center gap-10 rounded-3xl bg-gradient-to-br from-orange-50 via-white to-amber-100 px-8 py-12 shadow-lg sm:grid-cols-2">
          <div className="space-y-5">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-700">
              Custom Furniture Studio
            </p>
            <h1 className="text-4xl font-semibold leading-tight text-zinc-900 sm:text-5xl">
              Custom Furniture for Home, Office & School
            </h1>
            <p className="text-lg text-zinc-700">
              We design and build desks, benches, cabinets, and one-off pieces that fit your space perfectly.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                className="inline-flex items-center justify-center rounded-full bg-amber-600 px-5 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-amber-700"
                href="#portfolio"
              >
                View Gallery
              </a>
              <a
                className="inline-flex items-center justify-center rounded-full border border-amber-600 px-5 py-3 text-sm font-semibold text-amber-700 transition hover:bg-amber-50"
                href="#cta"
              >
                Request a Quote
              </a>
            </div>
          </div>
          <div className="relative h-72 overflow-hidden rounded-2xl bg-[url('/hero-furniture.jpg')] bg-cover bg-center shadow-inner sm:h-full">
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          </div>
        </section>

        <section id="services" className="grid gap-6 sm:grid-cols-3">
          {[
            { title: "Home", desc: "Built-ins, wardrobes, dining, accent storage." },
            { title: "Office", desc: "Ergonomic desks, conference tables, storage walls." },
            { title: "School", desc: "Benches, teacher desks, durable classroom storage." },
          ].map((item) => (
            <div key={item.title} className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-zinc-900">{item.title}</h3>
              <p className="mt-2 text-sm text-zinc-600">{item.desc}</p>
            </div>
          ))}
        </section>

        <section id="portfolio" className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-semibold text-zinc-900">Featured Projects</h2>
            <a className="text-sm font-semibold text-amber-700 hover:text-amber-800" href="#cta">
              Request this style
            </a>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {["/portfolio-1.jpg", "/portfolio-2.jpg", "/portfolio-3.jpg"].map((src) => (
              <div
                key={src}
                className="aspect-[4/3] overflow-hidden rounded-2xl bg-zinc-100 shadow-inner"
                style={{ backgroundImage: `url(${src})`, backgroundSize: "cover", backgroundPosition: "center" }}
              />
            ))}
          </div>
        </section>

        <section className="grid gap-8 rounded-3xl border border-dashed border-amber-200 bg-amber-50 px-8 py-10 sm:grid-cols-2">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-zinc-900">Why choose us</h3>
            <ul className="space-y-3 text-sm text-zinc-700">
              <li>• Custom designs that match your measurements</li>
              <li>• Premium hardwoods, laminates, and sustainable finishes</li>
              <li>• Fast delivery timelines with milestone updates</li>
              <li>• Built locally with post-install support</li>
            </ul>
          </div>
          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <h4 className="text-lg font-semibold text-zinc-900">API health check</h4>
            <p className="mt-2 text-sm text-zinc-600">
              Backend is wired up. Call the demo endpoint:
            </p>
            <pre className="mt-3 overflow-x-auto rounded-xl bg-zinc-900 p-3 text-xs text-amber-100">
{`GET /api/ping
→ {"status":"ok","message":"pong"}`}
            </pre>
          </div>
        </section>

        <section id="cta" className="grid gap-6 sm:grid-cols-2">
          <div className="space-y-3">
            <h2 className="text-2xl font-semibold text-zinc-900">Get your custom quote</h2>
            <p className="text-sm text-zinc-700">
              Tell us about your space and preferred materials. We typically respond within one business day.
            </p>
          </div>
          <form className="grid gap-3 rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
            <label className="text-sm font-medium text-zinc-800">
              Name
              <input
                required
                name="name"
                className="mt-1 w-full rounded-lg border border-zinc-300 px-3 py-2 text-sm outline-none focus:border-amber-500"
              />
            </label>
            <label className="text-sm font-medium text-zinc-800">
              Project type
              <select
                name="type"
                className="mt-1 w-full rounded-lg border border-zinc-300 px-3 py-2 text-sm outline-none focus:border-amber-500"
              >
                <option>Home</option>
                <option>Office</option>
                <option>School</option>
              </select>
            </label>
            <label className="text-sm font-medium text-zinc-800">
              Details
              <textarea
                rows={3}
                name="details"
                placeholder="Measurements, material preference, timeline"
                className="mt-1 w-full rounded-lg border border-zinc-300 px-3 py-2 text-sm outline-none focus:border-amber-500"
              />
            </label>
            <button
              type="button"
              className="mt-1 inline-flex items-center justify-center rounded-full bg-amber-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-amber-700"
            >
              Submit
            </button>
          </form>
        </section>
      </main>
    </div>
  );
}
