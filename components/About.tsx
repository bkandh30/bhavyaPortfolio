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
                I am a Computer Science graduate student at Arizona State University with expertise in software
                development, data engineering, and analytics. Previously, I worked as a Data Analyst & ETL Developer at
                Ernst & Young, where I led data extraction and modeling projects to enhance cybersecurity insights.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
                viewport={{ once: true }}
                className="mt-4"
              >
                Passionate about problem-solving and building scalable solutions, I am actively seeking opportunities in
                Software Development and Data Engineering.
              </motion.p>
            </CardContent>
          </Card>
        </div>
      </FadeInSection>
    </div>
  )
}

