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
    title: "AWS Cloud Resume Challenge",
    description: [
      "Successfully built and deployed a serverless resume website on AWS, demonstrating proficiency in cloud architecture and DevOps practices.",
      "Utilized S3 for static website hosting, CloudFront for content delivery and SSL/TLS, and Route 53 for DNS management.",
      "Implemented a serverless visitor counter using AWS Lambda (Python), and DynamoDB for dynamic content.",
      "Automated infrastructure provisioning and deployment using Terraform and CloudFormation.",
      "Established a CI/CD pipeline with GitHub Actions for automated testing and deployment to AWS upon code changes.",
    ],
    techStack: ["AWS S3", "CloudFront", "Route 53", "Lambda", "API Gateway", "DynamoDB", "AWS SAM", "GitHub Actions", "Python"],
    githubUrl: "https://github.com/bkandh30/AWS-Cloud-Resume-Challenge",
  },
  {
    title: "Async Text Summarization Microservice",
    description: [
      "Developed an asynchronous, production-grade RESTful microservice using FastAPI, Uvicorn, and Tortoise ORM, achieving consistent sub-200ms response latency in local benchmark environments with PostgreSQL as the backend.",
      "Designed a 2-container Docker Compose architecture to separately manage the API and database layers, with published and versioned container images hosted on GitHub Packages for seamless deployment.",
      "Implemented real-time content parsing and summarization using newspaper3k and lxml-html-clean, and strategically moved NLP tasks off the main thread to reduce request bottlenecks and optimize throughput by 20%.",
      "Achieved 100% test coverage with a comprehensive suite of configuration, unit, and integration tests written using pytest; automated testing and deployment workflows using GitHub Actions for continuous integration.",
    ],
    techStack: ["FastAPI", "Docker", "Tortoise ORM", "NLTK"],
    githubUrl: "https://github.com/bkandh30/fastAPI-summary",
  },
  {
    title: "Git Implementation",
    description: [
      "Recreated Git’s underlying object model from scratch by implementing all four core object types—blob, tree, commit, and tag, leveraging SHA-1 hashing and zlib compression to store content-addressed snapshots.",
      "Built a self-contained Git engine supporting repository initialization and core commands such as write-tree, commit-tree, and cat-file, simulating the full lifecycle of a local Git repository without external tooling.",
      "Implemented support for remote cloning over HTTP using Git Smart Protocol v2, including parsing of raw packfiles, resolving ref-deltas, and reconstructing trees from delta-compressed binary streams.",
    ],
    techStack: ["Python"],
    githubUrl: "https://github.com/bkandh30/git-implementation",
  },
  {
    title: "Video Reconstruction from Randomized Frames",
    description: [
      "Built a frame-reordering pipeline to reconstruct videos from shuffled frames by computing pairwise frame distances using ORB descriptors and generating a visual similarity map to quantify temporal proximity.",
      "Designed a novel TSP-inspired ordering algorithm optimized for sequencing visual data; it outperformed both Growth-based and Hierarchical Clustering approaches, reducing average frame misplacement error by 60%.",
      "Defined custom evaluation metrics such as Sequential Order Error and Logistic Loss to quantitatively benchmark algorithm performance, yielding best-in-class results with an SOE of 0.56 and Logistic Loss of 0.10.",
    ],
    techStack: ["OpenCV", "NumPy", "Matplotlib", "SciPy"],
    githubUrl: "https://github.com/bkandh30/Randomized-VideoFrames-Reconstruction",
  },
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

