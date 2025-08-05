
import { ThemeProvider } from './contexts/ThemeContext'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Internships from './components/Internships'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ParticleBackground from './components/ParticleBackground'

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-black text-white">
        <ParticleBackground />
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Internships />
        <Contact />
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default App 