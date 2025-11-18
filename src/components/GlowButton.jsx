import { motion } from 'framer-motion'

export default function GlowButton({ children, color = 'purple', className = '', ...props }) {
  const glow = color === 'aqua' ? 'shadow-glow-aqua from-neon-aqua/20 to-transparent' : 'shadow-glow from-neon-purple/20 to-transparent'
  const bg = color === 'aqua' ? 'bg-neon-aqua/10 hover:bg-neon-aqua/20' : 'bg-neon-purple/10 hover:bg-neon-purple/20'
  const ring = color === 'aqua' ? 'ring-neon-aqua/40' : 'ring-neon-purple/40'

  return (
    <motion.button
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.98 }}
      className={`relative overflow-hidden rounded-2xl px-6 py-3 text-sm font-bold text-white backdrop-blur-md ring-1 ${ring} ${bg} ${glow} transition-colors ${className}`}
      {...props}
    >
      <span className="relative z-10">{children}</span>
      <span className={`pointer-events-none absolute inset-0 bg-gradient-to-tr ${glow} opacity-60`} />
    </motion.button>
  )
}
