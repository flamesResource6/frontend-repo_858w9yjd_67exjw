import { Routes, Route } from 'react-router-dom'
import { motion } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import { WhyUs, ServicesGrid, RealEstateSection, ProcessTimeline, Testimonials, Pricing, FinalCTA } from './components/Sections'
import Services from './pages/Services'
import RealEstate from './pages/RealEstate'
import About from './pages/About'
import Contact from './pages/Contact'

function Landing() {
  return (
    <div className="min-h-screen bg-night-900 text-white overflow-x-hidden" dir="rtl">
      <Navbar />

      {/* Parallax subtle shapes */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <motion.div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-neon-purple/20 blur-3xl" animate={{ x: [0, 10, 0], y: [0, 6, 0] }} transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }} />
        <motion.div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-neon-aqua/10 blur-3xl" animate={{ x: [0, -8, 0], y: [0, -6, 0] }} transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }} />
      </div>

      <main>
        <Hero />
        <WhyUs />
        <ServicesGrid />
        <RealEstateSection />
        <ProcessTimeline />
        <Testimonials />
        <Pricing />
        <FinalCTA />
      </main>

      <footer className="py-10 text-center text-white/50">
        <p>© {new Date().getFullYear()} موتمّت — جميع الحقوق محفوظة</p>
      </footer>
    </div>
  )
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/services" element={<Services />} />
      <Route path="/real-estate" element={<RealEstate />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  )
}

export default App
