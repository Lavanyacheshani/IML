"use client"

import { useState } from "react"
import Image from "next/image"
import { X } from "lucide-react"
import MainHeader from "../components/main-header"
import Footer from "../components/footer"
import HeroAnimation from "../components/hero-animation"

// Gallery categories and images
const galleryData = {
  campus: [
    { id: 1, src: "/placeholder.svg?height=400&width=600&text=Campus+1", alt: "Campus Building" },
    { id: 2, src: "/placeholder.svg?height=400&width=600&text=Campus+2", alt: "Campus Library" },
    { id: 3, src: "/placeholder.svg?height=400&width=600&text=Campus+3", alt: "Campus Cafeteria" },
    { id: 4, src: "/placeholder.svg?height=400&width=600&text=Campus+4", alt: "Campus Garden" },
    { id: 5, src: "/placeholder.svg?height=400&width=600&text=Campus+5", alt: "Campus Auditorium" },
    { id: 6, src: "/placeholder.svg?height=400&width=600&text=Campus+6", alt: "Campus Sports Facilities" },
  ],
  events: [
    { id: 7, src: "/placeholder.svg?height=400&width=600&text=Event+1", alt: "Annual Convocation" },
    { id: 8, src: "/placeholder.svg?height=400&width=600&text=Event+2", alt: "Business Summit" },
    { id: 9, src: "/placeholder.svg?height=400&width=600&text=Event+3", alt: "Cultural Festival" },
    { id: 10, src: "/placeholder.svg?height=400&width=600&text=Event+4", alt: "Sports Day" },
    { id: 11, src: "/placeholder.svg?height=400&width=600&text=Event+5", alt: "Industry Visit" },
    { id: 12, src: "/placeholder.svg?height=400&width=600&text=Event+6", alt: "Guest Lecture" },
  ],
  students: [
    { id: 13, src: "/placeholder.svg?height=400&width=600&text=Students+1", alt: "Classroom Session" },
    { id: 14, src: "/placeholder.svg?height=400&width=600&text=Students+2", alt: "Group Study" },
    { id: 15, src: "/placeholder.svg?height=400&width=600&text=Student+Presentation" },
    { id: 16, src: "/placeholder.svg?height=400&width=600&text=Students+4", alt: "Laboratory Work" },
    { id: 17, src: "/placeholder.svg?height=400&width=600&text=Students+5", alt: "Student Club Activities" },
    { id: 18, src: "/placeholder.svg?height=400&width=600&text=Students+6", alt: "Graduation Ceremony" },
  ],
}

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("campus")
  const [selectedImage, setSelectedImage] = useState<null | { src: string; alt: string }>(null)

  const handleImageClick = (image: { src: string; alt: string }) => {
    setSelectedImage(image)
  }

  const closeModal = () => {
    setSelectedImage(null)
  }

  return (
    <div className="min-h-screen flex flex-col">
      <MainHeader />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-[url('/placeholder.svg?height=400&width=1200&text=Gallery')] bg-cover bg-center py-24">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-blue-900/90"></div>
          <HeroAnimation />
          <div className="container relative z-20">
            <div className="mx-auto max-w-3xl text-center text-white">
              <h1 className="mb-4 text-4xl md:text-5xl font-extrabold drop-shadow-lg">Gallery</h1>
              <p className="text-xl leading-relaxed">
                Explore our campus, events, and student activities through our photo gallery
              </p>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="py-16 bg-white">
          <div className="container">
            {/* Category Tabs */}
            <div className="flex flex-wrap justify-center mb-12 gap-4">
              {Object.keys(galleryData).map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-6 py-3 rounded-full text-lg font-medium transition-colors ${
                    activeCategory === category
                      ? "bg-primary text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </button>
              ))}
            </div>

            {/* Gallery Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {galleryData[activeCategory as keyof typeof galleryData].map((image) => (
                <div
                  key={image.id}
                  className="overflow-hidden rounded-xl shadow-lg cursor-pointer transition-transform hover:scale-105"
                  onClick={() => handleImageClick(image)}
                >
                  <div className="relative h-64 w-full">
                    <Image src={image.src || "/placeholder.svg"} alt={image.alt} fill className="object-cover" />
                  </div>
                  <div className="p-4 bg-white">
                    <h3 className="text-lg font-medium text-gray-800">{image.alt}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Image Modal */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4" onClick={closeModal}>
            <div className="relative max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
              <button
                className="absolute -top-12 right-0 bg-white rounded-full p-2 text-gray-800 hover:bg-gray-200 transition-colors"
                onClick={closeModal}
              >
                <X className="h-6 w-6" />
              </button>
              <div className="relative h-[70vh] w-full">
                <Image
                  src={selectedImage.src || "/placeholder.svg"}
                  alt={selectedImage.alt}
                  fill
                  className="object-contain"
                />
              </div>
              <div className="mt-4 bg-white p-4 rounded-lg">
                <h3 className="text-xl font-bold text-gray-800">{selectedImage.alt}</h3>
              </div>
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  )
}

