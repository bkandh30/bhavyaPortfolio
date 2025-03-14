"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Building, GraduationCap } from "lucide-react"
import FadeInSection from "./FadeInSection"

const experiences = [
  {
    company: "Arizona State University",
    icon: <GraduationCap className="h-5 w-5" />,
    roles: [
      {
        title: "Graduate Services Assistant",
        period: "Aug 2024 – Present",
        description: [
          "Supported grading and proctoring for over 600 students in CSE 445: Distributed Software Development and CSE 446: Software Integration and Engineering, ensuring academic integrity and smooth test administration.",
          "Implemented quality control measures to maintain grading accuracy, resulting in a 95% consistency rate.",
          "Collaborated with the instructor to streamline grading workflows, reducing turnaround time for feedback by 20%.",
          "Addressed and resolved student inquiries within 24 hours, ensuring clear communication on grading procedures and course expectations.",
        ],
      },
      {
        title: "Robotics Camp Teaching Assistant",
        period: "Jun 2024 – Jul 2024",
        description: [
          "Acted as a Teaching Assistant for ASU's 7UP and 9UP Robotics Camp, responsible for teaching and assisting nearly 50 students over the course of 4 weeks.",
          "Conducted interactive lessons on Alice, LEGO EV3 programming, ASU's VIPLE, TinkerCAD, 3D Designing, C# programming, Web programming, and phone app development.",
          "Provided one-on-one support and mentorship to students, helping them understand complex topics and complete their projects successfully.",
          "Managed classroom logistics, ensuring a safe, inclusive, and productive learning environment, contributing to a 100% incident-free camp experience.",
        ],
      },
    ],
  },
  {
    company: "Ernst & Young",
    icon: <Building className="h-5 w-5" />,
    roles: [
      {
        title: "Technology Consultant",
        period: "Sep 2021 – Jul 2023",
        description: [
          "Spearheaded development and quality improvement of KPIs and lead discussions across 6 different functions over a 1 year period to contextualize and define cyber-security metrics, resulting in enhancement in KPI Quality.",
          "Designed upper and lower thresholds by implementing statistical and time series models to catch anomalies in data quality to increase the efficiency of launching investigations by 20%.",
          "Developed and clearly documented automation development of processing IP addresses and finding organizational information using AWS Redshift, Glue, Lambda and Secret Manager to reduce process cycle time by 1.5 hours/day.",
          "Accomplished approximately 65% mapping of the CVEs from NVD Database to MITRE framework by integrating CAPEC database to model adversaries tactics and techniques.",
          "Created column profile of data quality utilizing AWS Glue ETL pipeline and displayed statistical information regarding data distribution through AWS Quicksight for quality monitoring and improvement.",
        ],
      },
    ],
  },
]

export default function Experience() {
  return (
    <div className="container mx-auto px-4">
      <FadeInSection>
        <h2 className="text-3xl font-bold mb-8 text-center">Experience</h2>
        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <FadeInSection key={index} delay={0.2 + index * 0.1}>
              <Card className="overflow-hidden border-l-4 border-l-primary transition-all duration-300 hover:shadow-lg">
                <CardHeader className="bg-gradient-to-r from-primary/10 to-transparent flex flex-row items-center gap-3">
                  <div className="bg-primary/10 p-2 rounded-full text-primary">{exp.icon}</div>
                  <CardTitle>{exp.company}</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  {exp.roles.map((role, roleIndex) => (
                    <div
                      key={roleIndex}
                      className={`p-6 ${roleIndex < exp.roles.length - 1 ? "border-b border-border" : ""}`}
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4">
                        <h3 className="font-semibold text-lg">{role.title}</h3>
                        <Badge variant="outline" className="mt-2 sm:mt-0 w-fit">
                          {role.period}
                        </Badge>
                      </div>
                      <ul className="space-y-2 list-disc list-inside text-muted-foreground">
                        {role.description.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </FadeInSection>
          ))}
        </div>
      </FadeInSection>
    </div>
  )
}

