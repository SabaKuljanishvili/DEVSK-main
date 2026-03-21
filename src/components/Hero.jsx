import { motion } from 'framer-motion'
import { ArrowDown, Sparkles } from 'lucide-react'

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden gradient-mesh"
    >
      {/* Animated background orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            x: [0, 30, -20, 0],
            y: [0, -40, 20, 0],
            scale: [1, 1.1, 0.95, 1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-[var(--color-accent)] rounded-full opacity-[0.07] blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -30, 20, 0],
            y: [0, 30, -30, 0],
            scale: [1, 0.9, 1.15, 1],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-indigo-500 rounded-full opacity-[0.07] blur-3xl"
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 mb-8"
        >
          <Sparkles size={14} className="text-[var(--color-accent)]" />
          <span className="text-xs font-medium text-[var(--color-text-muted)]">
            Available for new projects
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="text-5xl sm:text-6xl md:text-7xl font-bold leading-tight tracking-tight mb-6"
        >
          I craft{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-accent)] to-indigo-400">
            digital experiences
          </span>
          <br />
          that drive results.
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="text-lg md:text-xl text-[var(--color-text-muted)] max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Full-stack developer specializing in high-performance websites and web apps.
          From concept to launch — pixel-perfect, fast, and built to convert.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#questionnaire"
            className="group relative bg-[var(--color-accent)] hover:bg-[var(--color-accent-hover)] text-white font-semibold px-8 py-3.5 rounded-xl transition-all duration-300 glow-accent hover:shadow-lg hover:shadow-blue-500/25"
          >
            Start a Project
            <span className="absolute inset-0 rounded-xl bg-white opacity-0 group-hover:opacity-10 transition-opacity" />
          </a>
          <a
            href="#portfolio"
            className="group flex items-center gap-2 text-[var(--color-text-muted)] hover:text-white font-medium px-8 py-3.5 rounded-xl glass hover:border-[var(--color-accent)] transition-all duration-300"
          >
            View Portfolio
            <ArrowDown size={16} className="group-hover:translate-y-0.5 transition-transform" />
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-20 grid grid-cols-3 gap-8 max-w-md mx-auto"
        >
          {[
            { value: '50+', label: 'Projects' },
            { value: '3+', label: 'Years Exp.' },
            { value: '100%', label: 'Satisfaction' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl font-bold text-white">{stat.value}</div>
              <div className="text-xs text-[var(--color-text-muted)] mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="w-5 h-8 rounded-full border-2 border-[var(--color-border)] flex justify-center pt-1.5"
        >
          <div className="w-1 h-2 rounded-full bg-[var(--color-text-muted)]" />
        </motion.div>
      </motion.div>
    </section>
  )
}
