import Image from "next/image"
import Link from "next/link"
import {
  ArrowLeft, Clock, Users, GraduationCap, Calendar, DollarSign, Phone,
  CheckCircle, BookOpen, Target, Award, TrendingUp
} from "lucide-react"
import { Button } from "@/components/ui/button"
import MainHeader from "@/app/components/main-header"
import Footer from "@/app/components/footer"
import HeroAnimation from "@/app/components/hero-animation"
import { getCourseById, getAllCourses, contactInfo } from "@/lib/course-data"

export default function CourseDetailPage({ params }: { params: { category: string; id: string } }) {
  const { category, id } = params
  const course = getCourseById(id)

  if (!course) {
    return (
      <div className="min-h-screen flex flex-col">
        <MainHeader />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-700 mb-4">Course Not Found</h1>
            <p className="text-gray-600 mb-6">The course you're looking for doesn't exist.</p>
            <Link href="/">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">Back to Home</Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen flex flex-col">
      <MainHeader />

      <main className="flex-1">
        <section className="relative bg-[url('/assets/banner2.jpg')] bg-cover bg-center py-24">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-blue-900/90"></div>
          <HeroAnimation />
          <div className="container relative z-20">
            <div className="mx-auto max-w-4xl text-center text-white">
              <h1 className="mb-4 text-4xl md:text-5xl font-extrabold drop-shadow-lg">{course.title}</h1>
              <p className="text-xl leading-relaxed mb-6">{course.description}</p>
              <div className="flex flex-wrap justify-center gap-4">
                <div className="flex items-center bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2">
                  <Clock className="mr-2 h-5 w-5" />
                  <span className="font-medium">{course.duration}</span>
                </div>
                {course.investment && (
                  <div className="flex items-center bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2">
                    <DollarSign className="mr-2 h-5 w-5" />
                    <span className="font-medium">{course.investment}</span>
                  </div>
                )}
                {course.featured && (
                  <div className="flex items-center bg-red-500 rounded-lg px-4 py-2">
                    <Award className="mr-2 h-5 w-5" />
                    <span className="font-medium">Featured Course</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container">
            <div className="mb-8">
              <Link href={`/courses/${category}`} className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors">
                <ArrowLeft className="mr-2 h-4 w-4" /> Back to {category.replace('-', ' ')} Courses
              </Link>
            </div>

            <div className="grid gap-12 lg:grid-cols-3">
              <div className="lg:col-span-2">
                <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
                  <h2 className="text-2xl font-bold text-primary mb-6">Course Overview</h2>
                  <p className="text-gray-700 leading-relaxed mb-6">{course.description}</p>

                  {course.accreditation && (
                    <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6">
                      <div className="flex items-start">
                        <GraduationCap className="mr-3 h-6 w-6 text-blue-600 mt-1" />
                        <div>
                          <h3 className="font-semibold text-blue-900 mb-1">Accreditation</h3>
                          <p className="text-blue-800">{course.accreditation}</p>
                        </div>
                      </div>
                    </div>
                  )}

                  {course.modules && course.modules.length > 0 && course.id !== 'diploma-marketing' && (
                    <div className="mb-6">
                      <h3 className="text-xl font-bold text-primary mb-4">Course Modules</h3>
                      <div className="grid gap-3 md:grid-cols-2">
                        {course.modules.map((module, index) => (
                          typeof module === 'string' ? (
                            <div key={index} className="flex items-start">
                              <CheckCircle className="mr-3 h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-700">{module}</span>
                            </div>
                          ) : null
                        ))}
                      </div>
                    </div>
                  )}

                  {course.entryRequirements && (
                    <div className="mb-6">
                      <h3 className="text-xl font-bold text-primary mb-4">Entry Requirements</h3>
                      <p className="text-gray-700">{course.entryRequirements}</p>
                    </div>
                  )}

                  {course.careerOpportunities && course.careerOpportunities.length > 0 && (
                    <div className="mb-6">
                      <h3 className="text-xl font-bold text-primary mb-4">Career Opportunities</h3>
                      <div className="grid gap-2">
                        {course.careerOpportunities.map((opportunity, index) => (
                          <div key={index} className="flex items-center">
                            <TrendingUp className="mr-3 h-4 w-4 text-blue-600" />
                            <span className="text-gray-700">{opportunity}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {course.progressionPathway && (
                    <div className="bg-green-50 border-l-4 border-green-500 p-4">
                      <div className="flex items-start">
                        <TrendingUp className="mr-3 h-6 w-6 text-green-600 mt-1" />
                        <div>
                          <h3 className="font-semibold text-green-900 mb-1">Progression Pathway</h3>
                          <p className="text-green-800">{course.progressionPathway}</p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <div className="lg:col-span-1">
                <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-6">
                  <div className="relative h-48 w-full">
                    <Image
                      src={course.image || "/placeholder.svg"}
                      alt={course.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
                  <h3 className="text-xl font-bold text-primary mb-4">Course Details</h3>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <Clock className="mr-3 h-5 w-5 text-blue-600" />
                      <div>
                        <span className="text-sm text-gray-600">Duration</span>
                        <p className="font-medium">{course.duration}</p>
                      </div>
                    </div>

                    {course.commencement && (
                      <div className="flex items-center">
                        <Calendar className="mr-3 h-5 w-5 text-blue-600" />
                        <div>
                          <span className="text-sm text-gray-600">Commencement</span>
                          <p className="font-medium">{course.commencement}</p>
                        </div>
                      </div>
                    )}

                    {course.schedule && (
                      <div className="flex items-center">
                        <Calendar className="mr-3 h-5 w-5 text-blue-600" />
                        <div>
                          <span className="text-sm text-gray-600">Schedule</span>
                          <p className="font-medium">{course.schedule}</p>
                        </div>
                      </div>
                    )}

                    {course.targetAudience && (
                      <div className="flex items-center">
                        <Users className="mr-3 h-5 w-5 text-blue-600" />
                        <div>
                          <span className="text-sm text-gray-600">Target Audience</span>
                          <p className="font-medium">{course.targetAudience}</p>
                        </div>
                      </div>
                    )}

                    {course.investment && (
                      <div className="flex items-center">
                        <DollarSign className="mr-3 h-5 w-5 text-blue-600" />
                        <div>
                          <span className="text-sm text-gray-600">Investment</span>
                          <p className="font-medium">{course.investment}</p>
                        </div>
                      </div>
                    )}

                    {course.ukExamFee && (
                      <div className="flex items-center">
                        <BookOpen className="mr-3 h-5 w-5 text-blue-600" />
                        <div>
                          <span className="text-sm text-gray-600">UK Exam Fee</span>
                          <p className="font-medium">{course.ukExamFee}</p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                <div className="bg-blue-50 rounded-xl p-6 mb-6">
                  <h3 className="text-xl font-bold text-primary mb-4">Get in Touch</h3>
                  <p className="text-gray-700 mb-4">
                    Ready to enroll? Contact us for more information or to register for this course.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <Users className="mr-3 h-5 w-5 text-blue-600" />
                      <span className="text-gray-700">{contactInfo.name}</span>
                    </div>
                    <div className="flex items-center">
                      <Phone className="mr-3 h-5 w-5 text-blue-600" />
                      <a href={`tel:${contactInfo.phone}`} className="text-blue-600 hover:underline">
                        {contactInfo.phone}
                      </a>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <Link href={`/register?course=${course.id}&category=${category}`} className="block">
                    <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                      Register Now
                    </Button>
                  </Link>
                  <Link href={`/inquire?course=${course.id}&category=${category}`} className="block">
                    <Button variant="outline" className="w-full border-blue-600 text-blue-600 hover:bg-blue-50">
                      Inquire About This Course
                    </Button>
                  </Link>
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

  return allCourses.map(course => ({
    category: course.category,
    id: course.id,
  }))
}
