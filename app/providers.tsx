"use client"

import type React from "react"

import { useEffect } from "react"
import { setupErrorHandling } from "@/lib/error-handler"

export function Providers({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    setupErrorHandling()
  }, [])

  return <>{children}</>
}