"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

const slides = [
  {
    id: 1,
    image: "/assets/banner1.jpg", 
    alt: "Business School Environment",
  },
  {
    id: 2,
    image: "/assets/banner2.jpg",
    alt: "Students Learning",
  },
  {
    id: 3,
    image: "/assets/banner3.jpg",
    alt: "Corporate Training",
  },
  {
    id: 4,
    image: "/assets/banner4.jpg",
    alt: "Online Learning",
  },
]

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative h-[600px] w-full overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? "opacity-100" : "opacity-0"}`}
        >
          <Image
            src={slide.image || "/placeholder.svg"} // Fallback image if necessary
            alt={slide.alt}
            fill
            priority={index === 0}
            className="object-cover transition-transform duration-1000 transform scale-105"
          />
        </div>
      ))}
      <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-3 w-12 rounded-full transition-colors ${index === currentSlide ? "bg-white" : "bg-white/50"}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
