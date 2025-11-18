import Navbar from '../components/Navbar'
import { motion } from 'framer-motion'

export default function Services() {
  const items = [
    { title: 'وكلاء ذكاء اصطناعي', desc: 'نصمم ونبني وكلاء ذكيين لتنفيذ المهام المتكررة بكفاءة.' },
    { title: 'أتمتة سير العمل', desc: 'تسلسل عمليات متكامل يربط أدواتك ويشغلها تلقائيًا.' },
    { title: 'روبوتات محادثة', desc: 'تجربة مراسلة احترافية تفهم نية المستخدم وتستجيب بدقة.' },
    { title: 'تكامل وربط', desc: 'ربط API مخصص مع أنظمتك الداخلية ومنصات الطرف الثالث.' },
  ]

  return (
    <div className="min-h-screen bg-night-900 text-white" dir="rtl">
      <Navbar />
      <main className="pt-28">
        <section className="mx-auto max-w-7xl px-4">
          <motion.h1 initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="font-heading text-4xl mb-8">الخدمات</motion.h1>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map((it, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 p-6 shadow-depth hover:-translate-y-1 transition-transform">
                <h3 className="font-heading text-xl mb-2">{it.title}</h3>
                <p className="font-body text-white/70 leading-8">{it.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}
