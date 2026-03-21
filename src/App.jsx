import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Portfolio from './components/Portfolio'
import Questionnaire from './components/Questionnaire'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-[var(--color-bg)] text-[var(--color-text)]">
      <Navbar />
      <main>
        <Hero />
        <Portfolio />
        <Questionnaire />
      </main>
      <Footer />
    </div>
  )
}

export default App
