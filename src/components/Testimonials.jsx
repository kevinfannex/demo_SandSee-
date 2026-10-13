import { Reveal, Heading } from './ui'

export default function Testimonials() {
  return (
    <section className="section">
      <Reveal><Heading eyebrow="Testimonials" title="Kind words" center>Demo layout only. These placeholders will be replaced with genuine, approved customer testimonials.</Heading></Reveal>
      <div className="mt-14 grid gap-10 md:grid-cols-3">
        {[1, 2, 3].map((n) => (
          <Reveal key={n} delay={n * 80}>
            <figure className="border-l-2 border-gold pl-6">
              <blockquote className="font-serif text-2xl italic leading-snug text-charcoal/80">“Placeholder testimonial. A real customer review goes here.”</blockquote>
              <figcaption className="mt-4 text-sm text-charcoal/60">[Customer name] · <span className="uppercase tracking-wider">Demo placeholder</span></figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
