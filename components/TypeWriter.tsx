"use client"

import { useState, useEffect, useCallback } from "react"

interface TypeWriterProps {
  texts: string[]
  typingSpeed?: number
  deletingSpeed?: number
  delayBetweenTexts?: number
  className?: string
}

export default function TypeWriter({
  texts,
  typingSpeed = 100,
  deletingSpeed = 50,
  delayBetweenTexts = 1000,
  className = "",
}: TypeWriterProps) {
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  const [currentText, setCurrentText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)

  const typeEffect = useCallback(() => {
    // Current text to work with
    const fullText = texts[currentTextIndex]

    // If deleting
    if (isDeleting) {
      setCurrentText(fullText.substring(0, currentText.length - 1))

      // If deleted completely, move to typing mode and next text
      if (currentText.length === 0) {
        setIsDeleting(false)
        setCurrentTextIndex((currentTextIndex + 1) % texts.length)
      }
    }
    // If typing
    else {
      setCurrentText(fullText.substring(0, currentText.length + 1))

      // If typed completely, wait and then start deleting
      if (currentText.length === fullText.length) {
        setTimeout(() => {
          setIsDeleting(true)
        }, delayBetweenTexts)
      }
    }
  }, [currentText, currentTextIndex, isDeleting, texts, delayBetweenTexts])

  useEffect(() => {
    const timeout = setTimeout(typeEffect, isDeleting ? deletingSpeed : typingSpeed)

    return () => clearTimeout(timeout)
  }, [currentText, isDeleting, typeEffect, deletingSpeed, typingSpeed])

  return <span className={className}>{currentText}</span>
}

