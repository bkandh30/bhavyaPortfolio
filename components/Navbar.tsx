"use client"

import { useState, useEffect, useRef } from "react"
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
  const headerRef = useRef<HTMLElement>(null)

  // Improved section detection
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      const headerHeight = headerRef.current?.offsetHeight || 0

      // Set scrolled state for navbar background
      setScrolled(scrollPosition > 20)

      // Find all sections and determine which one is in view
      const sections = document.querySelectorAll("section[id]")

      // Create an array to store section positions
      const sectionPositions = Array.from(sections).map((section) => {
        const sectionId = section.getAttribute("id") || ""
        const sectionTop = section.getBoundingClientRect().top + scrollPosition
        // Add a buffer equal to header height plus some extra space
        const adjustedTop = sectionTop - headerHeight - 100

        return {
          id: sectionId,
          top: adjustedTop,
          bottom: adjustedTop + section.offsetHeight,
        }
      })

      // Find the section that contains the current scroll position
      for (let i = sectionPositions.length - 1; i >= 0; i--) {
        const section = sectionPositions[i]

        if (scrollPosition >= section.top) {
          setActiveSection(section.id)
          break
        }
      }

      // If we're at the top of the page, set home as active
      if (scrollPosition < 100) {
        setActiveSection("home")
      }
    }

    window.addEventListener("scroll", handleScroll)
    // Run once on mount to set initial active section
    handleScroll()

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

    // Extract the section ID
    const targetId = href.replace("#", "")

    // Directly set the active section
    setActiveSection(targetId)

    // Scroll to the section after a short delay
    setTimeout(() => {
      const element = document.getElementById(targetId)

      if (element) {
        // Get the navbar height to offset the scroll position
        const navbarHeight = headerRef.current?.offsetHeight || 0

        // Calculate the element's position relative to the document
        const elementPosition = element.getBoundingClientRect().top + window.scrollY

        // Scroll to the element with offset for the navbar
        window.scrollTo({
          top: elementPosition - navbarHeight - 50,
          behavior: "smooth",
        })
      }
    }, 300)
  }

  return (
    <motion.header
      ref={headerRef}
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

