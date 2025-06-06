"use client"

import { Building, GraduationCap } from "lucide-react"
import FadeInSection from "./FadeInSection"
import { useEffect, useState } from "react"

const experiences = [
  {
    title: "Graduate Services Assistant",
    period: "August 2024 - May 2025",
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

