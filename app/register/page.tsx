"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import MainHeader from "../components/main-header"
import Footer from "../components/footer"
import HeroAnimation from "../components/hero-animation"

// Mock data for courses
const coursesData = {
  certificate: [
    { id: "digital-marketing", title: "Certificate in Digital Marketing" },
    { id: "project-management", title: "Certificate in Project Management" },
    { id: "data-analytics", title: "Certificate in Data Analytics" },
  ],
  diploma: [
    { id: "business-management", title: "Diploma in Business Management" },
    { id: "marketing", title: "Diploma in Marketing" },
    { id: "human-resources", title: "Diploma in Human Resource Management" },
  ],
  "postgraduate-diploma": [
    { id: "pgd-business", title: "Postgraduate Diploma in Business Administration" },
    { id: "pgd-marketing", title: "Postgraduate Diploma in Marketing" },
    { id: "pgd-finance", title: "Postgraduate Diploma in Finance" },
  ],
  mba: [
    { id: "mba-general", title: "Master of Business Administration" },
    { id: "mba-marketing", title: "MBA in Marketing" },
    { id: "mba-finance", title: "MBA in Finance" },
  ],
}

const categoryTitles = {
  certificate: "Certificate Courses",
  diploma: "Diploma Courses",
  "postgraduate-diploma": "Postgraduate Diploma Courses",
  mba: "MBA Programs",
}

