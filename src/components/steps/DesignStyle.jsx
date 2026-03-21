import { motion } from 'framer-motion'
import { Minus, Zap, Briefcase, Sparkles } from 'lucide-react'

const styles = [
  {
    id: 'minimalist',
    label: 'Minimalist',
    description: 'Clean, spacious, and typography-focused',
    icon: Minus,
    colors: ['#f8fafc', '#e2e8f0', '#0f172a'],
  },
  {
    id: 'bold',
    label: 'Bold & Dynamic',
    description: 'Vibrant colors, strong visuals, high impact',
    icon: Zap,
    colors: ['#f43f5e', '#8b5cf6', '#06b6d4'],
  },
  {
    id: 'corporate',
    label: 'Corporate',
    description: 'Professional, trustworthy, structured',
    icon: Briefcase,
    colors: ['#1e3a5f', '#2563eb', '#f1f5f9'],
  },
  {
    id: 'creative',
    label: 'Creative',
    description: 'Artistic, expressive, and unique layouts',
    icon: Sparkles,
    colors: ['#ec4899', '#a855f7', '#facc15'],
  },
]

export default function DesignStyle({ data, onChange }) {
  return (
    <div>
      <h3 className="text-xl font-semibold mb-2">Choose your design style</h3>
      <p className="text-sm text-[var(--color-text-muted)] mb-6">
        Select the visual direction that best represents your brand.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {styles.map(({ id, label, description, icon: Icon, colors }) => {
          const isActive = data.designStyle === id

          return (
            <motion.button
              key={id}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => onChange({ designStyle: id })}
              className={`relative p-5 rounded-xl text-left transition-all duration-200 cursor-pointer ${
                isActive
                  ? 'bg-[var(--color-accent)]/10 border-2 border-[var(--color-accent)] shadow-lg shadow-blue-500/10'
                  : 'glass hover:border-[var(--color-text-muted)]/30'
              }`}
            >
              {/* Color palette preview */}
              <div className="flex gap-1.5 mb-4">
                {colors.map((color, i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-lg"
                    style={{ backgroundColor: color }}
                  />
                ))}
              </div>

              <div className="flex items-center gap-2 mb-1">
                <Icon
                  size={16}
                  className={isActive ? 'text-[var(--color-accent)]' : 'text-[var(--color-text-muted)]'}
                />
                <span className="font-semibold text-sm">{label}</span>
              </div>
              <p className="text-xs text-[var(--color-text-muted)]">{description}</p>

              {isActive && (
                <motion.div
                  layoutId="activeStyle"
                  className="absolute top-3 right-3 w-5 h-5 rounded-full bg-[var(--color-accent)] flex items-center justify-center"
                >
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M2.5 6L5 8.5L9.5 3.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </motion.div>
              )}
            </motion.button>
          )
        })}
      </div>
    </div>
  )
}
