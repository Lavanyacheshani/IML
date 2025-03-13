"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

const slides = [
  {
    id: 1,
    image: "/assets/banner1.jpg",
    title: "Welcome to IML Business School",
    subtitle: "Empowering Future Leaders",
  },
  {
    id: 2,
    image: "/assets/banner2.jpg",
    title: "Quality Education",
    subtitle: "Excellence in Teaching and Learning",
  },
  {
    id: 3,
    image: "/assets/banner3.jpg",
    title: "Professional Development",
    subtitle: "Building Skills for Success",
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

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
  }

  return (
    <div className="relative h-[60vh] md:h-[80vh] w-full overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={slide.image || "/placeholder.svg"}
            alt={slide.title}
            fill
            priority={index === 0}
            className="object-cover"
          />
        </div>
      ))}
      <div className="absolute left-4 top-1/2 z-10 -translate-y-1/2">
        <button
          onClick={prevSlide}
          className="rounded-full bg-white/20 p-3 text-white backdrop-blur-sm transition-colors hover:bg-white/40"
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
      </div>
      <div className="absolute right-4 top-1/2 z-10 -translate-y-1/2">
        <button
          onClick={nextSlide}
          className="rounded-full bg-white/20 p-3 text-white backdrop-blur-sm transition-colors hover:bg-white/40"
          aria-label="Next slide"
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      </div>
      <div className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2 w-8 rounded-full transition-colors ${index === currentSlide ? "bg-white" : "bg-white/50"}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

