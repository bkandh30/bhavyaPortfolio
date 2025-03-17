"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Building, GraduationCap } from "lucide-react"
import FadeInSection from "./FadeInSection"
import { useEffect, useState } from "react"

const experiences = [
  {
    title: "Graduate Services Assistant",
    period: "August 2024 - Present",
    company: "Arizona State University",
    icon: <GraduationCap className="h-5 w-5" />,
    description: [
      "Supported grading and proctoring for over 600 students in CSE 445: Distributed Software Development and CSE 446: Software Integration and Engineering, ensuring academic integrity and smooth test administration.",
      "Implemented quality control measures to maintain grading accuracy, resulting in a 95% consistency rate.",
      "Collaborated with the instructor to streamline grading workflows, reducing turnaround time for feedback by 20%.",
      "Addressed and resolved student inquiries within 24 hours, ensuring clear communication on grading procedures and course expectations.",
    ],
  },
  {
    title: "Robotics Camp Teaching Assistant",
    period: "June 2024 - July 2024",
    company: "Arizona State University",
    icon: <GraduationCap className="h-5 w-5" />,
    description: [
      "Acted as a Teaching Assistant for ASU's 7UP and 9UP Robotics Camp, responsible for teaching and assisting nearly 50 students over the course of 4 weeks.",
      "Conducted interactive lessons on Alice, LEGO EV3 programming, ASU's VIPLE, TinkerCAD, 3D Designing, C# programming, Web programming, and phone app development.",
      "Provided one-on-one support and mentorship to students, helping them understand complex topics and complete their projects successfully.",
      "Managed classroom logistics, ensuring a safe, inclusive, and productive learning environment, contributing to a 100% incident-free camp experience.",
    ],
  },
  {
    title: "Technology Consultant",
    period: "September 2021 - July 2023",
    company: "Ernst & Young",
    icon: <Building className="h-5 w-5" />,
    description: [
      "Spearheaded development and quality improvement of KPIs and lead discussions across 6 different functions over a 1 year period to contextualize and define cyber-security metrics, resulting in enhancement in KPI Quality.",
      "Designed upper and lower thresholds by implementing statistical and time series models to catch anomalies in data quality to increase the efficiency of launching investigations by 20%.",
      "Developed and clearly documented automation development of processing IP addresses and finding organizational information using AWS Redshift, Glue, Lambda and Secret Manager to reduce process cycle time by 1.5 hours/day.",
      "Accomplished approximately 65% mapping of the CVEs from NVD Database to MITRE framework by integrating CAPEC database to model adversaries tactics and techniques.",
      "Created column profile of data quality utilizing AWS Glue ETL pipeline and displayed statistical information regarding data distribution through AWS Quicksight for quality monitoring and improvement.",
    ],
  },
]

export default function Experience() {
  // State to detect if we're on mobile
  const [isMobile, setIsMobile] = useState(false)

  // Check if we're on mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    // Initial check
    checkMobile()

    // Add listener for resize
    window.addEventListener("resize", checkMobile)

    // Cleanup
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  return (
    <div className="container mx-auto px-4">
      <FadeInSection amount={isMobile ? 0.05 : 0.2}>
        <h2 className="text-3xl font-bold mb-12 text-center">Experience</h2>

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-16 sm:left-24 top-0 h-full w-0.5 bg-gradient-to-b from-primary via-primary/70 to-primary/50"></div>

          {/* Timeline content */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <FadeInSection key={index} delay={0.1 + index * 0.1} amount={0.1}>
                <div className="relative flex">
                  {/* Timeline dot */}
                  <div className="absolute left-16 sm:left-24 transform -translate-x-1/2 w-8 h-8 rounded-full bg-background border-2 border-primary z-10 flex items-center justify-center">
                    <div className="text-primary">{exp.icon}</div>
                  </div>

                  {/* Content */}
                  <div className="ml-28 sm:ml-36 w-full">
                    <Card className="overflow-hidden border-l-4 border-l-primary transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                      <CardHeader className="bg-gradient-to-r from-primary/10 to-transparent pb-2">
                        <div className="space-y-1">
                          <CardTitle>{exp.title}</CardTitle>
                          <p className="text-muted-foreground text-sm">{exp.period}</p>
                          <p className="text-muted-foreground font-medium">{exp.company}</p>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2 list-disc list-outside ml-5">
                          {exp.description.map((item, i) => (
                            <li key={i} className="text-muted-foreground">
                              {item}
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </FadeInSection>
    </div>
  )
}
