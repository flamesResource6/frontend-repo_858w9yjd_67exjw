import Navbar from '../components/Navbar'
import { motion } from 'framer-motion'

export default function Contact() {
  return (
    <div className="min-h-screen bg-night-900 text-white" dir="rtl">
      <Navbar />
      <main className="pt-28">
        <section className="mx-auto max-w-4xl px-4">
          <motion.h1 initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="font-heading text-4xl mb-8 text-right">تواصل معنا</motion.h1>
          <div className="rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 p-6 shadow-depth">
            <form className="grid gap-4">
              <div>
                <label className="block text-sm text-white/70 mb-2">الاسم</label>
                <input className="w-full rounded-xl bg-white/5 border border-white/10 p-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-neon-purple" placeholder="اسمك الكامل" />
              </div>
              <div>
                <label className="block text-sm text-white/70 mb-2">البريد الإلكتروني</label>
                <input type="email" className="w-full rounded-xl bg-white/5 border border-white/10 p-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-neon-aqua" placeholder="name@example.com" />
              </div>
              <div>
                <label className="block text-sm text-white/70 mb-2">رسالتك</label>
                <textarea rows="5" className="w-full rounded-xl bg-white/5 border border-white/10 p-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-neon-purple" placeholder="أخبرنا باحتياجك"></textarea>
              </div>
              <div className="flex items-center gap-3">
                <button className="px-6 py-3 rounded-2xl bg-neon-purple/20 hover:bg-neon-purple/30 ring-1 ring-neon-purple/40 text-white shadow-glow">إرسال</button>
                <a href="https://wa.me/966000000000" target="_blank" className="px-6 py-3 rounded-2xl bg-neon-aqua/20 hover:bg-neon-aqua/30 ring-1 ring-neon-aqua/40 text-white shadow-glow">واتساب</a>
              </div>
            </form>
          </div>
        </section>
      </main>
    </div>
  )
}
