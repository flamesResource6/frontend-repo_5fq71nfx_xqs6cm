function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-20 bg-gradient-to-br from-blue-50 via-white to-indigo-50" id="home">
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute -top-32 -right-16 w-80 h-80 bg-blue-200/40 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -left-16 w-96 h-96 bg-indigo-200/40 rounded-full blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900">
              Access Grants Without Forms
            </h1>
            <p className="mt-6 text-lg text-slate-700">
              A clean, responsive hub for grant information. We don’t accept online applications. 
              Apply through verified agents on your favorite messaging platforms.
            </p>
            <div className="mt-8 flex items-center gap-4">
              <a href="#agents" className="inline-flex items-center justify-center rounded-lg bg-blue-600 text-white px-5 py-3 font-medium shadow-sm hover:bg-blue-700 transition-colors">
                Find an Agent
              </a>
              <a href="#about" className="inline-flex items-center justify-center rounded-lg border border-slate-300 text-slate-700 px-5 py-3 font-medium hover:bg-slate-50 transition-colors">
                Learn More
              </a>
            </div>
            <p className="mt-4 text-sm text-slate-500">
              Note: We never ask for application fees. Agents communicate only through official channels.
            </p>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl bg-white shadow-xl border border-slate-200 p-6">
              <div className="grid grid-cols-2 gap-4 h-full">
                <div className="rounded-xl bg-gradient-to-br from-blue-500 to-indigo-500 text-white p-4 flex flex-col justify-between">
                  <div>
                    <p className="text-sm/relaxed opacity-90">Messaging First</p>
                    <h3 className="text-xl font-semibold mt-1">Apply via Agents</h3>
                  </div>
                  <p className="text-sm/relaxed opacity-90">WhatsApp • Telegram • SMS</p>
                </div>
                <div className="rounded-xl bg-slate-50 border border-slate-200 p-4">
                  <h3 className="font-semibold text-slate-900">Transparent Process</h3>
                  <p className="text-sm text-slate-600 mt-2">Clear steps, eligibility guidance and timelines.</p>
                </div>
                <div className="rounded-xl bg-slate-50 border border-slate-200 p-4">
                  <h3 className="font-semibold text-slate-900">Verified Agents</h3>
                  <p className="text-sm text-slate-600 mt-2">Every agent has an ID and secure channel.</p>
                </div>
                <div className="rounded-xl bg-slate-50 border border-slate-200 p-4">
                  <h3 className="font-semibold text-slate-900">No Online Forms</h3>
                  <p className="text-sm text-slate-600 mt-2">We keep it simple and safe for applicants.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
