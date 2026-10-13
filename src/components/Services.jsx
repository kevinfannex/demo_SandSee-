import { ArrowUpRight } from 'lucide-react'
import { Reveal, Heading } from './ui'
import { SERVICES } from '../config'

export default function Services({ onEnquire }) {
  return (
    <section id="services" className="section">
      <Reveal><Heading eyebrow="Services" title="Crafted around you">Prices are confirmed by the salon. Contact us for pricing on any service.</Heading></Reveal>
      <ol className="mt-14 border-t border-charcoal/15">
        {SERVICES.map(([name, desc], i) => (
          <Reveal key={name}>
            <li className="grid items-baseline gap-3 border-b border-charcoal/15 py-8 md:grid-cols-[4rem_1fr_1.4fr_auto] md:gap-8">
              <span className="font-serif text-xl text-gold-dark">{String(i + 1).padStart(2, '0')}</span>
              <h3 className="text-2xl md:text-3xl">{name}</h3>
              <p className="leading-relaxed text-charcoal/70">{desc}</p>
              <a href="#contact" onClick={() => onEnquire(name)} className="inline-flex items-center gap-1 text-sm font-medium text-gold-dark underline-offset-4 hover:underline">
                Enquire Now <ArrowUpRight size={16} aria-hidden="true" />
              </a>
            </li>
          </Reveal>
        ))}
      </ol>
      <p className="mt-6 text-sm text-charcoal/60">Contact us for pricing.</p>
    </section>
  )
}
