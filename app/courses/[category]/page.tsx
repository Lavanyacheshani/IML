import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Clock, Users, GraduationCap, Calendar, DollarSign } from "lucide-react"
import { Button } from "@/components/ui/button"
import MainHeader from "@/app/components/main-header"
import Footer from "@/app/components/footer"
import HeroAnimation from "@/app/components/hero-animation"
import { getCoursesByCategory, categoryTitles, contactInfo, getAllCourses } from "@/lib/course-data"

export default function CoursesPage({ params }: { params: { category: string } }) {
  const { category } = params
  const courses = getCoursesByCategory(category)
  const categoryTitle = categoryTitles[category as keyof typeof categoryTitles] || "Courses"

  return (
    <div className="min-h-screen flex flex-col">
      <MainHeader />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-[url('/assets/banner1.jpg')] bg-cover bg-center py-24">
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
                    {course.featured && (
                      <div className="absolute top-4 right-4 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                        Featured
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <div className="mb-4 flex flex-wrap gap-2">
                      <span className="inline-flex items-center bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                        <Clock className="mr-1 h-3 w-3" />
                        {course.duration}
                      </span>
                      {course.investment && (
                        <span className="inline-flex items-center bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">
                          <DollarSign className="mr-1 h-3 w-3" />
                          {course.investment}
                        </span>
                      )}
                    </div>
                    <h3 className="mb-2 text-xl font-bold text-primary">{course.title}</h3>
                    <p className="mb-4 text-gray-600 line-clamp-3">{course.description}</p>
                    
                    {course.targetAudience && (
                      <div className="mb-4">
                        <div className="flex items-center text-sm text-gray-600 mb-1">
                          <Users className="mr-1 h-4 w-4" />
                          <span className="font-medium">Target Audience:</span>
                        </div>
                        <p className="text-sm text-gray-600 ml-5">{course.targetAudience}</p>
                      </div>
                    )}

                    {course.accreditation && (
                      <div className="mb-4">
                        <div className="flex items-center text-sm text-gray-600 mb-1">
                          <GraduationCap className="mr-1 h-4 w-4" />
                          <span className="font-medium">Accreditation:</span>
                        </div>
                        <p className="text-sm text-gray-600 ml-5 line-clamp-2">{course.accreditation}</p>
                      </div>
                    )}

                    <div className="flex flex-wrap gap-2">
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

            {/* Contact Information */}
            <div className="mt-12 bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-primary mb-4">Need Help?</h3>
              <p className="text-gray-600 mb-4">
                For more information about our courses or to register, please contact us:
              </p>
              <div className="flex items-center space-x-4">
                <div className="flex items-center">
                  <span className="font-medium text-gray-700">Contact:</span>
                  <span className="ml-2 text-blue-600">{contactInfo.name}</span>
                </div>
                <div className="flex items-center">
                  <span className="font-medium text-gray-700">Phone/WhatsApp:</span>
                  <a href={`tel:${contactInfo.phone}`} className="ml-2 text-blue-600 hover:underline">
                    {contactInfo.phone}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

// ✅ Required for static export
export async function generateStaticParams() {
  const allCourses = getAllCourses()
  const uniqueCategories = [...new Set(allCourses.map(course => course.category))]

  return uniqueCategories.map(category => ({
    category: category,
  }))
}

