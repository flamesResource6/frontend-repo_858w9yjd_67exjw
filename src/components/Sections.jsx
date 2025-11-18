import { motion } from 'framer-motion'
import { Check, Sparkles, Zap, Brain, MessageSquare, Link as LinkIcon, Calendar, BarChart2, Building2, Settings } from 'lucide-react'

const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.6, ease: [0.21,1,0.21,1] }
  })
}

export function WhyUs() {
  const items = [
    { icon: Sparkles, title: 'ذكاء اصطناعي مخصص', desc: 'حلول مبنية على بياناتك، تفهم عملك وتتكيف معه.' },
    { icon: Zap, title: 'أتمتة سريعة', desc: 'تشغيل العمليات تلقائيًا لتقليل الوقت والتكلفة.' },
    { icon: Settings, title: 'تكامل سلس', desc: 'ربط الأنظمة والمنصات بدون تعقيد.' },
    { icon: Check, title: 'نتائج قابلة للقياس', desc: 'مؤشرات أداء واضحة وتقارير دقيقة.' },
  ]

  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="font-heading text-3xl md:text-4xl text-white text-right mb-10">لماذا موتمّت؟</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((it, idx) => (
            <motion.div key={idx} custom={idx} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} variants={sectionVariants} className="group rounded-2xl bg-white/5 border border-white/10 p-5 backdrop-blur-xl hover:-translate-y-1 transition-transform shadow-depth">
              <it.icon className="h-6 w-6 text-white/80 mb-4 animate-pulse-soft" />
              <h3 className="font-heading text-white mb-2">{it.title}</h3>
              <p className="font-body text-white/70 text-sm leading-7">{it.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function ServicesGrid() {
  const services = [
    { icon: Brain, title: 'وكلاء ذكاء اصطناعي', desc: 'وكلاء ذكيون يديرون المهام المتكررة.' },
    { icon: MessageSquare, title: 'ردود ذكية', desc: 'روبوتات محادثة تفهم نية العميل وترد باحترافية.' },
    { icon: LinkIcon, title: 'تكامل وربط', desc: 'ربط الأنظمة وواجهات البرمجة عبر Zapier/Make وواجهات مخصصة.' },
    { icon: Calendar, title: 'جدولة ومتابعة', desc: 'حجوزات، تذكيرات، ومتابعة آلية.' },
  ]

  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="font-heading text-3xl md:text-4xl text-white text-right mb-10">الخدمات الرئيسية</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <motion.div key={i} custom={i} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} variants={sectionVariants} className="group rounded-2xl bg-white/5 border border-white/10 p-5 backdrop-blur-xl hover:-translate-y-1 transition-transform shadow-depth">
              <s.icon className="h-6 w-6 text-white/80 mb-4 animate-pulse-soft" />
              <h3 className="font-heading text-white mb-2">{s.title}</h3>
              <p className="font-body text-white/70 text-sm leading-7">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function RealEstateSection() {
  const features = [
    { icon: Building2, title: 'CRM عقاري', desc: 'إدارة العملاء والعقود والعروض في مكان واحد.' },
    { icon: MessageSquare, title: 'رد ذكي', desc: 'إجابات فورية على استفسارات العملاء عبر واتساب والموقع.' },
    { icon: Calendar, title: 'جدولة تلقائية', desc: 'تنسيق الزيارات والمتابعات تلقائيًا.' },
    { icon: BarChart2, title: 'تقارير لحظية', desc: 'لوحات بيانات توضح الأداء والتحويلات.' },
    { icon: Brain, title: 'تصنيف العملاء', desc: 'تنبؤ واحتمال الإغلاق حسب السلوك.' },
    { icon: LinkIcon, title: 'ربط الأنظمة', desc: 'تكامل مع بوابات الدفع والمنصات العقارية.' },
  ]

  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex items-end justify-between mb-8">
          <h2 className="font-heading text-3xl md:text-4xl text-white text-right">حلول العقار</h2>
          <a href="/real-estate" className="text-neon-aqua">تفاصيل أكثر</a>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <motion.div key={i} custom={i} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} variants={sectionVariants} className="rounded-2xl bg-white/5 border border-white/10 p-5 backdrop-blur-xl hover:-translate-y-1 transition-transform shadow-depth">
              <f.icon className="h-6 w-6 text-white/80 mb-4 animate-pulse-soft" />
              <h3 className="font-heading text-white mb-2">{f.title}</h3>
              <p className="font-body text-white/70 text-sm leading-7">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function ProcessTimeline() {
  const steps = ['اكتشاف واحتياج', 'تصميم الحل', 'التنفيذ والربط', 'الاختبار والإطلاق', 'القياس والتحسين']
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="font-heading text-3xl md:text-4xl text-white text-right mb-10">كيف نعمل؟</h2>
        <div className="grid gap-6">
          {steps.map((s, i) => (
            <motion.div key={i} initial={{ opacity: 0, x: i % 2 === 0 ? 20 : -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1, duration: .6 }} className="relative rounded-2xl bg-white/5 border border-white/10 p-5 backdrop-blur-xl shadow-depth">
              <div className="absolute top-1/2 -translate-y-1/2 w-2 h-2 rounded-full right-4 bg-neon-purple shadow-glow" />
              <p className="font-body text-white/80">{s}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Testimonials() {
  const items = [
    { name: 'شركة ألف', text: 'خفضنا مدة التقصي من 3 أيام إلى 3 ساعات باستخدام وكلاء موتمّت.' },
    { name: 'مجموعة باء', text: 'تكامل ذكي مع CRM رفع التحويل 27% خلال شهر.' },
    { name: 'مؤسسة جيم', text: 'تقارير لحظية حسّنت قرارات الإدارة بشكل ملحوظ.' },
  ]

  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="font-heading text-3xl md:text-4xl text-white text-right mb-10">شهادات العملاء</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {items.map((t, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * .1 }} className="rounded-2xl bg-white/5 border border-white/10 p-6 backdrop-blur-xl shadow-depth">
              <p className="font-body text-white/80 leading-8">“{t.text}”</p>
              <p className="mt-4 text-sm text-neon-aqua">{t.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Pricing() {
  const plans = [
    { name: 'أساسي', price: '1,990 ر.س', features: ['إعداد وكيل واحد', 'تكامل واحد', 'تقارير شهرية'] },
    { name: 'احترافي', price: '4,990 ر.س', features: ['وكلاء متعددة', 'تكاملات متعددة', 'تقارير أسبوعية'] },
    { name: 'مخصص', price: 'حسب الطلب', features: ['حلول حسب الاحتياج', 'إدارة مخصصة', 'دعم 24/7'] },
  ]

  return (
    <section id="pricing" className="py-20">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="font-heading text-3xl md:text-4xl text-white text-right mb-10">باقات الأسعار</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((p, i) => (
            <motion.div key={i} whileHover={{ scale: 1.03, y: -4 }} className="rounded-2xl bg-white/5 border border-white/10 p-6 backdrop-blur-xl shadow-depth">
              <h3 className="font-heading text-white text-xl mb-3">{p.name}</h3>
              <p className="text-neon-aqua text-3xl font-bold mb-4">{p.price}</p>
              <ul className="space-y-2">
                {p.features.map((f, idx) => (
                  <li key={idx} className="text-white/80 text-sm flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-neon-purple" />
                    {f}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function FinalCTA() {
  return (
    <section id="cta" className="py-24">
      <div className="mx-auto max-w-5xl px-4">
        <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-neon-purple/15 to-neon-aqua/10 p-10 text-center shadow-glow">
          <h3 className="font-heading text-white text-2xl md:text-3xl mb-4">ابدأ اليوم — دع موتمّت يشغّل عملك</h3>
          <p className="font-body text-white/70 mb-6">تواصل معنا لنصمم لك نظام أتمتة متكامل يناسب نشاطك.</p>
          <a href="/contact" className="inline-flex items-center justify-center px-6 py-3 rounded-2xl bg-white/10 ring-1 ring-white/15 text-white hover:bg-white/20 transition shadow-glow">تواصل الآن</a>
        </div>
      </div>
    </section>
  )
}
