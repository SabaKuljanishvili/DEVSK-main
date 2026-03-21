import { Github, Linkedin, Mail, Heart } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)] bg-[var(--color-bg)]">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-[var(--color-accent)] flex items-center justify-center font-bold text-white text-sm">
                D
              </div>
              <span className="text-lg font-semibold tracking-tight">
                DEV<span className="text-[var(--color-accent)]">SK</span>
              </span>
            </div>
            <p className="text-sm text-[var(--color-text-muted)] leading-relaxed max-w-xs">
              Crafting premium digital experiences for forward-thinking brands and businesses.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold mb-4">Quick Links</h4>
            <div className="flex flex-col gap-2">
              {[
                { label: 'Home', href: '#home' },
                { label: 'Portfolio', href: '#portfolio' },
                { label: 'Start a Project', href: '#questionnaire' },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-[var(--color-text-muted)] hover:text-white transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold mb-4">Connect</h4>
            <div className="flex gap-3">
              {[
                { icon: Github, href: '#', label: 'GitHub' },
                { icon: Linkedin, href: '#', label: 'LinkedIn' },
                { icon: Mail, href: 'mailto:hello@devsk.com', label: 'Email' },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-10 h-10 rounded-lg glass flex items-center justify-center text-[var(--color-text-muted)] hover:text-[var(--color-accent)] hover:border-[var(--color-accent)] transition-all"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-[var(--color-border)] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[var(--color-text-muted)]">
            © {new Date().getFullYear()} DEVSK. All rights reserved.
          </p>
          <p className="text-xs text-[var(--color-text-muted)] flex items-center gap-1">
            Made with <Heart size={12} className="text-red-400" /> and code
          </p>
        </div>
      </div>
    </footer>
  )
}
