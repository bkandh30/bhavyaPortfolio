"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Calendar, MapPin } from "lucide-react"
import FadeInSection from "./FadeInSection"
import SectionHeader from "./SectionHeader"

const educationData = [
  {
    institution: "Arizona State University",
    degree: "Master of Science in Computer Science",
    period: "Aug 2023 - May 2025 (Expected)",
    location: "Tempe, Arizona",
    gpa: "3.92/4.00",
    courses: [
      "Digital Video Processing",
      "Foundations of Algorithm",
      "Distributed Software Development",
      "Software Security",
      "Information Assurance and Security",
      "Software Verification, Validation and Testing",
      "Data Processing at Scale",
      "Applied Cryptography",
      "Data Mining",
    ],
  },
  {
    institution: "Amity University Noida",
    degree: "Bachelor of Technology in Computer Science and Engineering",
    period: "Jul 2017 - May 2021",
    location: "Noida, Uttar Pradesh, India",
    gpa: "8.17/10.00",
    courses: [
      "Data Structures and Algorithm",
      "Database Management Systems",
      "Object Oriented Programming",
      "Operating System",
      "Theory of Computation",
      "Computer Architecture",
      "Compiler Construction",
      "Distributed System",
      "Computer Networks",
    ],
  },
]

export default function Education() {
  return (
    <div className="container mx-auto px-4">
      <FadeInSection>
        <SectionHeader title="Education" />
        <div className="max-w-4xl mx-auto space-y-6">
          {educationData.map((edu, index) => (
            <FadeInSection key={index} delay={0.2 + index * 0.1}>
              <Card className="overflow-hidden border-l-4 border-l-primary transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <CardHeader className="bg-gradient-to-r from-primary/10 to-transparent flex flex-row items-center gap-3">
                  <div className="bg-primary/10 p-2 rounded-full text-primary">
                    <GraduationCap className="h-5 w-5" />
                  </div>
                  <div>
                    <CardTitle>{edu.institution}</CardTitle>
                    <p className="text-muted-foreground mt-1">{edu.degree}</p>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-4">
                    <div className="flex items-center gap-1 text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span>{edu.period}</span>
                    </div>
                    <div className="flex items-center gap-1 text-muted-foreground">
                      <MapPin className="h-4 w-4" />
                      <span>{edu.location}</span>
                    </div>
                    <Badge variant="outline" className="w-fit bg-primary/5 border-primary/20">
                      GPA: {edu.gpa}
                    </Badge>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Relevant Coursework</h4>
                    <div className="flex flex-wrap gap-2">
                      {edu.courses.map((course, i) => (
                        <Badge key={i} variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20">
                          {course}
                        </Badge>
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

