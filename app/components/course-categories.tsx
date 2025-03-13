import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const categories = [
  {
    id: "certificate",
    title: "Certificate Courses",
    description: "Short-term professional development and skill enhancement programs",
    image: "/assets/c1.jpg",
  },
  {
    id: "diploma",
    title: "Diploma Courses",
    description: "Comprehensive diploma programs for career advancement",
    image: "/assets/c4.jpg",
  },
  {
    id: "postgraduate-diploma",
    title: "Postgraduate Diploma Courses",
    description: "Advanced programs for graduates seeking specialized knowledge",
    image: "/assets/c3.jpg",
  },
  {
    id: "mba",
    title: "MBA Programs",
    description: "Master of Business Administration programs for aspiring leaders",
    image: "/assets/c4.jpg",
  },
]

export default function CourseCategories() {
  return (
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {categories.map((category) => (
        <div
          key={category.id}
          className="group overflow-hidden rounded-xl bg-white shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 animate-fade-in-up"
        >
          <div className="relative h-48 w-full overflow-hidden">
            <Image
              src={category.image || "/placeholder.svg"}
              alt={category.title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-110"
            />
          </div>
          <div className="p-6">
            <h3 className="mb-2 text-xl font-bold text-primary">{category.title}</h3>
            <p className="mb-4 text-gray-600">{category.description}</p>
            <Link
              href={`/courses/${category.id}`}
              className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors"
            >
              View Courses <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      ))}
    </div>
  )
}

