"use client"

import Link from "next/link"
import { Github, Linkedin, Heart } from "lucide-react"
import { motion } from "framer-motion"

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Education", href: "#education" },
  { name: "Experience", href: "#experience" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Let's Connect", href: "#contact" },
]

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <h3 className="text-lg font-semibold">Bhavya Kandhari</h3>
            <p className="text-muted-foreground">Software Developer | Data Engineer</p>
          </div>

          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-6 md:mb-0">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-primary transition-colors animated-underline"
                onClick={(e) => {
                  e.preventDefault()
                  const element = document.querySelector(link.href)
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" })
                  }
                }}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="flex gap-4">
            <Link
              href="https://linkedin.com/in/bhavyakandhari"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors p-2 hover:bg-primary/10 rounded-full"
            >
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link
              href="https://github.com/bkandh30"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors p-2 hover:bg-primary/10 rounded-full"
            >
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Link>
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          viewport={{ once: true }}
          className="mt-8 pt-8 border-t border-border text-center"
        >
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Bhavya Kandhari. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground mt-2 flex items-center justify-center">
            Built with <Heart className="h-3 w-3 mx-1 text-red-500 animate-pulse" /> using Next.js & TailwindCSS
          </p>
        </motion.div>
      </div>
    </footer>
  )
}

