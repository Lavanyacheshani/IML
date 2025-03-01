"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "MBA Graduate",
    image: "/placeholder.svg?height=100&width=100&text=Sarah",
    quote:
      "IML Business School transformed my career. The practical approach to learning and industry connections helped me secure a management position right after graduation.",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Corporate Training Participant",
    image: "/placeholder.svg?height=100&width=100&text=Michael",
    quote:
      "The corporate training program at IML was exactly what our team needed. The instructors were knowledgeable and the content was directly applicable to our business challenges.",
  },
  {
    id: 3,
    name: "Priya Sharma",
    role: "Executive Education Student",
    image: "/placeholder.svg?height=100&width=100&text=Priya",
    quote:
      "The executive education program exceeded my expectations. The international faculty brought global perspectives that have been invaluable in my leadership role.",
  },
  {
    id: 4,
    name: "David Okafor",
    role: "Online Course Student",
    image: "/placeholder.svg?height=100&width=100&text=David",
    quote:
      "As a working professional, the flexibility of IML's online courses allowed me to upskill without disrupting my career. The quality of instruction was outstanding.",
  },
  {
    id: 5,
    name: "Amara Perera",
    role: "Business Management Graduate",
    image: "/placeholder.svg?height=100&width=100&text=Amara",
    quote:
      "IML's industry connections and placement assistance helped me secure my dream job. The practical curriculum prepared me for real-world challenges.",
  },
]

export default function TestimonialSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
    }, 6000)
    return () => clearInterval(interval)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
  }

  return (
    <div className="relative mx-auto max-w-4xl overflow-hidden rounded-2xl bg-white p-8 shadow-2xl animate-fade-in-up">
      <div className="absolute left-4 top-1/2 z-10 -translate-y-1/2">
        <button
          onClick={prevSlide}
          className="rounded-full bg-blue-600 p-3 text-white shadow-md transition-colors hover:bg-blue-700 transform hover:scale-105"
          aria-label="Previous testimonial"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
      </div>
      <div className="absolute right-4 top-1/2 z-10 -translate-y-1/2">
        <button
          onClick={nextSlide}
          className="rounded-full bg-blue-600 p-3 text-white shadow-md transition-colors hover:bg-blue-700 transform hover:scale-105"
          aria-label="Next testimonial"
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      </div>
      <div className="relative h-[400px]">
        {testimonials.map((testimonial, index) => (
          <div
            key={testimonial.id}
            className={`absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-500 ${
              index === currentSlide ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          >
            <div className="mb-6 h-24 w-24 overflow-hidden rounded-full border-4 border-blue-600 shadow-lg transition-transform duration-300 transform hover:scale-110">
              <Image
                src={testimonial.image || "/placeholder.svg"}
                alt={testimonial.name}
                width={100}
                height={100}
                className="h-full w-full object-cover"
              />
            </div>
            <p className="mb-6 text-center text-xl italic text-gray-700">&ldquo;{testimonial.quote}&rdquo;</p>
            <h4 className="text-center text-2xl font-bold text-blue-600">{testimonial.name}</h4>
            <p className="text-center text-lg text-gray-600">{testimonial.role}</p>
          </div>
        ))}
      </div>
      <div className="mt-8 flex justify-center space-x-3">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-3 w-12 rounded-full transition-colors ${
              index === currentSlide ? "bg-blue-600" : "bg-gray-300"
            }`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

