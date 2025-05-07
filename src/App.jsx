import Footer from "./components/Footer.jsx"
import About from "./sections/About.jsx"
import Contact from "./sections/Contact.jsx"
import Hero from "./sections/Hero.jsx"
import Navbar from "./sections/Navbar.jsx"
import Projects from "./sections/Projects.jsx"

const App = () => {
  return (
    <main className="max-w-7xl mx-auto">
      <Navbar /> 
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </main>
  )
}

export default App