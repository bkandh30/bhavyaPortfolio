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
    title: "URL Shortener Webapp",
    description: [
      "Developed a full-stack URL shortener using Next.js 15, TypeScript, and Turso edge database, following modern web development practices.",
      "Implemented RESTful APIs with features like short link generation, Upstash Redis–based rate limiting, 30-day expiration, and privacy-first analytics.",
      "Built a responsive UI with Tailwind CSS and reusable components, ensuring accessibility and seamless cross-device experience.",
      "Deployed on Vercel with CI/CD workflows, consolidating microservices into a unified Next.js edge architecture for scalability and maintainability.",
    ],
    techStack: ["Next.js", "TypeScript", "Turso", "Upstash Redis", "Tailwind CSS", "Vercel", "CI/CD"],
    githubUrl: "https://github.com/bkandh30/hash.ly", // replace with your repo link
    liveUrl: "https://hash-ly.vercel.app/",
  },
  {
  title: "Metered API Server",
  description: [
    "Engineered a secure API server in Rust using Warp, Tokio, and SQLx, enabling API key management, authentication middleware, and PostgreSQL-backed usage tracking.",
    "Implemented quotas, request logging, and rate limiting features to enforce usage policies, ensuring reliable and fair API consumption.",
    "Containerized the application with Docker Compose for reproducible development and production-ready deployments, supporting seamless integration with PostgreSQL.",
    "Applied industry best practices including structured logging, health/readiness probes, OpenAPI documentation, and CI/CD pipelines with GitHub Actions for production-grade reliability.",
  ],
    techStack: ["Rust", "Warp", "Tokio", "SQLx", "PostgreSQL", "Docker", "CI/CD"],
    githubUrl: "https://github.com/bkandh30/metered-api-server",
  },
  {
    title: "GoFlix - RESTful Movie Management API",
    description: [
      "Built production-ready RESTful API in Golang with 12+ endpoints for full CRUD operations, JWT authentication, and microservices architecture patterns, supporting 100+ concurrent users.",
      "Implemented secure backend services with PostgreSQL database, automated migrations, bcrypt password encryption, and middleware integration, achieving 99.9% uptime through comprehensive error handling and graceful shutdown.",
      "Designed scalable architecture with background email processing, CORS support, structured logging, and real-time metrics monitoring (/debug/vars), demonstrating enterprise-grade development practices and performance optimization capabilities.",
    ],
    techStack: ["Golang", "PostgreSQL", "JWT", "REST API", "Docker", "bcrypt", "CORS"],
    githubUrl: "https://github.com/bkandh30/GoFlix",
  },
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
                  <div className="flex gap-2 w-full">
                    <Button variant="outline" asChild className="flex-[0.65] group hover:border-primary hover:text-primary">
                      <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4 group-hover:rotate-12 transition-transform" />
                        View on GitHub
                        <ExternalLink className="ml-2 h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </Link>
                    </Button>
                    {project.liveUrl && (
                      <Button asChild className="flex-[0.35] group">
                        <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="mr-2 h-4 w-4 group-hover:rotate-12 transition-transform" />
                          Live Site
                        </Link>
                      </Button>
                    )}
                  </div>
                </CardFooter>
              </Card>
            </FadeInSection>
          ))}
        </div>
      </FadeInSection>
    </div>
  )
}

