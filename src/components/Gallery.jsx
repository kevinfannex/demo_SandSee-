import { Reveal, Heading, SmartImage } from './ui'
import { IMAGES } from '../config'

const SPANS = ['md:row-span-2 aspect-[3/4] md:aspect-auto', 'aspect-square', 'aspect-square', 'aspect-square', 'aspect-square', 'aspect-[4/3] md:col-span-1']

export default function Gallery() {
  return (
    <section id="gallery" className="section">
      <Reveal><Heading eyebrow="Gallery" title="Inside the salon" center>A look at our work, our space and our treatments.</Heading></Reveal>
      <ul className="mt-14 grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4">
        {IMAGES.gallery.map((g, i) => (
          <Reveal key={g.label} delay={i * 60} className={SPANS[i]}>
            <li className="relative h-full list-none">
              <SmartImage src={g.src} alt={g.alt} className="h-full w-full" />
              <span className="pointer-events-none absolute bottom-3 left-3 bg-ivory/90 px-3 py-1 text-xs tracking-wide">{g.label}</span>
            </li>
          </Reveal>
        ))}
      </ul>
    </section>
  )
}
