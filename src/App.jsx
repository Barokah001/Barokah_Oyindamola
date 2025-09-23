import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import About from './components/About'
import Footer from './components/Footer'
import SkillsSection from './components/SkillsSection'
import Contacts from './components/Contacts'
import Projects from './components/Projects'

const App = () => {
  return (
    <main className='min-h-screen'>
      <Navbar />
      <HeroSection />
      <About />
      <SkillsSection />
      <Projects />
      <Contacts />
      <Footer />
    </main>
  )
}

export default App
