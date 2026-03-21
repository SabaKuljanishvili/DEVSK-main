import { Target, TrendingUp, Users, Megaphone } from 'lucide-react'

const prompts = [
  { icon: Target, text: 'What is the primary purpose of your website?' },
  { icon: TrendingUp, text: 'What does success look like for this project?' },
  { icon: Users, text: 'Who is your target audience?' },
  { icon: Megaphone, text: 'How will people find your website?' },
]

export default function BusinessGoals({ data, onChange }) {
  return (
    <div>
      <h3 className="text-xl font-semibold mb-2">What are your business goals?</h3>
      <p className="text-sm text-[var(--color-text-muted)] mb-6">
        Help me understand what you want your website to achieve.
      </p>

      {/* Guided prompts */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
        {prompts.map(({ icon: Icon, text }) => (
          <div key={text} className="flex items-start gap-3 glass rounded-lg p-3">
            <Icon size={16} className="text-[var(--color-accent)] mt-0.5 flex-shrink-0" />
            <span className="text-xs text-[var(--color-text-muted)]">{text}</span>
          </div>
        ))}
      </div>

      {/* Textarea */}
      <textarea
        value={data.businessGoals || ''}
        onChange={(e) => onChange({ businessGoals: e.target.value })}
        placeholder="Describe your project goals, target audience, and what you hope to achieve with this website..."
        rows={6}
        className="w-full bg-[var(--color-bg-light)] border border-[var(--color-border)] rounded-xl px-4 py-3 text-sm text-[var(--color-text)] placeholder-[var(--color-text-muted)]/50 focus:outline-none focus:border-[var(--color-accent)] focus:ring-1 focus:ring-[var(--color-accent)]/30 transition-all resize-none"
      />
      <p className="text-xs text-[var(--color-text-muted)] mt-2 text-right">
        {(data.businessGoals || '').length} / 500 characters
      </p>
    </div>
  )
}
