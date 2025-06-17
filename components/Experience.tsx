"use client"

import { Building, GraduationCap } from "lucide-react"
import FadeInSection from "./FadeInSection"
import { useEffect, useState } from "react"

const experiences = [
  {
    title: "Software Engineer",
    period: "June 2024 - April 2025",
    company: "Ira A Fulton Schools of Engineering",
    icon: <GraduationCap className="h-5 w-5" />,
    description: [
      "Developed and maintained backend tooling in Python and C# for distributed computing labs, supporting scalable assignment deployment and automated evaluation for over 400 students each semester.",
      "Engineered comprehensive automated test pipelines using Pytest and Bash scripting to validate more than 200 student projects, rigorously testing for functional correctness, runtime performance, and resilience to edge cases.",
      "Enhanced the efficiency of grading systems by optimizing multi-threaded evaluation scripts; implemented asynchronous task execution and resource-aware throttling, leading to a 50% reduction in total execution time.",
      "Facilitated hands-on debugging workshops and led system architecture walkthroughs, guiding students in designing and implementing RESTful web services, and reinforcing best practices for concurrency control and distributed system patterns.",
    ],
  },
  {
    title: "Technology Consultant",
    period: "September 2021 - July 2023",
    company: "Ernst & Young",
    icon: <Building className="h-5 w-5" />,
    description: [
      "Automated a comprehensive IP enrichment workflow by orchestrating services using AWS Redshift, AWS Glue, AWS Lambda, and Secrets Manager; reducing daily processing time by 1.5 hours.",
      "Designed and deployed robust anomaly detection models leveraging time-series data to proactively identify irregular patterns in network activity, leading to a 20% improvement in the accuracy of incident investigation processes.",
      "Built highly scalable ETL pipelines using AWS Glue, processing over 50M+ records daily, concurrently built interactive data profiling dashboards in AWS QuickSight to visualize data distributions and ensure quality compliance.",
      "Developed and deployed an NLP model using PySpark and K-Means clustering to group semantically similar vulnerability descriptions; processed over 10M+ records to consolidate more than 10,000 unique vulnerabilities and their remediation strategies, reducing duplication and improving threat intelligence accuracy.",
      "Integrated and normalized data from NVD and CAPEC databases, successfully correlating over 65% of CVEs to the MITRE ATT&CK framework to improve threat intelligence and enhance contextual analysis for defensive strategies.",
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
          {/* Timeline line - adjusted for mobile */}
          <div className="absolute left-8 sm:left-16 top-0 h-full w-0.5 bg-gradient-to-b from-primary via-primary/70 to-primary/50"></div>

          {/* Timeline content */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <FadeInSection key={index} delay={0.1 + index * 0.1} amount={0.1}>
                <div className="relative flex">
                  {/* Timeline dot - adjusted for mobile */}
                  <div className="absolute left-8 sm:left-16 transform -translate-x-1/2 w-8 h-8 rounded-full bg-background border-2 border-primary z-10 flex items-center justify-center">
                    <div className="text-primary">{exp.icon}</div>
                  </div>

                  {/* Content - adjusted for mobile */}
                  <div className="ml-16 sm:ml-28 w-full">
                    <div className="bg-card border border-border rounded-lg overflow-hidden shadow-md">
                      <div className="p-4 bg-gradient-to-r from-primary/10 to-transparent">
                        <h3 className="text-xl font-bold">{exp.title}</h3>
                        <p className="text-muted-foreground mt-1">{exp.period}</p>
                        <p className="text-muted-foreground">{exp.company}</p>
                      </div>

                      <div className="p-4">
                        <ul className="space-y-4 list-disc list-outside ml-5">
                          {exp.description.map((item, i) => (
                            <li key={i} className="text-muted-foreground">
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
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

