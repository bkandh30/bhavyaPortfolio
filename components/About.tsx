"use client"

import { Card, CardContent } from "@/components/ui/card"
import FadeInSection from "./FadeInSection"
import SectionHeader from "./SectionHeader"
import { motion } from "framer-motion"

export default function About() {
  return (
    <div className="container mx-auto px-4">
      <FadeInSection>
        <SectionHeader title="About Me" />
        <div className="max-w-3xl mx-auto">
          <Card className="overflow-hidden border-b-4 border-b-primary shadow-md transition-all duration-300 hover:shadow-lg">
            <div className="h-2 bg-gradient-to-r from-primary/20 via-primary/40 to-primary/20"></div>
            <CardContent className="p-8 text-lg leading-relaxed">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                viewport={{ once: true }}
              >
                I am a Computer Science graduate from Arizona State University (GPA: 3.93) with over 2 years of experience in backend development, cloud infrastructure, and data engineering.
                At Ernst & Young, I designed scalable ETL pipelines, anomaly detection workflows, and cloud-native dashboards to enhance cybersecurity insights using AWS Glue, Lambda, Redshift, and QuickSight.
                At ASU, I worked with Professor Yinong Chen to develop scalable tooling supporting CSE 445 (Distributed Software Development) and CSE 446 (Software Integration and Testing).
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
                viewport={{ once: true }}
                className="mt-4"
              >
                Let’s connect if you’re hiring Software Developers or Cloud Engineers, or want to talk about backend systems, infrastructure, or DevOps tooling.
              </motion.p>
            </CardContent>
          </Card>
        </div>
      </FadeInSection>
    </div>
  )
}

