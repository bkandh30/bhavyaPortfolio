"use client"

import { Linkedin, Mail, Github, ArrowUpRight } from "lucide-react"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import FadeInSection from "./FadeInSection"
import SectionHeader from "./SectionHeader"

export default function Contact() {
  return (
    <div className="container mx-auto px-4">
      <FadeInSection>
        <SectionHeader title="Get in Touch" />
        <div className="w-full max-w-4xl mx-auto">
          <Card className="overflow-hidden border-none shadow-lg">
            <div className="h-2 bg-gradient-to-r from-primary/20 via-primary/40 to-primary/20"></div>
            <CardHeader className="bg-gradient-to-r from-primary/5 to-transparent">
              <CardTitle>Connect With Me</CardTitle>
            </CardHeader>
            <CardContent className="p-8 grid grid-cols-1 md:grid-cols-3 gap-8">
              <Link
                href="mailto:bhavya.kandhari.eng@gmail.com"
                className="group flex flex-col items-center p-6 rounded-lg bg-card hover:bg-primary/5 transition-colors border border-border hover:border-primary hover:shadow-md"
              >
                <div className="bg-primary/10 p-4 rounded-full text-primary mb-4 group-hover:scale-110 transition-transform">
                  <Mail className="h-8 w-8" />
                </div>
                <h3 className="font-medium text-lg mb-2">Email</h3>
                <span className="text-muted-foreground group-hover:text-primary transition-colors text-center w-full overflow-hidden text-ellipsis break-words">
                  bhavya.kandhari.eng@gmail.com
                </span>
                <ArrowUpRight className="h-4 w-4 mt-4 opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>

              <Link
                href="https://www.linkedin.com/in/kandharibhavya/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center p-6 rounded-lg bg-card hover:bg-primary/5 transition-colors border border-border hover:border-primary hover:shadow-md"
              >
                <div className="bg-primary/10 p-4 rounded-full text-primary mb-4 group-hover:scale-110 transition-transform">
                  <Linkedin className="h-8 w-8" />
                </div>
                <h3 className="font-medium text-lg mb-2">LinkedIn</h3>
                <span className="text-muted-foreground group-hover:text-primary transition-colors text-center">
                  linkedin.com/in/kandharibhavya
                </span>
                <ArrowUpRight className="h-4 w-4 mt-4 opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>

              <Link
                href="https://github.com/bkandh30"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center p-6 rounded-lg bg-card hover:bg-primary/5 transition-colors border border-border hover:border-primary hover:shadow-md"
              >
                <div className="bg-primary/10 p-4 rounded-full text-primary mb-4 group-hover:scale-110 transition-transform">
                  <Github className="h-8 w-8" />
                </div>
                <h3 className="font-medium text-lg mb-2">GitHub</h3>
                <span className="text-muted-foreground group-hover:text-primary transition-colors text-center">
                  github.com/bkandh30
                </span>
                <ArrowUpRight className="h-4 w-4 mt-4 opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
            </CardContent>
          </Card>
        </div>
      </FadeInSection>
    </div>
  )
}

