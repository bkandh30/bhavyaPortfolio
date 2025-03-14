"use client"

interface SectionHeaderProps {
  title: string
}

export default function SectionHeader({ title }: SectionHeaderProps) {
  return (
    <div className="relative mb-8 text-center">
      <h2 className="text-3xl font-bold relative z-10 inline-block">{title}</h2>
    </div>
  )
}

