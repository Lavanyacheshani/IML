"use client"

import { useState, useEffect, useRef } from "react"

interface CounterAnimationProps {
  end: number
  title: string
  suffix?: string
  duration?: number
}

export default function CounterAnimation({ end, title, suffix = "", duration = 2000 }: CounterAnimationProps) {
  const [count, setCount] = useState(0)
  const countRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
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

    let startTime: number
    let animationFrame: number

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      setCount(Math.floor(progress * end))

      if (progress < 1) {
        animationFrame = requestAnimationFrame(step)
      }
    }

    animationFrame = requestAnimationFrame(step)

    return () => {
      cancelAnimationFrame(animationFrame)
    }
  }, [end, duration, isVisible])

  return (
    <div ref={countRef} className="flex flex-col items-center text-center animate-fade-in-up">
      <div className="text-5xl font-bold text-blue-600 mb-2 transition-all duration-300 transform hover:scale-110">
        {count}
        {suffix}
      </div>
      <div className="text-xl font-medium text-gray-700">{title}</div>
    </div>
  )
}

