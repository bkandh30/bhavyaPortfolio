"use client"

import type { ReactNode } from "react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

interface FadeInSectionProps {
  children: ReactNode
  className?: string
  delay?: number
  amount?: number
}

export default function FadeInSection({
  children,
  className = "",
  delay = 0.1,
  amount = 0.1, // Lower threshold for mobile
}: FadeInSectionProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, {
    once: true,
    amount: amount,
    // Add margin to trigger earlier on mobile
    margin: "0px 0px -100px 0px",
  })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 15 }} // Reduced y distance for smoother animation
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
      transition={{
        duration: 0.3,
        delay: delay,
        ease: "easeOut",
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

