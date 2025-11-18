import Navbar from '../components/Navbar'
import { motion } from 'framer-motion'

export default function About() {
  const timeline = [
    { year: '2022', text: 'البداية — رؤية لتمكين الأعمال بالأتمتة والذكاء الاصطناعي.' },
    { year: '2023', text: 'إطلاق أول حلول جاهزة وتوسّع في قطاعات متعددة.' },
    { year: '2024', text: 'تعميم وكلاء ذكيين وتكاملات أعمق مع الأنظمة.' },
  ]

  return (
    <div className="min-h-screen bg-night-900 text-white" dir="rtl">
      <Navbar />
      <main className="pt-28">
        <section className="mx-auto max-w-7xl px-4">
          <motion.h1 initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="font-heading text-4xl mb-8">من نحن</motion.h1>
          <p className="font-body text-white/70 leading-8 mb-8">نصمم ونبني حلول أتمتة مدعومة بالذكاء الاصطناعي لخلق قيمة ملموسة وسريعة لعملائنا.</p>
          <div className="space-y-4">
            {timeline.map((t, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 p-6 shadow-depth">
                <div className="absolute right-4 top-6 text-neon-aqua font-semibold">{t.year}</div>
                <p className="font-body text-white/80 pr-16">{t.text}</p>
              </motion.div>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}
