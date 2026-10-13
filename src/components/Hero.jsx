import { SmartImage } from './ui'
import { IMAGES } from '../config'

export default function Hero() {
  return (
    <section id="home" className="relative isolate overflow-hidden bg-charcoal text-ivory">
      {IMAGES.hero && <SmartImage src={IMAGES.hero} alt="Stylist and client at S and See Salon" eager className="absolute inset-0 -z-10 h-full w-full opacity-60" />}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-charcoal via-charcoal/70 to-transparent" />
      <div className="mx-auto flex min-h-[78vh] max-w-6xl flex-col justify-center px-5 py-24">
        <p className="eyebrow !text-gold">Unisex Salon · Chennai</p>
        <h1 className="mt-5 max-w-3xl text-5xl leading-[1.05] md:text-7xl">Your Style. <span className="italic text-gold">Your Statement.</span></h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-ivory/85">Discover professional hair, beauty, and grooming services designed around you.</p>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <a href="#contact" className="btn btn-gold">Book an Appointment</a>
          <a href="#services" className="btn btn-outline text-ivory">Explore Our Services</a>
        </div>
        <p className="mt-10 text-sm tracking-wide text-ivory/70">Your destination for style, beauty, and self-care.</p>
      </div>
    </section>
  )
}
