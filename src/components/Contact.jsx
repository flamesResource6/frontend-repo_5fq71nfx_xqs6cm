import { useState } from 'react'

function Contact() {
  const [platform, setPlatform] = useState('whatsapp')

  const platformInfo = {
    whatsapp: {
      title: 'WhatsApp',
      desc: 'Connect with a verified agent on WhatsApp',
      example: 'wa.me/1234567890',
    },
    telegram: {
      title: 'Telegram',
      desc: 'Start your application with a Telegram agent',
      example: 't.me/YourGrantAgent',
    },
    sms: {
      title: 'SMS',
      desc: 'Text an agent to begin your process',
      example: '+1 (555) 123‑4567',
    },
  }

  const info = platformInfo[platform]

  return (
    <section id="contact" className="py-16 sm:py-24 bg-slate-50 border-t border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2">Contact a Verified Agent</h2>
            <p className="text-slate-700 mb-6">No online forms. Choose a messaging platform and we’ll connect you with a verified agent.</p>

            <div className="inline-flex rounded-lg bg-white p-1 border border-slate-200 shadow-sm">
              <button onClick={() => setPlatform('whatsapp')} className={`px-4 py-2 rounded-md text-sm font-medium ${platform === 'whatsapp' ? 'bg-blue-600 text-white' : 'text-slate-700 hover:bg-slate-50'}`}>WhatsApp</button>
              <button onClick={() => setPlatform('telegram')} className={`px-4 py-2 rounded-md text-sm font-medium ${platform === 'telegram' ? 'bg-blue-600 text-white' : 'text-slate-700 hover:bg-slate-50'}`}>Telegram</button>
              <button onClick={() => setPlatform('sms')} className={`px-4 py-2 rounded-md text-sm font-medium ${platform === 'sms' ? 'bg-blue-600 text-white' : 'text-slate-700 hover:bg-slate-50'}`}>SMS</button>
            </div>

            <div className="mt-6 rounded-xl bg-white border border-slate-200 p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-900">{info.title} Channel</h3>
              <p className="text-slate-600 mt-1">{info.desc}</p>
              <div className="mt-4">
                <p className="text-sm text-slate-500">Official handle/number</p>
                <p className="text-lg font-mono text-slate-900">{info.example}</p>
              </div>
              <p className="mt-4 text-sm text-slate-500">Agents never request payment. All communication occurs within the platform.</p>
            </div>
          </div>

          <div className="rounded-2xl bg-white border border-slate-200 p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-slate-900">Safety & Verification</h3>
            <ul className="list-disc pl-5 text-slate-700 mt-3 space-y-2">
              <li>Check the agent's unique ID before sharing documents.</li>
              <li>Do not send passwords or bank PINs.</li>
              <li>Report suspicious activity immediately.</li>
              <li>Save chat transcripts for your records.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
