import { motion } from 'framer-motion'
import { Clock, DollarSign, AlertTriangle, Video, ArrowRight, CheckCircle2, Calendar, Shield } from 'lucide-react'

/* ── Business Logic ── */

const TIMELINE_MAP = {
  landing:   { min: 2, max: 2,  label: '2 weeks' },
  ecommerce: { min: 5, max: 8,  label: '5–8 weeks' },
  corporate: { min: 3, max: 4,  label: '3–4 weeks' },
  custom:    { min: 4, max: 6,  label: '4–6 weeks' },
}

function calculateTimeline(projectType, features) {
  const base = TIMELINE_MAP[projectType] || TIMELINE_MAP.custom
  const featureCount = (features || []).length
  const extraWeeks = Math.floor(featureCount / 3)

  const min = Math.max(2, base.min + extraWeeks)
  const max = Math.max(2, base.max + extraWeeks)

  return min === max ? `${min} weeks` : `${min}–${max} weeks`
}

const MILESTONES = [
  {
    pct: '33%',
    label: 'Deposit',
    description: 'Initial booking to secure your project slot',
    icon: Shield,
    color: 'text-blue-400',
  },
  {
    pct: '33%',
    label: 'Design Approval',
    description: 'After UI/UX phase completion and your sign-off',
    icon: CheckCircle2,
    color: 'text-emerald-400',
  },
  {
    pct: '34%',
    label: 'Handover',
    description: 'Final delivery — all assets, code, and deployment',
    icon: Calendar,
    color: 'text-purple-400',
  },
]

/* ── Component ── */

export default function Results({ data }) {
  const timeline = calculateTimeline(data.projectType, data.features)
  const typeName = TIMELINE_MAP[data.projectType]
    ? { landing: 'Landing Page', ecommerce: 'E-Commerce', corporate: 'Corporate', custom: 'Custom Project' }[data.projectType]
    : 'Custom Project'

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Summary Header */}
      <div className="text-center mb-8">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', stiffness: 200, delay: 0.2 }}
          className="w-16 h-16 rounded-2xl bg-[var(--color-accent)]/20 mx-auto mb-4 flex items-center justify-center"
        >
          <CheckCircle2 size={32} className="text-[var(--color-accent)]" />
        </motion.div>
        <h3 className="text-2xl font-bold mb-2">Your Project Summary</h3>
        <p className="text-sm text-[var(--color-text-muted)]">
          Here's an overview based on your selections
        </p>
      </div>

      {/* Timeline Card */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3 }}
        className="glass rounded-xl p-6 mb-6"
      >
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center">
            <Clock size={20} className="text-blue-400" />
          </div>
          <div>
            <div className="text-sm text-[var(--color-text-muted)]">Estimated Delivery</div>
            <div className="text-xl font-bold text-[var(--color-accent)]">{timeline}</div>
          </div>
        </div>
        <div className="flex flex-wrap gap-2 text-xs">
          <span className="px-3 py-1 rounded-full bg-[var(--color-bg-light)] text-[var(--color-text-muted)]">
            📋 {typeName}
          </span>
          {(data.features || []).length > 0 && (
            <span className="px-3 py-1 rounded-full bg-[var(--color-bg-light)] text-[var(--color-text-muted)]">
              ⚙️ {data.features.length} feature{data.features.length !== 1 ? 's' : ''}
            </span>
          )}
          {data.designStyle && (
            <span className="px-3 py-1 rounded-full bg-[var(--color-bg-light)] text-[var(--color-text-muted)]">
              🎨 {data.designStyle.charAt(0).toUpperCase() + data.designStyle.slice(1)}
            </span>
          )}
        </div>
      </motion.div>

      {/* Payment Milestones */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.4 }}
        className="glass rounded-xl p-6 mb-6"
      >
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 rounded-lg bg-emerald-500/20 flex items-center justify-center">
            <DollarSign size={20} className="text-emerald-400" />
          </div>
          <div>
            <div className="text-sm font-semibold">Payment Milestones</div>
            <div className="text-xs text-[var(--color-text-muted)]">Split into 3 clear phases</div>
          </div>
        </div>

        <div className="space-y-4">
          {MILESTONES.map(({ pct, label, description, icon: Icon, color }, i) => (
            <div key={label} className="flex items-start gap-4">
              <div className="relative flex flex-col items-center">
                <div className={`w-8 h-8 rounded-full bg-[var(--color-bg-light)] flex items-center justify-center ${color}`}>
                  <Icon size={16} />
                </div>
                {i < MILESTONES.length - 1 && (
                  <div className="w-px h-6 bg-[var(--color-border)] mt-1" />
                )}
              </div>
              <div className="flex-1 pb-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">{label}</span>
                  <span className="text-sm font-bold text-[var(--color-accent)]">{pct}</span>
                </div>
                <p className="text-xs text-[var(--color-text-muted)] mt-0.5">{description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Progress bar */}
        <div className="mt-4 h-2 bg-[var(--color-bg-light)] rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            transition={{ duration: 1.5, delay: 0.6, ease: 'easeOut' }}
            className="h-full rounded-full bg-gradient-to-r from-blue-500 via-emerald-500 to-purple-500"
          />
        </div>
      </motion.div>

      {/* Disclaimer */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="rounded-xl border border-amber-500/30 bg-amber-500/5 p-5 mb-6"
      >
        <div className="flex items-start gap-3">
          <AlertTriangle size={18} className="text-amber-400 mt-0.5 flex-shrink-0" />
          <div>
            <div className="text-sm font-medium text-amber-300 mb-1">Important Note</div>
            <p className="text-xs text-[var(--color-text-muted)] leading-relaxed">
              This form is for <strong className="text-[var(--color-text)]">conceptualizing only</strong>.
              A <strong className="text-[var(--color-text)]">Discovery Call</strong> (Video/Chat) is
              mandatory before any final contract is signed. Timelines and pricing are estimates and
              may vary based on project specifics discussed during the call.
            </p>
          </div>
        </div>
      </motion.div>

      {/* CTA */}
      <motion.a
        href="mailto:hello@devsk.com?subject=Discovery Call Request"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="flex items-center justify-center gap-3 w-full bg-[var(--color-accent)] hover:bg-[var(--color-accent-hover)] text-white font-semibold py-4 rounded-xl transition-all duration-300 glow-accent hover:shadow-lg hover:shadow-blue-500/25"
      >
        <Video size={20} />
        Book a Discovery Call
        <ArrowRight size={16} />
      </motion.a>
    </motion.div>
  )
}
