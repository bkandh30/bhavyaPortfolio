"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Let's Connect", href: "#contact" },
]

export default function Navbar() {
  const { theme, setTheme } = useTheme()
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section")
      const scrollPosition = window.scrollY + 100

      sections.forEach((section) => {
        const sectionTop = section.offsetTop
        const sectionHeight = section.offsetHeight
        const sectionId = section.getAttribute("id") || ""

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(sectionId)
        }
      })

      setScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    // Initialize theme based on user preference or system preference
    const savedTheme = localStorage.getItem("theme") || "system"
    setTheme(savedTheme)
  }, [setTheme])

  const scrollToSection = (href: string) => {
    // Close mobile menu first
    setMobileMenuOpen(false)

    // Longer delay to ensure mobile menu is fully closed
    setTimeout(() => {
      const targetId = href.replace("#", "")
      const element = document.getElementById(targetId)

      if (element) {
        // Get the navbar height to offset the scroll position
        const navbarHeight = document.querySelector("header")?.offsetHeight || 0

        // Special handling for Experience section which seems to need more offset
        const extraOffset = targetId === "experience" ? 80 : 50

        // Calculate the element's position relative to the document
        const elementPosition = element.getBoundingClientRect().top + window.scrollY

        // Scroll to the element with increased offset
        window.scrollTo({
          top: elementPosition - navbarHeight - extraOffset,
          behavior: "smooth",
        })

        // Additional scroll check after animation completes
        setTimeout(() => {
          // If we're still not at the right position, adjust again
          const finalElementPosition = document.getElementById(targetId)?.getBoundingClientRect().top || 0
          if (finalElementPosition > 0 && finalElementPosition < 100) {
            window.scrollBy({
              top: -navbarHeight,
              behavior: "smooth",
            })
          }
        }, 1000)
      }
    }, 300)
  }

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3 }}
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        scrolled ? "bg-background/90 backdrop-blur-md shadow-md" : "bg-transparent",
      )}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link
          href="#home"
          className="text-xl font-bold tracking-tight text-primary"
          onClick={(e) => {
            e.preventDefault()
            scrollToSection("#home")
          }}
        >
          Bhavya Kandhari
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary animated-underline py-1",
                activeSection === link.href.substring(1) ? "text-primary font-semibold" : "text-muted-foreground",
              )}
              onClick={(e) => {
                e.preventDefault()
                scrollToSection(link.href)
              }}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Navigation Toggle */}
        <div className="flex items-center gap-2 md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            className="text-primary hover:bg-primary/10"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.2 }}
          className="md:hidden bg-background/95 backdrop-blur-sm shadow-md"
        >
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary py-2 border-l-2",
                  activeSection === link.href.substring(1)
                    ? "text-primary font-semibold border-primary"
                    : "text-muted-foreground border-transparent",
                )}
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection(link.href)
                }}
              >
                <span className="ml-2">{link.name}</span>
              </Link>
            ))}
          </nav>
        </motion.div>
      )}
    </motion.header>
  )
}

