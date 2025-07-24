import About from '@/pages/About'
import Certificates from '@/pages/Certificates'
import Contact from '@/pages/Contact'
import Experience from '@/pages/Experience'
import Hero from '@/pages/Hero'
import Projects from '@/pages/Projects'
import Services from '@/pages/Services'
import Skills from '@/pages/Skills'


const Home = () => {
  return (
    <div>
      <Hero/>
      <section id="about">
        <About/>
      </section>
      <section id="experience">
        <Experience/>
      </section>
      <section id="skills">
        <Skills/>
      </section>
      <section id="projects">
        <Projects/>
      </section>
      <section id="services">
        <Services/>
      </section>
      <section id="certificates">
        <Certificates/>
      </section>
      <section id="contact">
        <Contact/>
      </section>
    </div>
  )
}

export default Home
