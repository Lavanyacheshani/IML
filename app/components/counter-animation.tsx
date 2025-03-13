"use client"

import { useState, useEffect, useRef } from "react"

interface CounterAnimationProps {
  end: number
  title: string
  suffix?: string
  prefix?: string
  duration?: number
}

export default function CounterAnimation({
  end,
  title,
  suffix = "",
  prefix = "",
  duration = 2000,
}: CounterAnimationProps) {
  const [count, setCount] = useState(0)
  const countRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 },
    )

    if (countRef.current) {
      observer.observe(countRef.current)
    }

    return () => {
      observer.disconnect()
    }
  }, [])

  useEffect(() => {
    if (!isVisible) return

    let startTime: number | null = null
    let animationFrameId: number

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      const currentCount = Math.floor(progress * end)
      setCount(currentCount)

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(step)
      }
    }

    animationFrameId = requestAnimationFrame(step)

    return () => {
      cancelAnimationFrame(animationFrameId)
    }
  }, [end, duration, isVisible])

  return (
    <div
      ref={countRef}
      className="flex flex-col items-center justify-center rounded-xl bg-white p-8 text-center shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-2 animate-fade-in-up"
    >
      <div className="mb-2 text-4xl md:text-5xl font-extrabold text-primary">
        {prefix}
        {count}
        {suffix}
      </div>
      <div className="text-lg text-gray-600">{title}</div>
    </div>
  )
}

