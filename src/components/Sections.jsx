function Section({ id, title, children }) {
  return (
    <section id={id} className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-6">{title}</h2>
        <div className="prose prose-slate max-w-none">
          {children}
        </div>
      </div>
    </section>
  )
}

export function About() {
  return (
    <Section id="about" title="About the Program">
      <p>
        Our mission is to make grant access simple, human and secure. Instead of complex web forms, we use a network of trained agents who guide applicants through messaging platforms. This approach improves accessibility, especially for those with limited internet access or technical skills.
      </p>
    </Section>
  )
}

export function Eligibility() {
  return (
    <Section id="eligibility" title="Eligibility">
      <ul>
        <li>Must be 18 years or older</li>
        <li>Resident of the participating region</li>
        <li>Meet program-specific income or project criteria</li>
        <li>Can provide documentation via secure messaging when requested</li>
      </ul>
    </Section>
  )
}

export function HowItWorks() {
  return (
    <Section id="how" title="How it works">
      <ol>
        <li>Review eligibility requirements</li>
        <li>Choose a verified agent on your preferred messaging platform</li>
        <li>Start a chat and provide initial details</li>
        <li>Share documents securely as instructed by the agent</li>
        <li>Receive updates and final decision through the same channel</li>
      </ol>
    </Section>
  )
}

export function Agents() {
  return (
    <Section id="agents" title="Verified Agent Channels">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 not-prose">
        <a href="#contact" className="rounded-xl border border-slate-200 p-4 hover:bg-slate-50 transition">
          <h3 className="font-semibold text-slate-900">WhatsApp</h3>
          <p className="text-slate-600">Connect with an agent on WhatsApp</p>
        </a>
        <a href="#contact" className="rounded-xl border border-slate-200 p-4 hover:bg-slate-50 transition">
          <h3 className="font-semibold text-slate-900">Telegram</h3>
          <p className="text-slate-600">Begin your process on Telegram</p>
        </a>
        <a href="#contact" className="rounded-xl border border-slate-200 p-4 hover:bg-slate-50 transition">
          <h3 className="font-semibold text-slate-900">SMS</h3>
          <p className="text-slate-600">Get started via text message</p>
        </a>
      </div>
    </Section>
  )
}

export function FAQ() {
  return (
    <Section id="faq" title="Frequently asked questions">
      <details className="rounded-lg border border-slate-200 p-4 mb-3">
        <summary className="font-medium cursor-pointer">Why is there no online application?</summary>
        <p className="mt-2 text-slate-700">We prioritize accessibility and guidance. Agents help applicants avoid mistakes and share documents securely.</p>
      </details>
      <details className="rounded-lg border border-slate-200 p-4 mb-3">
        <summary className="font-medium cursor-pointer">Are agents allowed to charge fees?</summary>
        <p className="mt-2 text-slate-700">No. The service is free. Report any fee requests immediately through the contact section.</p>
      </details>
      <details className="rounded-lg border border-slate-200 p-4">
        <summary className="font-medium cursor-pointer">How do I verify an agent?</summary>
        <p className="mt-2 text-slate-700">Agents will provide a unique ID. You can confirm their identity by asking them to verify via our official channels.</p>
      </details>
    </Section>
  )
}

export default Section
