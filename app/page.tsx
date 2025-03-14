import Hero from "@/components/Hero"
import Navbar from "@/components/Navbar"
import About from "@/components/About"
import Experience from "@/components/Experience"
import Skills from "@/components/Skills"
import Projects from "@/components/Projects"
import Contact from "@/components/Contact"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-pattern">
      <Navbar />
      <section id="home">
        <Hero />
      </section>
      <section id="about" className="py-16 bg-muted/30 dark:bg-muted/10">
        <About />
      </section>
      <section id="experience" className="py-16">
        <Experience />
      </section>
      <section id="skills" className="py-16 bg-muted/30 dark:bg-muted/10">
        <Skills />
      </section>
      <section id="projects" className="py-16">
        <Projects />
      </section>
      <section id="contact" className="py-16 bg-muted/30 dark:bg-muted/10">
        <Contact />
      </section>
      <Footer />
    </main>
  )
}

