import { motion } from 'framer-motion'
import GlowButton from './GlowButton'

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-36 pb-24">
      {/* Animated gradient background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -inset-40 bg-[radial-gradient(60%_60%_at_70%_20%,rgba(124,58,237,0.25),transparent_60%),radial-gradient(50%_50%_at_30%_80%,rgba(0,209,178,0.18),transparent_60%)] animate-bg-pan" />
        {/* Faint particles */}
        <div className="absolute inset-0 opacity-30">
          {[...Array(30)].map((_, i) => (
            <motion.span
              key={i}
              className="absolute h-1 w-1 rounded-full bg-white/30"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 8 + (i % 5), repeat: Infinity, delay: i * 0.2 }}
              style={{ top: `${Math.random() * 100}%`, left: `${Math.random() * 100}%` }}
            />
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div className="text-right">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.21,1,0.21,1] }}
              className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight text-white mb-6"
            >
              حلول أتمتة ذكية تُشغّل عملك نيابةً عنك
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: .2, duration: .8 }}
              className="font-body text-white/70 text-lg leading-8 mb-8"
            >
              نبني لك أنظمة ذكاء اصطناعي وأتمتة متكاملة ترفع الإنتاجية وتخفض التكاليف.
            </motion.p>

            <div className="flex items-center justify-end gap-3">
              <GlowButton color="purple">ابدأ الآن</GlowButton>
              <GlowButton color="aqua" className="ring-1">احجز استشارة</GlowButton>
            </div>
          </div>

          <div className="relative">
            {/* Transparent outlined giant title */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 0.9, y: 0 }}
              transition={{ delay: .25, duration: 1 }}
              className="select-none text-[22vw] lg:text-[12vw] leading-none font-black font-heading text-transparent bg-clip-text  mb-4 text-right"
              style={{ WebkitTextStroke: '1px rgba(255,255,255,0.12)', backgroundImage: 'linear-gradient(90deg, rgba(255,255,255,0.05), rgba(255,255,255,0))' }}
            >
              موتمّت
            </motion.div>

            {/* Floating glass card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: .4, duration: .9 }}
              whileHover={{ y: -4 }}
              className="absolute bottom-6 right-0 left-0 mx-auto w-full max-w-md rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 p-5 shadow-depth"
            >
              <div className="flex items-center justify-between text-white">
                <div>
                  <p className="text-sm text-white/70">جاهز للانطلاق؟</p>
                  <p className="font-heading text-lg">أول مشروع أتمتة خلال 7 أيام</p>
                </div>
                <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-neon-purple to-neon-aqua animate-pulse-soft" />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
