"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Code2, Database, FileCode2, Cloud, Network } from "lucide-react"
import FadeInSection from "./FadeInSection"

const skillCategories = [
  {
    name: "Languages",
    icon: <Code2 className="h-5 w-5" />,
    skills: ["Rust", "JavaScript", "TypeScript", "Golang", "Python", "SQL"],
  },
  {
    name: "Frameworks & Libraries",
    icon: <FileCode2 className="h-5 w-5" />,
    skills: ["React.js", "Next.js", "TailwindCSS", "Node.js", "Express.js", "FastAPI", "Pandas", "NumPy", "Matplotlib"],
  },
  {
    name: "Cloud & DevOps",
    icon: <Cloud className="h-5 w-5" />,
    skills: ["AWS", "Docker", "Kubernetes", "Git/GitHub", "Linux", "GitHub Actions", "Prometheus", "Grafana"],
  },
  {
    name: "Databases & Tools",
    icon: <Database className="h-5 w-5" />,
    skills: ["PostgreSQL", "MySQL", "Redis", "Power BI", "Tableau", "AWS QuickSight"],
  },
  {
    name: "Skills",
    icon: <Network className="h-5 w-5" />,
    skills: ["Agile", "CI/CD", "Version Control", "gRPC", "RESTful API", "Microservices", "Distributed Systems"],
  },
]

export default function Skills() {
  return (
    <div className="container mx-auto px-4">
      <FadeInSection>
        <h2 className="text-3xl font-bold mb-8 text-center">Skills & Tools</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {skillCategories.map((category, index) => (
            <FadeInSection key={index} delay={0.2 + index * 0.1}>
              <Card className="overflow-hidden border-r-4 border-r-primary transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <CardContent className="p-0">
                  <div className="bg-gradient-to-l from-primary/10 to-transparent p-4 flex items-center gap-3">
                    <div className="bg-primary/10 p-2 rounded-full text-primary">{category.icon}</div>
                    <h3 className="font-semibold">{category.name}</h3>
                  </div>
                  <div className="p-4">
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, i) => (
                        <span key={i} className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </FadeInSection>
          ))}
        </div>
      </FadeInSection>
    </div>
  )
}

