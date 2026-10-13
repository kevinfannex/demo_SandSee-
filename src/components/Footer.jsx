import { Instagram } from 'lucide-react'
import { SITE } from '../config'

export default function Footer() {
  return (
    <footer className="bg-charcoal text-ivory/80">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-3">
        <div><p className="font-serif text-2xl text-ivory">{SITE.name}</p><p className="mt-2 text-sm">Hair, beauty and grooming in Chennai.</p></div>
        <nav aria-label="Footer"><ul className="space-y-2 text-sm">
          {['Home', 'Services', 'About', 'Gallery', 'Contact'].map((l) => <li key={l}><a href={`#${l.toLowerCase()}`} className="hover:text-gold">{l}</a></li>)}
        </ul></nav>
        <div className="space-y-2 text-sm">
          <p>{SITE.phoneDisplay}</p><p>{SITE.email}</p><p>{SITE.address}</p>
          {SITE.instagramUrl
            ? <a href={SITE.instagramUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:text-gold"><Instagram size={16} aria-hidden="true" /> Instagram</a>
            : <p className="inline-flex items-center gap-2 text-ivory/50"><Instagram size={16} aria-hidden="true" /> Instagram handle to be confirmed</p>}
        </div>
      </div>
      <p className="border-t border-ivory/15 py-5 text-center text-xs">© {new Date().getFullYear()} {SITE.name}. All rights reserved.</p>
    </footer>
  )
}
