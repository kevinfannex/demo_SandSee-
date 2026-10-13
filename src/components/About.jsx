import { Reveal, Heading, SmartImage } from './ui'
import { IMAGES } from '../config'

export default function About() {
  return (
    <section id="about" className="bg-cream">
      <div className="section grid items-center gap-12 md:grid-cols-2">
        <Reveal><SmartImage src={IMAGES.about} alt="Inside S and See Salon" className="aspect-[4/5] w-full" /></Reveal>
        <Reveal delay={120}>
          <Heading eyebrow="About" title="Beauty Meets Expertise">
            At S and See Salon, every visit begins with a conversation. We take the time to understand what you want, then shape a look that suits you and your everyday life.
          </Heading>
          <p className="mt-4 leading-relaxed text-charcoal/75">From the first consultation to the final finishing touch, we care about the details and about making you feel comfortable, welcome and confident in our chair.</p>
          <a href="#contact" className="btn btn-gold mt-8">Talk to Us</a>
        </Reveal>
      </div>
    </section>
  )
}
