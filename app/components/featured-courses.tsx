import Image from "next/image"
import Link from "next/link"
import { Clock, DollarSign, Users, GraduationCap, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { getFeaturedCourses } from "@/lib/course-data"

export default function FeaturedCourses() {
  const featuredCourses = getFeaturedCourses()

  return (
    <section className="bg-gray-50 py-16 md:py-24">
      <div className="container">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-4 animate-fade-in-up">
            Featured Courses
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto animate-fade-in-up animation-delay-200">
            Discover our most popular and highly-rated courses designed to accelerate your career growth
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {featuredCourses.map((course, index) => (
            <div
              key={course.id}
              className="group bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={course.image || "/placeholder.svg"}
                  alt={course.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                  Featured
                </div>
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

                <h3 className="text-xl font-bold text-primary mb-2 line-clamp-2">{course.title}</h3>
                <p className="text-gray-600 mb-4 line-clamp-3">{course.description}</p>

                {course.targetAudience && (
                  <div className="mb-4">
                    <div className="flex items-center text-sm text-gray-600 mb-1">
                      <Users className="mr-1 h-4 w-4" />
                      <span className="font-medium">For:</span>
                    </div>
                    <p className="text-sm text-gray-600 ml-5">{course.targetAudience}</p>
                  </div>
                )}

                {course.accreditation && (
                  <div className="mb-4">
                    <div className="flex items-center text-sm text-gray-600 mb-1">
                      <GraduationCap className="mr-1 h-4 w-4" />
                      <span className="font-medium">Accredited by:</span>
                    </div>
                    <p className="text-sm text-gray-600 ml-5 line-clamp-2">{course.accreditation}</p>
                  </div>
                )}

                <div className="flex flex-wrap gap-2">
                  <Link href={`/courses/${course.category}/${course.id}`}>
                    <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                      View Details
                    </Button>
                  </Link>
                  <Link href={`/register?course=${course.id}&category=${course.category}`}>
                    <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                      Register
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/courses/certificate">
            <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              View All Courses <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
} 