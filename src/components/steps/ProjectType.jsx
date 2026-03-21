import { motion } from 'framer-motion'
import { Globe, ShoppingCart, Building2, Layers } from 'lucide-react'

const projectTypes = [
  {
    id: 'landing',
    label: 'Landing Page',
    description: 'Single-page site to promote a product or service',
    icon: Globe,
    timeline: '2 weeks',
  },
  {
    id: 'ecommerce',
    label: 'E-Commerce',
    description: 'Online store with product catalog and payments',
    icon: ShoppingCart,
    timeline: '5–8 weeks',
  },
  {
    id: 'corporate',
    label: 'Corporate',
    description: 'Multi-page business website with CMS',
    icon: Building2,
    timeline: '3–4 weeks',
  },
  {
    id: 'custom',
    label: 'Custom Project',
    description: 'Web app or unique build with custom features',
    icon: Layers,
    timeline: '4–6 weeks',
  },
]

export default function ProjectType({ data, onChange }) {
  return (
    <div>
      <h3 className="text-xl font-semibold mb-2">What type of project do you need?</h3>
      <p className="text-sm text-[var(--color-text-muted)] mb-6">
        Select the option that best describes your project.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {projectTypes.map((type) => {
          const Icon = type.icon
          const isActive = data.projectType === type.id

          return (
            <motion.button
              key={type.id}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => onChange({ projectType: type.id })}
              className={`relative p-5 rounded-xl text-left transition-all duration-200 cursor-pointer ${
                isActive
                  ? 'bg-[var(--color-accent)]/10 border-2 border-[var(--color-accent)] shadow-lg shadow-blue-500/10'
                  : 'glass hover:border-[var(--color-text-muted)]/30'
              }`}
            >
              <div className="flex items-start gap-4">
                <div
                  className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${
                    isActive
                      ? 'bg-[var(--color-accent)] text-white'
                      : 'bg-[var(--color-bg-light)] text-[var(--color-text-muted)]'
                  }`}
                >
                  <Icon size={20} />
                </div>
                <div>
                  <div className="font-semibold text-sm">{type.label}</div>
                  <div className="text-xs text-[var(--color-text-muted)] mt-1">
                    {type.description}
                  </div>
                  <div className="text-xs text-[var(--color-accent)] mt-2 font-medium">
                    Est. {type.timeline}
                  </div>
                </div>
              </div>

              {isActive && (
                <motion.div
                  layoutId="activeType"
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
