import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import About from './components/About'
import Gallery from './components/Gallery'
import WhyUs from './components/WhyUs'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  const [service, setService] = useState('')
  return (
    <>
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:left-2 focus:top-2 focus:z-50 focus:bg-ivory focus:p-3">Skip to content</a>
      <Navbar />
      <main id="main">
        <Hero />
        <Services onEnquire={setService} />
        <About />
        <Gallery />
        <WhyUs />
        <Testimonials />
        <Contact service={service} setService={setService} />
      </main>
      <Footer />
    </>
  )
}
