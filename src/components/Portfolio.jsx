import { motion } from 'framer-motion'
import { ExternalLink, Code2, ShoppingCart, Building2, Palette, Globe, Smartphone, BarChart3 } from 'lucide-react'

const projects = [
  {
    title: 'Nova E-Commerce',
    description: 'A full-featured online store with payments, inventory management, and analytics dashboard.',
    tech: ['React', 'Node.js', 'Stripe', 'PostgreSQL'],
    icon: ShoppingCart,
    gradient: 'from-blue-500/20 to-indigo-500/20',
  },
  {
    title: 'Meridian Corp',
    description: 'Modern corporate website with CMS, multilingual support, and lead generation forms.',
    tech: ['Next.js', 'Tailwind', 'Sanity CMS'],
    icon: Building2,
    gradient: 'from-emerald-500/20 to-teal-500/20',
  },
  {
    title: 'Artistry Studio',
    description: 'Creative portfolio with smooth animations, image galleries, and contact system.',
    tech: ['React', 'Framer Motion', 'GSAP'],
    icon: Palette,
    gradient: 'from-purple-500/20 to-pink-500/20',
  },
  {
    title: 'HealthTrack Pro',
    description: 'SaaS dashboard for health metrics with real-time data visualization and auth.',
    tech: ['Angular', 'Firebase', 'D3.js'],
    icon: BarChart3,
    gradient: 'from-orange-500/20 to-red-500/20',
  },
  {
    title: 'TravelWise App',
    description: 'Mobile-first travel booking platform with search, filtering, and payment integration.',
    tech: ['React Native', 'Express', 'MongoDB'],
    icon: Globe,
    gradient: 'from-cyan-500/20 to-blue-500/20',
  },
  {
    title: 'DevSync Tools',
    description: 'Developer productivity suite with project management, code review, and CI/CD integration.',
    tech: ['Vue.js', 'Go', 'Docker', 'Redis'],
    icon: Code2,
    gradient: 'from-yellow-500/20 to-amber-500/20',
  },
]

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[var(--color-accent)] text-sm font-medium tracking-wider uppercase">
            Portfolio
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4">
            Featured Projects
          </h2>
          <p className="text-[var(--color-text-muted)] max-w-lg mx-auto">
            A selection of recent work across various industries and technologies.
          </p>
        </motion.div>

        {/* Project Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((project) => {
            const Icon = project.icon
            return (
              <motion.div
                key={project.title}
                variants={cardVariants}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="group glass rounded-2xl overflow-hidden cursor-pointer"
              >
                {/* Card Header with gradient */}
                <div className={`h-40 bg-gradient-to-br ${project.gradient} flex items-center justify-center relative overflow-hidden`}>
                  <Icon
                    size={48}
                    className="text-white/40 group-hover:text-white/70 group-hover:scale-110 transition-all duration-300"
                  />
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-[var(--color-bg)]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="flex items-center gap-2 text-white font-medium text-sm">
                      <ExternalLink size={16} />
                      View Project
                    </div>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-5">
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-[var(--color-text-muted)] mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="text-xs px-2.5 py-1 rounded-md bg-[var(--color-bg-light)] text-[var(--color-text-muted)] font-medium"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
