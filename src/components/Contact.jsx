import { useState } from 'react'
import { Phone, MessageCircle, Clock, MapPin } from 'lucide-react'
import { Reveal, Heading } from './ui'
import { SITE, SERVICES } from '../config'

export function waLink(text) {
  return `https://wa.me/${SITE.whatsappNumber.replace(/\D/g, '')}?text=${encodeURIComponent(text)}`
}

export default function Contact({ service, setService }) {
  const [f, setF] = useState({ name: '', phone: '', date: '' })
  const [errors, setErrors] = useState({})
  const [done, setDone] = useState(false)
  const today = new Date().toISOString().split('T')[0]

  function validate() {
    const e = {}
    if (f.name.trim().length < 2) e.name = 'Please enter your name.'
    if (!/^(\+?91)?[6-9]\d{9}$/.test(f.phone.replace(/[\s-]/g, ''))) e.phone = 'Enter a valid 10-digit Indian mobile number.'
    if (!service) e.service = 'Please choose a service.'
    if (!f.date || f.date < today) e.date = 'Choose today or a future date.'
    return e
  }
  function submit(ev) {
    ev.preventDefault()
    const e = validate()
    setErrors(e)
    setDone(Object.keys(e).length === 0)
  }
  const field = 'mt-1 w-full border border-charcoal/25 bg-ivory px-4 py-3 text-sm'
  const err = (k) => errors[k] && <p id={`${k}-err`} role="alert" className="mt-1 text-xs text-red-700">{errors[k]}</p>
  const msg = `Hello ${SITE.name}, I'd like to enquire about ${service || 'your services'}${f.date ? ` on ${f.date}` : ''}. My name is ${f.name || '___'}.`

  return (
    <section id="contact" className="bg-cream">
      <div className="section grid gap-14 lg:grid-cols-2">
        <Reveal>
          <Heading eyebrow="Contact" title="Book an appointment">Send an enquiry or message us on WhatsApp. Contact details below are placeholders.</Heading>
          <ul className="mt-8 space-y-4 text-sm">
            <li className="flex gap-3"><Phone size={18} className="text-gold-dark" aria-hidden="true" />{SITE.phoneDisplay}</li>
            <li className="flex gap-3"><MapPin size={18} className="text-gold-dark" aria-hidden="true" />{SITE.address}</li>
            <li className="flex gap-3"><Clock size={18} className="text-gold-dark" aria-hidden="true" />
              <span>{SITE.hours.map(([d, h]) => <span key={d} className="block">{d}: {h}</span>)}</span></li>
          </ul>
          <a href={waLink('Hello S and See Salon, I would like to make an enquiry.')} target="_blank" rel="noopener noreferrer" className="btn btn-gold mt-8">
            <MessageCircle size={18} aria-hidden="true" /> Enquire on WhatsApp
          </a>
          <div className="mt-8 aspect-video w-full overflow-hidden border border-charcoal/15 bg-ivory">
            {SITE.mapEmbedUrl
              ? <iframe title="Salon location on Google Maps" src={SITE.mapEmbedUrl} loading="lazy" className="h-full w-full border-0" />
              : <div className="flex h-full items-center justify-center p-6 text-center text-sm text-charcoal/60">Google Maps embed placeholder. Add the salon's map link in config.js.</div>}
          </div>
        </Reveal>
        <Reveal delay={120}>
          <form onSubmit={submit} noValidate className="space-y-5 bg-ivory p-6 md:p-8" aria-label="Appointment enquiry form">
            <div><label htmlFor="name" className="text-sm font-medium">Name</label>
              <input id="name" className={field} autoComplete="name" value={f.name} aria-invalid={!!errors.name} aria-describedby={errors.name ? 'name-err' : undefined} onChange={(e) => setF({ ...f, name: e.target.value })} />{err('name')}</div>
            <div><label htmlFor="phone" className="text-sm font-medium">Phone number</label>
              <input id="phone" type="tel" className={field} autoComplete="tel" value={f.phone} aria-invalid={!!errors.phone} aria-describedby={errors.phone ? 'phone-err' : undefined} onChange={(e) => setF({ ...f, phone: e.target.value })} />{err('phone')}</div>
            <div><label htmlFor="service" className="text-sm font-medium">Service interested in</label>
              <select id="service" className={field} value={service} aria-invalid={!!errors.service} aria-describedby={errors.service ? 'service-err' : undefined} onChange={(e) => setService(e.target.value)}>
                <option value="">Select a service</option>{SERVICES.map(([n]) => <option key={n}>{n}</option>)}
              </select>{err('service')}</div>
            <div><label htmlFor="date" className="text-sm font-medium">Preferred appointment date</label>
              <input id="date" type="date" min={today} className={field} value={f.date} aria-invalid={!!errors.date} aria-describedby={errors.date ? 'date-err' : undefined} onChange={(e) => setF({ ...f, date: e.target.value })} />{err('date')}</div>
            <button type="submit" className="btn btn-gold w-full">Request Appointment</button>
            {done && (
              <div role="status" className="border border-gold bg-cream p-4 text-sm">
                <strong>Demo mode:</strong> your details are valid, but this demo site has no booking system, so nothing has been sent to the salon.
                <a href={waLink(msg)} target="_blank" rel="noopener noreferrer" className="mt-2 block font-medium text-gold-dark underline">Send this enquiry on WhatsApp instead</a>
              </div>
            )}
          </form>
        </Reveal>
      </div>
    </section>
  )
}
