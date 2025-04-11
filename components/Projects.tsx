"use client"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink } from "lucide-react"
import Link from "next/link"
import FadeInSection from "./FadeInSection"
import SectionHeader from "./SectionHeader"

const projects = [
  {
    title: "DNS Server Implementation",
    description: [
      "Developed a custom DNS server using Python and UDP, capable of parsing, handling, and forwarding DNS queries.",
      "Implemented support for multi-question queries, domain name compression, and dynamic fallback to upstream resolvers.",
      "Built detailed response generation with correct DNS header, question, and answer sections.",
      "Ensured fault-tolerance with timeout handling and default error responses to maintain service reliability.",
    ],
    techStack: ["Python", "UDP Protocol"],
    githubUrl: "https://github.com/bkandh30/DNS-Server",
  },
  {
    title: "Git Implementation",
    description: [
      "Developed a functional subset of Git core features in Python, including repository initialization and object management (blob, tree, commit).",
      "Implemented Git's object model using SHA-1 hashing for content addressing and zlib for compression/decompression.",
      "Built HTTP cloning capabilities, involving remote ref fetching, packfile parsing, delta resolution, and working directory checkout.",
    ],
    techStack: ["Python"],
    githubUrl: "https://github.com/bkandh30/git-implementation",
  },
  {
    title: "Video Reconstruction from Randomized Frames",
    description: [
      "Engineered a preprocessing solution that reduced video data complexity through grayscaling and downsampling",
      "Enhanced feature detection accuracy by adapting ORB and SURF algorithms, optimizing the frame reordering process for video sequences.",
      "Developed and tested 3 sorting alogrithms to efficiently sequence video frames based on number of feature matches.",
      "Implemented a logistic and sequencial performance metric that demonstrated improvement in frame sequencing accuracy compared to existing methods.",
    ],
    techStack: ["OpenCV", "NumPy", "Matplotlib", "SciPy"],
    githubUrl: "https://github.com/bkandh30/Randomized-VideoFrames-Reconstruction",
  },
]

export default function Projects() {
  return (
    <div className="container mx-auto px-4">
      <FadeInSection>
        <SectionHeader title="Projects" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <FadeInSection key={index} delay={0.2 + index * 0.1}>
              <Card className="flex flex-col h-full border-t-4 border-t-primary overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <CardHeader className="bg-gradient-to-r from-primary/5 to-transparent">
                  <div className="flex justify-between items-start">
                    <CardTitle>{project.title}</CardTitle>
                  </div>
                  <CardDescription>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {project.techStack.map((tech, i) => (
                        <Badge key={i} variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <ul className="space-y-2 list-disc list-inside text-muted-foreground">
                    {project.description.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" asChild className="w-full group hover:border-primary hover:text-primary">
                    <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4 group-hover:rotate-12 transition-transform" />
                      View on GitHub
                      <ExternalLink className="ml-2 h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </FadeInSection>
          ))}
        </div>
      </FadeInSection>
    </div>
  )
}

