import { useState } from 'react'
import { Menu, X } from 'lucide-react'

function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Eligibility', href: '#eligibility' },
    { label: 'How it works', href: '#how' },
    { label: 'Agents', href: '#agents' },
    { label: 'FAQ', href: '#faq' },
  ]

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded bg-blue-600" />
            <span className="font-semibold text-slate-900">GrantConnect</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-slate-700 hover:text-blue-600 transition-colors">
                {item.label}
              </a>
            ))}
            <a href="#contact" className="inline-flex items-center justify-center rounded-lg bg-blue-600 text-white px-4 py-2 font-medium shadow-sm hover:bg-blue-700 transition-colors">
              Contact an Agent
            </a>
          </nav>

          <button aria-label="Open menu" className="md:hidden p-2 rounded-lg hover:bg-slate-100" onClick={() => setOpen(true)}>
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden absolute inset-x-0 top-16 bg-white border-b border-slate-200 shadow-sm">
          <div className="px-4 py-4 space-y-2">
            <div className="flex justify-end">
              <button aria-label="Close menu" className="p-2 rounded-lg hover:bg-slate-100" onClick={() => setOpen(false)}>
                <X className="w-6 h-6" />
              </button>
            </div>
            {navItems.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="block px-3 py-2 rounded-md text-slate-700 hover:bg-slate-100">
                {item.label}
              </a>
            ))}
            <a href="#contact" onClick={() => setOpen(false)} className="block px-3 py-2 rounded-md bg-blue-600 text-white text-center font-medium">
              Contact an Agent
            </a>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar
