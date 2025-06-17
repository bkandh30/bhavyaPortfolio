"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Download, Github, Linkedin, ChevronRight } from "lucide-react"
import Link from "next/link"
import TypeWriter from "./TypeWriter"
import { motion } from "framer-motion"
import { Suspense } from "react"

export default function Hero() {
  const roles = ["Software Engineer", "Cloud Engineer", "Building Scalable Systems", "CI/CD"]

  return (
    <div className="container mx-auto px-4 pt-32 pb-16 min-h-[90vh] flex flex-col justify-center bg-pattern">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6 order-2 lg:order-1">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="will-change-transform"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              Hi, I&apos;m <span className="text-primary">Bhavya Kandhari</span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="text-xl md:text-2xl text-muted-foreground h-8 will-change-transform"
          >
            <TypeWriter texts={roles} typingSpeed={100} deletingSpeed={50} delayBetweenTexts={1500} />
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.2 }}
            className="text-lg max-w-md will-change-transform"
          >
            Software developer specializing in backend infrastructure and cloud infrastructure. Graduated with a Master&apos;s in Computer Science from Arizona State University.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.3 }}
            className="flex flex-wrap gap-4 will-change-transform"
          >
            <Button
              onClick={() => {
                document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
              }}
            >
              View Projects <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" asChild className="border-primary text-primary hover:bg-primary/10">
              <Link href="/resume.pdf" target="_blank" download>
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </Link>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.4 }}
            className="flex gap-4 pt-2 will-change-transform"
          >
            <Link
              href="https://www.linkedin.com/in/kandharibhavya/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors p-2 hover:bg-primary/10 rounded-full"
            >
              <Linkedin className="h-6 w-6" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link
              href="https://github.com/bkandh30"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors p-2 hover:bg-primary/10 rounded-full"
            >
              <Github className="h-6 w-6" />
              <span className="sr-only">GitHub</span>
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="flex justify-center lg:justify-end order-1 lg:order-2 will-change-transform"
        >
          <div className="relative">
            <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-primary via-blue-500 to-primary/50 opacity-70 blur-md animate-pulse"></div>
            <Suspense
              fallback={
                <div className="w-64 h-64 md:w-80 md:h-80 xl:w-[400px] xl:h-[400px] rounded-full bg-muted/20"></div>
              }
            >
              <Image
                src="/headshot.jpg"
                alt="Bhavya Kandhari Headshot"
                width={400}
                height={400}
                className="rounded-full object-cover shadow-lg w-64 h-64 md:w-80 md:h-80 xl:w-[400px] xl:h-[400px] relative ring-4 ring-background"
                priority
                quality={85}
                sizes="(max-width: 768px) 256px, (max-width: 1200px) 320px, 400px"
              />
            </Suspense>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

