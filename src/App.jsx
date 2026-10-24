import './App.css'
import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import Work from './components/work/Work'
import About from './components/about/About'
import Skills from './components/skill/Skills'
import Contact from './components/letsTalk/Contact'

function App() {

  return (
   <>
   <Navbar />
   <main>

    <Hero />
    <Work />
    <About />
    <Skills />
    <Contact />
   </main>
   </>
  )
}

export default App
