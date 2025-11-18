import Navbar from '../components/Navbar'
import { motion } from 'framer-motion'

export default function RealEstate() {
  const items = [
    { title: 'CRM عقاري', desc: 'سجل موحد للعملاء، العروض، العقود ومتابعة المبيعات.' },
    { title: 'تصنيف العملاء', desc: 'تحليل بيانات العملاء لتوقع الإغلاق وترتيب الأولويات.' },
    { title: 'رد ذكي', desc: 'مساعد محادثة يرد على الاستفسارات بدقة وباللغة العربية.' },
    { title: 'جدولة', desc: 'تنسيق الزيارات والمكالمات والتذكيرات تلقائيًا.' },
    { title: 'تقارير', desc: 'لوحات معلومات لحظية لقياس الأداء والتحويلات.' },
    { title: 'ربط الأنظمة', desc: 'تكامل مع المواقع والمنصات العقارية وبوابات الدفع.' },
  ]

  return (
    <div className="min-h-screen bg-night-900 text-white" dir="rtl">
      <Navbar />
      <main className="pt-28">
        <section className="mx-auto max-w-7xl px-4">
          <motion.h1 initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="font-heading text-4xl mb-8">حلول العقار</motion.h1>
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
