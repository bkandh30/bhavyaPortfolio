import Hero from "@/components/Hero"
import Navbar from "@/components/Navbar"
import About from "@/components/About"
import Experience from "@/components/Experience"
import Skills from "@/components/Skills"
import Projects from "@/components/Projects"
import Contact from "@/components/Contact"
import Footer from "@/components/Footer"
import { Providers } from "./providers"

export default function Home() {
  return (
    <Providers>
      <main className="min-h-screen bg-pattern">
        <Navbar />
        <section id="home">
          <Hero />
        </section>
        <section id="about" className="py-16 bg-muted/30 dark:bg-muted/10 scroll-mt-24">
          <About />
        </section>
        {/* Added negative margin to ensure the section starts in view */}
        <section id="experience" className="py-16 scroll-mt-32 -mt-4">
          <Experience />
        </section>
        <section id="skills" className="py-16 bg-muted/30 dark:bg-muted/10 scroll-mt-24">
          <Skills />
        </section>
        <section id="projects" className="py-16 scroll-mt-24">
          <Projects />
        </section>
        <section id="contact" className="py-16 bg-muted/30 dark:bg-muted/10 scroll-mt-24">
          <Contact />
        </section>
        <Footer />
      </main>
    </Providers>
  )
}

