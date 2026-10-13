import { useEffect, useRef, useState } from 'react'

export function Reveal({ children, className = '', delay = 0 }) {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el || !('IntersectionObserver' in window)) { el?.classList.add('in'); return }
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { el.classList.add('in'); io.disconnect() } }, { threshold: 0.12 })
    io.observe(el)
    return () => io.disconnect()
  }, [])
  return <div ref={ref} style={{ transitionDelay: `${delay}ms` }} className={`reveal ${className}`}>{children}</div>
}

// Shows a loading tone, then the image; falls back to a monogram tile if src is missing or fails.
export function SmartImage({ src, alt, className = '', eager = false }) {
  const [state, setState] = useState(src ? 'loading' : 'fallback')
  if (state === 'fallback') {
    return (
      <div role="img" aria-label={alt} className={`flex items-center justify-center bg-cream ${className}`}>
        <span className="font-serif text-4xl text-gold/70" aria-hidden="true">S&amp;S</span>
      </div>
    )
  }
  return (
    <div className={`relative overflow-hidden bg-cream ${className}`}>
      <img src={src} alt={alt} loading={eager ? 'eager' : 'lazy'} decoding="async"
        onLoad={() => setState('loaded')} onError={() => setState('fallback')}
        className={`h-full w-full object-cover transition-all duration-700 hover:scale-[1.03] ${state === 'loaded' ? 'opacity-100' : 'opacity-0'}`} />
    </div>
  )
}

export function Heading({ eyebrow, title, children, center }) {
  return (
    <div className={center ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'}>
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="mt-3 text-4xl leading-tight md:text-5xl">{title}</h2>
      {children && <p className="mt-5 leading-relaxed text-charcoal/75">{children}</p>}
    </div>
  )
}
