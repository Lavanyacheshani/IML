import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import MainHeader from "@/app/components/main-header"
import Footer from "@/app/components/footer"
import HeroAnimation from "@/app/components/hero-animation"

// Mock data for courses
const coursesData = {
  certificate: [
    {
      id: "digital-marketing",
      title: "Certificate in Digital Marketing",
      description: "Comprehensive introduction to digital marketing strategies and tools.",
      duration: "3 months",
      image: "/placeholder.svg?height=400&width=600&text=Digital+Marketing",
    },
    {
      id: "project-management",
      title: "Certificate in Project Management",
      description: "Essential project management skills and methodologies.",
      duration: "3 months",
      image: "/placeholder.svg?height=400&width=600&text=Project+Management",
    },
    {
      id: "data-analytics",
      title: "Certificate in Data Analytics",
      description: "Introduction to data analysis techniques and tools.",
      duration: "4 months",
      image: "/placeholder.svg?height=400&width=600&text=Data+Analytics",
    },
  ],
  diploma: [
    {
      id: "business-management",
      title: "Diploma in Business Management",
      description: "A comprehensive business diploma covering all aspects of modern business management.",
      duration: "1 year",
      image: "/placeholder.svg?height=400&width=600&text=Business+Management",
    },
    {
      id: "marketing",
      title: "Diploma in Marketing",
      description: "Specialized diploma in marketing principles, digital marketing, and brand management.",
      duration: "1 year",
      image: "/placeholder.svg?height=400&width=600&text=Marketing",
    },
    {
      id: "human-resources",
      title: "Diploma in Human Resource Management",
      description: "Comprehensive training in HR practices, recruitment, and employee relations.",
      duration: "1 year",
      image: "/placeholder.svg?height=400&width=600&text=HR+Management",
    },
  ],
  "postgraduate-diploma": [
    {
      id: "pgd-business",
      title: "Postgraduate Diploma in Business Administration",
      description: "Advanced business studies for graduates looking to enhance their management skills.",
      duration: "1 year",
      image: "/placeholder.svg?height=400&width=600&text=PGD+Business",
    },
    {
      id: "pgd-marketing",
      title: "Postgraduate Diploma in Marketing",
      description: "Advanced marketing program with focus on strategic marketing management.",
      duration: "1 year",
      image: "/placeholder.svg?height=400&width=600&text=PGD+Marketing",
    },
    {
      id: "pgd-finance",
      title: "Postgraduate Diploma in Finance",
      description: "Specialized program in financial management and analysis.",
      duration: "1 year",
      image: "/placeholder.svg?height=400&width=600&text=PGD+Finance",
    },
  ],
  mba: [
    {
      id: "mba-general",
      title: "Master of Business Administration",
      description: "Comprehensive MBA program covering all key areas of business administration.",
      duration: "2 years",
      image: "/placeholder.svg?height=400&width=600&text=MBA",
    },
    {
      id: "mba-marketing",
      title: "MBA in Marketing",
      description: "Specialized MBA with focus on advanced marketing strategies and leadership.",
      duration: "2 years",
      image: "/placeholder.svg?height=400&width=600&text=MBA+Marketing",
    },
    {
      id: "mba-finance",
      title: "MBA in Finance",
      description: "Specialized MBA with focus on financial management and strategic financial leadership.",
      duration: "2 years",
      image: "/placeholder.svg?height=400&width=600&text=MBA+Finance",
    },
  ],
}

const categoryTitles = {
  certificate: "Certificate Courses",
  diploma: "Diploma Courses",
  "postgraduate-diploma": "Postgraduate Diploma Courses",
  mba: "MBA Programs",
}

export default function CoursesPage({ params }: { params: { category: string } }) {
  const { category } = params
  const courses = coursesData[category as keyof typeof coursesData] || []
  const categoryTitle = categoryTitles[category as keyof typeof categoryTitles] || "Courses"

  return (
    <div className="min-h-screen flex flex-col">
      <MainHeader />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-[url('/placeholder.svg?height=400&width=1200')] bg-cover bg-center py-24">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-blue-900/90"></div>
          <HeroAnimation />
          <div className="container relative z-20">
            <div className="mx-auto max-w-3xl text-center text-white">
              <h1 className="mb-4 text-4xl md:text-5xl font-extrabold drop-shadow-lg">{categoryTitle}</h1>
              <p className="text-xl leading-relaxed">
                Explore our range of {category.toLowerCase()} courses designed to help you achieve your goals
              </p>
            </div>
          </div>
        </section>

        {/* Courses List Section */}
        <section className="py-16 bg-white">
          <div className="container">
            <div className="mb-8">
              <Link href="/" className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors">
                <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
              </Link>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {courses.map((course) => (
                <div
                  key={course.id}
                  className="group overflow-hidden rounded-xl bg-white shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
                >
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image
                      src={course.image || "/placeholder.svg"}
                      alt={course.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-6">
                    <div className="mb-4">
                      <span className="inline-block bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                        Duration: {course.duration}
                      </span>
                    </div>
                    <h3 className="mb-2 text-xl font-bold text-primary">{course.title}</h3>
                    <p className="mb-4 text-gray-600">{course.description}</p>
                    <div className="flex space-x-2">
                      <Link href={`/courses/${category}/${course.id}`}>
                        <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                          View Details
                        </Button>
                      </Link>
                      <Link href={`/register?course=${course.id}&category=${category}`}>
                        <Button className="bg-blue-600 hover:bg-blue-700 text-white">Register</Button>
                      </Link>
                      <Link href={`/inquire?course=${course.id}&category=${category}`}>
                        <Button variant="outline" className="border-primary text-primary hover:bg-primary/10">
                          Inquire Now
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {courses.length === 0 && (
              <div className="text-center py-12">
                <h3 className="text-2xl font-bold text-gray-700 mb-4">No courses found</h3>
                <p className="text-gray-600 mb-6">We couldn't find any courses in this category.</p>
                <Link href="/">
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white">Back to Home</Button>
                </Link>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

