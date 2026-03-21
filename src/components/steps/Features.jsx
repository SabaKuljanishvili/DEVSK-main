import { motion } from 'framer-motion'
import {
  Mail, CreditCard, FileText, Lock,
  BarChart3, Search, Languages, Database
} from 'lucide-react'

const features = [
  { id: 'contact', label: 'Contact Form', icon: Mail, description: 'Email inquiry form' },
  { id: 'payments', label: 'Payments', icon: CreditCard, description: 'Stripe / PayPal integration' },
  { id: 'blog', label: 'Blog / CMS', icon: FileText, description: 'Content management system' },
  { id: 'auth', label: 'Authentication', icon: Lock, description: 'User login & registration' },
  { id: 'analytics', label: 'Analytics', icon: BarChart3, description: 'Traffic & performance tracking' },
  { id: 'seo', label: 'SEO Optimization', icon: Search, description: 'Search engine ranking' },
  { id: 'multilang', label: 'Multi-language', icon: Languages, description: 'i18n support' },
  { id: 'cms', label: 'Admin Panel', icon: Database, description: 'Backend management dashboard' },
]

export default function Features({ data, onChange }) {
  const selected = data.features || []

  const toggle = (id) => {
    const next = selected.includes(id)
      ? selected.filter((f) => f !== id)
      : [...selected, id]
    onChange({ features: next })
  }

  return (
    <div>
      <h3 className="text-xl font-semibold mb-2">What features do you need?</h3>
      <p className="text-sm text-[var(--color-text-muted)] mb-6">
        Select all the features you'd like included in your project.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {features.map(({ id, label, icon: Icon, description }) => {
          const isActive = selected.includes(id)

          return (
            <motion.button
              key={id}
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => toggle(id)}
              className={`flex items-center gap-4 p-4 rounded-xl text-left transition-all duration-200 cursor-pointer ${
                isActive
                  ? 'bg-[var(--color-accent)]/10 border-2 border-[var(--color-accent)]'
                  : 'glass hover:border-[var(--color-text-muted)]/30'
              }`}
            >
              {/* Checkbox */}
              <div
                className={`w-5 h-5 rounded flex-shrink-0 flex items-center justify-center transition-all ${
                  isActive
                    ? 'bg-[var(--color-accent)] text-white'
                    : 'border border-[var(--color-text-muted)]/40'
                }`}
              >
                {isActive && (
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M2.5 6L5 8.5L9.5 3.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )}
              </div>

              <Icon
                size={18}
                className={isActive ? 'text-[var(--color-accent)]' : 'text-[var(--color-text-muted)]'}
              />

              <div>
                <div className="text-sm font-medium">{label}</div>
                <div className="text-xs text-[var(--color-text-muted)]">{description}</div>
              </div>
            </motion.button>
          )
        })}
      </div>

      <p className="text-xs text-[var(--color-text-muted)] mt-4">
        {selected.length} feature{selected.length !== 1 ? 's' : ''} selected
      </p>
    </div>
  )
}
