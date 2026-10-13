import { Heart, Scissors, Coffee, Eye } from 'lucide-react'
import { Reveal, Heading } from './ui'

const ITEMS = [
  [Heart, 'Personalised Service', 'Looks planned around you, not a template.'],
  [Scissors, 'Professional Styling', 'Careful technique from cut to finish.'],
  [Coffee, 'Welcoming Atmosphere', 'A relaxed space where you can unwind.'],
  [Eye, 'Attention to Detail', 'The small things that complete a look.'],
]

export default function WhyUs() {
  return (
    <section className="bg-charcoal text-ivory">
      <div className="section">
        <Reveal><Heading eyebrow="Why Choose Us" title="The S and See difference" center /></Reveal>
        <ul className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {ITEMS.map(([Icon, t, d], i) => (
            <Reveal key={t} delay={i * 80}>
              <li className="list-none border-t border-gold/60 pt-6">
                <Icon className="text-gold" size={26} strokeWidth={1.5} aria-hidden="true" />
                <h3 className="mt-5 text-2xl">{t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ivory/70">{d}</p>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
