import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowLeft, ArrowRight, Send } from 'lucide-react'

import ProjectType from './steps/ProjectType'
import BusinessGoals from './steps/BusinessGoals'
import Features from './steps/Features'
import DesignStyle from './steps/DesignStyle'
import Results from './Results'

const STEPS = [
  { id: 1, label: 'Project Type', component: ProjectType },
  { id: 2, label: 'Goals', component: BusinessGoals },
  { id: 3, label: 'Features', component: Features },
  { id: 4, label: 'Design Style', component: DesignStyle },
]

const slideVariants = {
  enter: (direction) => ({
    x: direction > 0 ? 100 : -100,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction) => ({
    x: direction < 0 ? 100 : -100,
    opacity: 0,
  }),
}

export default function Questionnaire() {
  const [step, setStep] = useState(1)
  const [direction, setDirection] = useState(1)
  const [showResults, setShowResults] = useState(false)
  const [data, setData] = useState({
    projectType: '',
    businessGoals: '',
    features: [],
    designStyle: '',
  })

  const update = (partial) => setData((prev) => ({ ...prev, ...partial }))

  const canProceed = () => {
    switch (step) {
      case 1: return !!data.projectType
      case 2: return true // goals is optional
      case 3: return true // features is optional
      case 4: return !!data.designStyle
      default: return false
    }
  }

  const next = () => {
    if (step < 4) {
      setDirection(1)
      setStep((s) => s + 1)
    } else {
      setShowResults(true)
    }
  }

  const prev = () => {
    if (showResults) {
      setShowResults(false)
    } else if (step > 1) {
      setDirection(-1)
      setStep((s) => s - 1)
    }
  }

  const StepComponent = STEPS[step - 1]?.component

  return (
    <section id="questionnaire" className="py-24 px-6">
      <div className="max-w-2xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-[var(--color-accent)] text-sm font-medium tracking-wider uppercase">
            Get Started
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4">
            Let's Build Something Great
          </h2>
          <p className="text-[var(--color-text-muted)] max-w-lg mx-auto">
            Answer a few quick questions to get an estimated timeline and project overview.
          </p>
        </motion.div>

        {/* Form Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass rounded-2xl p-6 sm:p-8"
        >
          {/* Progress Bar */}
          {!showResults && (
            <div className="mb-8">
              <div className="flex items-center justify-between mb-3">
                {STEPS.map(({ id, label }) => (
                  <div
                    key={id}
                    className={`text-xs font-medium transition-colors ${
                      id <= step ? 'text-[var(--color-accent)]' : 'text-[var(--color-text-muted)]/50'
                    }`}
                  >
                    <span className="hidden sm:inline">{label}</span>
                    <span className="sm:hidden">{id}</span>
                  </div>
                ))}
              </div>
              <div className="h-1.5 bg-[var(--color-bg-light)] rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-[var(--color-accent)] to-indigo-400 rounded-full"
                  initial={false}
                  animate={{ width: `${(step / 4) * 100}%` }}
                  transition={{ duration: 0.4, ease: 'easeOut' }}
                />
              </div>
            </div>
          )}

          {/* Step Content */}
          <div className="min-h-[340px] relative">
            <AnimatePresence mode="wait" custom={direction}>
              {showResults ? (
                <motion.div
                  key="results"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                >
                  <Results data={data} />
                </motion.div>
              ) : (
                <motion.div
                  key={step}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.3, ease: 'easeOut' }}
                >
                  {StepComponent && <StepComponent data={data} onChange={update} />}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Navigation */}
          {!showResults && (
            <div className="flex items-center justify-between mt-8 pt-6 border-t border-[var(--color-border)]">
              <button
                onClick={prev}
                disabled={step === 1}
                className={`flex items-center gap-2 text-sm font-medium px-4 py-2.5 rounded-lg transition-all cursor-pointer ${
                  step === 1
                    ? 'text-[var(--color-text-muted)]/30 cursor-not-allowed'
                    : 'text-[var(--color-text-muted)] hover:text-white glass'
                }`}
              >
                <ArrowLeft size={16} />
                Back
              </button>

              <button
                onClick={next}
                disabled={!canProceed()}
                className={`flex items-center gap-2 text-sm font-semibold px-6 py-2.5 rounded-lg transition-all cursor-pointer ${
                  canProceed()
                    ? 'bg-[var(--color-accent)] hover:bg-[var(--color-accent-hover)] text-white glow-accent'
                    : 'bg-[var(--color-bg-light)] text-[var(--color-text-muted)]/50 cursor-not-allowed'
                }`}
              >
                {step === 4 ? (
                  <>
                    View Summary
                    <Send size={16} />
                  </>
                ) : (
                  <>
                    Continue
                    <ArrowRight size={16} />
                  </>
                )}
              </button>
            </div>
          )}

          {/* Back button on results */}
          {showResults && (
            <div className="mt-6 pt-6 border-t border-[var(--color-border)]">
              <button
                onClick={prev}
                className="flex items-center gap-2 text-sm font-medium text-[var(--color-text-muted)] hover:text-white glass px-4 py-2.5 rounded-lg transition-all cursor-pointer"
              >
                <ArrowLeft size={16} />
                Back to Form
              </button>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  )
}