export default function RegisterPage() {
  const searchParams = useSearchParams()
  const courseId = searchParams.get("course")
  const categoryId = searchParams.get("category")

  const [selectedCategory, setSelectedCategory] = useState(categoryId || "")
  const [selectedCourse, setSelectedCourse] = useState(courseId || "")
  const [availableCourses, setAvailableCourses] = useState<{ id: string; title: string }[]>([])
  const [isSubmitted, setIsSubmitted] = useState(false)

  useEffect(() => {
    if (selectedCategory && coursesData[selectedCategory as keyof typeof coursesData]) {
      setAvailableCourses(coursesData[selectedCategory as keyof typeof coursesData])
    } else {
      setAvailableCourses([])
    }
  }, [selectedCategory])

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const category = e.target.value
    setSelectedCategory(category)
    setSelectedCourse("")
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission - would save to database after validation
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen flex flex-col">
        <MainHeader />
        <main className="flex-1 flex items-center justify-center bg-gray-50 py-16">
          <div className="container max-w-md">
            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-8 h-8 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Registration Successful!</h2>
              <p className="text-gray-600 mb-6">
                Thank you for registering with IML Business School. Your registration has been received successfully.
                Our admissions team will contact you shortly to guide you through the next steps.
              </p>
              <div className="flex flex-col space-y-3">
                <Link href="/">
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">Return to Home</Button>
                </Link>
                <Link href="/course-details">
                  <Button variant="outline" className="w-full border-blue-600 text-blue-600 hover:bg-blue-50">
                    View Course Details
                  </Button>
                </Link>
              </div>
            </div>
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
        {/* Hero Section */}
        <section className="relative bg-[url('/placeholder.svg?height=400&width=1200&text=Register')] bg-cover bg-center py-24">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-blue-900/90"></div>
          <HeroAnimation />
          <div className="container relative z-20">
            <div className="mx-auto max-w-3xl text-center text-white">
              <h1 className="mb-4 text-4xl md:text-5xl font-extrabold drop-shadow-lg">Register for a Course</h1>
              <p className="text-xl leading-relaxed">
                Take the first step towards your future career by registering for one of our courses
              </p>
            </div>
          </div>
        </section>

        {/* Registration Form Section */}
        <section className="py-16 bg-white">
          <div className="container">
            <div className="mb-8">
              <Link href="/" className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors">
                <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
              </Link>
            </div>

            <div className="grid gap-12 lg:grid-cols-2">
              {/* Form */}
              <div>
                <h2 className="text-3xl font-bold text-primary mb-6">Registration Form</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid gap-6 md:grid-cols-2">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                        First Name *
                      </label>
                      <Input id="firstName" type="text" className="w-full" required />
                    </div>

                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                        Last Name *
                      </label>
                      <Input id="lastName" type="text" className="w-full" required />
                    </div>
                  </div>

                  <div className="grid gap-6 md:grid-cols-2">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address *
                      </label>
                      <Input id="email" type="email" className="w-full" required />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                        Phone Number *
                      </label>
                      <Input id="phone" type="tel" className="w-full" required />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
                      Address
                    </label>
                    <Textarea id="address" rows={3} className="w-full" />
                  </div>

                  <div className="grid gap-6 md:grid-cols-2">
                    <div>
                      <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">
                        Course Category *
                      </label>
                      <select
                        id="category"
                        value={selectedCategory}
                        onChange={handleCategoryChange}
                        className="w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                      >
                        <option value="">Select a category</option>
                        {Object.entries(categoryTitles).map(([id, title]) => (
                          <option key={id} value={id}>
                            {title}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label htmlFor="course" className="block text-sm font-medium text-gray-700 mb-1">
                        Course *
                      </label>
                      <select
                        id="course"
                        value={selectedCourse}
                        onChange={(e) => setSelectedCourse(e.target.value)}
                        className="w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                        disabled={!selectedCategory}
                      >
                        <option value="">Select a course</option>
                        {availableCourses.map((course) => (
                          <option key={course.id} value={course.id}>
                            {course.title}
                          </option>
                        ))}
                      </select>
                      {selectedCourse && (
                        <div className="mt-2">
                          <Link
                            href="/course-details"
                            className="text-sm inline-flex items-center text-blue-600 hover:underline"
                          >
                            <FileText className="mr-1 h-3 w-3" /> View detailed course information
                          </Link>
                        </div>
                      )}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="education" className="block text-sm font-medium text-gray-700 mb-1">
                      Highest Education Qualification *
                    </label>
                    <select
                      id="education"
                      className="w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    >
                      <option value="">Select your highest qualification</option>
                      <option value="o-level">O/L or Equivalent</option>
                      <option value="a-level">A/L or Equivalent</option>
                      <option value="diploma">Diploma</option>
                      <option value="bachelor">Bachelor's Degree</option>
                      <option value="master">Master's Degree</option>
                      <option value="doctorate">Doctorate</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="comments" className="block text-sm font-medium text-gray-700 mb-1">
                      Additional Comments
                    </label>
                    <Textarea
                      id="comments"
                      rows={4}
                      className="w-full"
                      placeholder="Any specific requirements or questions..."
                    />
                  </div>

                  <div className="flex items-start">
                    <input
                      id="terms"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500 mt-1"
                      required
                    />
                    <label htmlFor="terms" className="ml-2 block text-sm text-gray-700">
                      I agree to the Terms and Conditions and Privacy Policy
                    </label>
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-lg transition-colors duration-300"
                  >
                    Submit Registration
                  </Button>
                </form>
              </div>

              {/* Information */}
              <div>
                <h2 className="text-3xl font-bold text-primary mb-6">Registration Information</h2>
                <div className="bg-gray-50 p-8 rounded-xl shadow-lg mb-8">
                  <h3 className="text-xl font-bold text-primary mb-4">How to Register</h3>
                  <ol className="list-decimal list-inside space-y-3 text-gray-700">
                    <li>Fill out the registration form with your personal details.</li>
                    <li>Select your preferred course category and specific course.</li>
                    <li>Submit the form to initiate the registration process.</li>
                    <li>Our admissions team will contact you within 48 hours to confirm your registration.</li>
                    <li>Complete the payment process to secure your place.</li>
                  </ol>
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <Link href="/course-details" className="text-blue-600 hover:underline inline-flex items-center">
                      <FileText className="mr-2 h-4 w-4" /> View detailed registration process
                    </Link>
                  </div>
                </div>

                <div className="bg-blue-50 p-8 rounded-xl shadow-lg mb-8">
                  <h3 className="text-xl font-bold text-primary mb-4">Required Documents</h3>
                  <ul className="list-disc list-inside space-y-3 text-gray-700">
                    <li>Copy of your national ID card or passport</li>
                    <li>Copies of your educational certificates</li>
                    <li>Passport-sized photograph</li>
                    <li>CV/Resume (for postgraduate and professional courses)</li>
                    <li>Work experience letters (if applicable)</li>
                  </ul>
                  <p className="mt-4 text-sm text-gray-600">
                    You will be asked to provide these documents after your initial registration is processed.
                  </p>
                </div>

                <div className="bg-green-50 p-8 rounded-xl shadow-lg">
                  <h3 className="text-xl font-bold text-primary mb-4">Payment Information</h3>
                  <p className="text-gray-700 mb-4">
                    Course fees can be paid in installments or in full. We accept the following payment methods:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>Bank transfer</li>
                    <li>Credit/Debit card</li>
                    <li>Cash payment at our campus</li>
                    <li>Online payment gateway</li>
                  </ul>
                  <p className="mt-4 text-sm text-gray-600">
                    Scholarships and financial aid options are available for eligible students. Please contact our
                    finance department for more information.
                  </p>
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

