import { Link, NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function Navbar() {
  const navItems = [
    { to: '/', label: 'الرئيسية' },
    { to: '/services', label: 'الخدمات' },
    { to: '/real-estate', label: 'حلول العقار' },
    { to: '/about', label: 'من نحن' },
    { to: '/contact', label: 'تواصل معنا' },
  ]

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mt-6 flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl px-4 py-3 shadow-depth">
          <Link to="/" className="flex items-center gap-3">
            <motion.div animate={{ rotate: [0, 2, -2, 0] }} transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }} className="h-8 w-8 rounded-xl bg-gradient-to-br from-neon-purple to-neon-aqua shadow-glow" />
            <span className="font-heading text-white text-lg">موتمّت</span>
          </Link>

          <nav className="hidden md:flex items-center gap-2">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) => `px-4 py-2 rounded-xl text-sm text-white/80 hover:text-white transition-colors ${isActive ? 'bg-white/10 ring-1 ring-white/10' : ''}`}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a href="#pricing" className="hidden sm:inline-flex px-4 py-2 rounded-xl text-xs font-semibold text-white/90 hover:text-white bg-white/5 ring-1 ring-white/10">
              الباقات
            </a>
            <a href="#cta" className="inline-flex px-4 py-2 rounded-xl text-xs font-semibold text-white bg-neon-purple/20 hover:bg-neon-purple/30 ring-1 ring-neon-purple/40 shadow-glow">
              ابدأ الآن
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
