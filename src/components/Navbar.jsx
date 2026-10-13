import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { SITE } from '../config'

const LINKS = [['Home', '#home'], ['Services', '#services'], ['About', '#about'], ['Gallery', '#gallery'], ['Contact', '#contact']]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <header className="sticky top-0 z-50 border-b border-charcoal/10 bg-ivory/95 backdrop-blur">
      <nav aria-label="Main" className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <a href="#home" className="font-serif text-2xl font-semibold tracking-wide">{SITE.name}</a>
        <ul className="hidden items-center gap-8 text-sm md:flex">
          {LINKS.map(([l, h]) => <li key={l}><a href={h} className="transition-colors hover:text-gold-dark">{l}</a></li>)}
        </ul>
        <a href="#contact" className="btn btn-gold hidden md:inline-flex">Book an Appointment</a>
        <button className="p-2 md:hidden" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} aria-controls="mobile-menu" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>
      {open && (
        <div id="mobile-menu" className="border-t border-charcoal/10 bg-ivory px-5 pb-6 md:hidden">
          <ul className="flex flex-col py-2">
            {LINKS.map(([l, h]) => <li key={l}><a href={h} onClick={() => setOpen(false)} className="block border-b border-charcoal/10 py-3">{l}</a></li>)}
          </ul>
          <a href="#contact" onClick={() => setOpen(false)} className="btn btn-gold mt-4 w-full">Book an Appointment</a>
        </div>
      )}
    </header>
  )
}
