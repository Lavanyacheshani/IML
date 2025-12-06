"use client"

import { useState } from "react"
import Image from "next/image"
import { X, ChevronLeft, ChevronRight } from "lucide-react"
import MainHeader from "../components/main-header"
import Footer from "../components/footer"
import HeroAnimation from "../components/hero-animation"

// Gallery images from /pic folder
const galleryImages = [
  { id: 1, src: "/pic/20230326_130113.jpg", alt: "AIML Campus Activity" },
  { id: 2, src: "/pic/20220604_151724.jpg", alt: "Student Learning Session" },
  { id: 3, src: "/pic/3.jpg", alt: "Classroom Environment" },
  { id: 4, src: "/pic/20200120_114140.jpg", alt: "AIML Business School Event" },
  { id: 5, src: "/pic/KES_6693-300x200.jpg", alt: "Professional Training Session" },
  { id: 6, src: "/pic/KES_6795-300x200.jpg", alt: "Student Presentation" },
  { id: 7, src: "/pic/KES_6863-300x200.jpg", alt: "Group Discussion" },
  { id: 8, src: "/pic/KES_8151-300x200.jpg", alt: "Interactive Learning" },
  { id: 9, src: "/pic/KUALA-LUMPUR-300x200.jpg", alt: "International Collaboration" },
  { id: 10, src: "/pic/2-300x225.jpg", alt: "Campus Life" },
  { id: 11, src: "/pic/20191103_113828-300x217.jpg", alt: "Student Activities" },
  { id: 12, src: "/pic/20191006_102826-300x225.jpg", alt: "Learning Environment" },
  { id: 13, src: "/pic/20190219_125948-300x225.jpg", alt: "Academic Excellence" },
  { id: 14, src: "/pic/20190810_102021-300x225.jpg", alt: "Professional Development" },
  { id: 15, src: "/pic/ima-300x202.jpg", alt: "AIML Facilities" },
  { id: 16, src: "/pic/1-300x225.jpg", alt: "Student Success" },
  { id: 17, src: "/pic/WhatsApp-Image-2021-03-28-at-10.23.48-AM-300x200.jpeg", alt: "Graduation Ceremony" },
  { id: 18, src: "/pic/WhatsApp-Image-2021-03-30-at-12.09.37-AM-300x200.jpeg", alt: "Award Ceremony" },
  { id: 19, src: "/pic/WhatsApp-Image-2021-03-28-at-10.23.47-AM-1-300x200.jpeg", alt: "Student Achievement" },
]

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<null | { src: string; alt: string; id: number }>(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const handleImageClick = (image: { src: string; alt: string; id: number }) => {
    const index = galleryImages.findIndex(img => img.id === image.id)
    setCurrentImageIndex(index)
    setSelectedImage(image)
  }

  const closeModal = () => {
    setSelectedImage(null)
  }

  const nextImage = () => {
    const nextIndex = (currentImageIndex + 1) % galleryImages.length
    setCurrentImageIndex(nextIndex)
    setSelectedImage(galleryImages[nextIndex])
  }

  const prevImage = () => {
    const prevIndex = currentImageIndex === 0 ? galleryImages.length - 1 : currentImageIndex - 1
    setCurrentImageIndex(prevIndex)
    setSelectedImage(galleryImages[prevIndex])
  }

  return (
    <div className="min-h-screen flex flex-col">
      <MainHeader />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-600 to-indigo-800 py-24">
          <div className="absolute inset-0 bg-black/20"></div>
          <HeroAnimation />
          <div className="container relative z-20">
            <div className="mx-auto max-w-3xl text-center text-white">
              <h1 className="mb-4 text-4xl md:text-5xl font-extrabold drop-shadow-lg">Photo Gallery</h1>
              <p className="text-xl leading-relaxed">
                Explore the vibrant life and activities at AIML Business School through our comprehensive photo collection
              </p>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="py-16 bg-gray-50">
          <div className="container">
            {/* Gallery Header */}
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Campus Life & Activities</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Discover the dynamic environment where students learn, grow, and prepare for successful careers
              </p>
            </div>

            {/* Gallery Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {galleryImages.map((image) => (
                <div
                  key={image.id}
                  className="group overflow-hidden rounded-xl shadow-lg cursor-pointer transition-all duration-300 hover:shadow-2xl hover:scale-105 bg-white"
                  onClick={() => handleImageClick(image)}
                >
                  <div className="relative h-64 w-full overflow-hidden">
                    <Image 
                      src={image.src} 
                      alt={image.alt} 
                      fill 
                      className="object-cover transition-transform duration-300 group-hover:scale-110" 
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="bg-white/90 rounded-full p-3">
                          <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Gallery Stats */}
            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="text-3xl font-bold text-blue-600 mb-2">{galleryImages.length}</div>
                <div className="text-gray-600">Photos Available</div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="text-3xl font-bold text-blue-600 mb-2">24/7</div>
                <div className="text-gray-600">Access to Memories</div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="text-3xl font-bold text-blue-600 mb-2">100%</div>
                <div className="text-gray-600">Authentic Moments</div>
              </div>
            </div>
          </div>
        </section>

        {/* Image Modal */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4" onClick={closeModal}>
            <div className="relative max-w-6xl w-full h-full flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
              {/* Close Button */}
              <button
                className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full p-3 text-white hover:bg-white/30 transition-colors z-10"
                onClick={closeModal}
              >
                <X className="h-6 w-6" />
              </button>

              {/* Navigation Buttons */}
              <button
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm rounded-full p-3 text-white hover:bg-white/30 transition-colors z-10"
                onClick={prevImage}
              >
                <ChevronLeft className="h-6 w-6" />
              </button>

              <button
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm rounded-full p-3 text-white hover:bg-white/30 transition-colors z-10"
                onClick={nextImage}
              >
                <ChevronRight className="h-6 w-6" />
              </button>

              {/* Image */}
              <div className="relative w-full h-full flex items-center justify-center">
                <Image
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  fill
                  className="object-contain"
                />
              </div>

              {/* Image Info */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/20 backdrop-blur-sm rounded-lg p-4 text-white text-center">
                <h3 className="text-lg font-semibold mb-1">{selectedImage.alt}</h3>
                <p className="text-sm opacity-90">{currentImageIndex + 1} of {galleryImages.length}</p>
              </div>
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  )
}

