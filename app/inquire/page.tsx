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

export default function InquirePage() {
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
    // Handle form submission
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
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Inquiry Submitted Successfully!</h2>
              <p className="text-gray-600 mb-6">
                Thank you for your inquiry. We have received your message and our team will get back to you within 24-48
                hours.
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
        <section className="relative bg-[url('/placeholder.svg?height=400&width=1200&text=Inquire')] bg-cover bg-center py-24">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-blue-900/90"></div>
          <HeroAnimation />
          <div className="container relative z-20">
            <div className="mx-auto max-w-3xl text-center text-white">
              <h1 className="mb-4 text-4xl md:text-5xl font-extrabold drop-shadow-lg">Inquire Now</h1>
              <p className="text-xl leading-relaxed">
                Have questions about our courses? We're here to help you make the right choice.
              </p>
            </div>
          </div>
        </section>

        {/* Inquiry Form Section */}
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
                <h2 className="text-3xl font-bold text-primary mb-6">Inquiry Form</h2>
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

                  <div className="grid gap-6 md:grid-cols-2">
                    <div>
                      <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">
                        Course Category
                      </label>
                      <select
                        id="category"
                        value={selectedCategory}
                        onChange={handleCategoryChange}
                        className="w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                        Course
                      </label>
                      <select
                        id="course"
                        value={selectedCourse}
                        onChange={(e) => setSelectedCourse(e.target.value)}
                        className="w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                            className="text-sm inline-flex items-center text-indigo-600 hover:underline"
                          >
                            <FileText className="mr-1 h-3 w-3" /> View course details and syllabus
                          </Link>
                        </div>
                      )}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="inquiryType" className="block text-sm font-medium text-gray-700 mb-1">
                      Inquiry Type *
                    </label>
                    <select
                      id="inquiryType"
                      className="w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    >
                      <option value="">Select inquiry type</option>
                      <option value="course-info">Course Information</option>
                      <option value="admission">Admission Requirements</option>
                      <option value="fees">Fees and Funding</option>
                      <option value="schedule">Class Schedule</option>
                      <option value="career">Career Opportunities</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Your Message *
                    </label>
                    <Textarea
                      id="message"
                      rows={5}
                      className="w-full"
                      placeholder="Please provide details about your inquiry..."
                      required
                    />
                  </div>

                  <div className="flex items-start">
                    <input
                      id="newsletter"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500 mt-1"
                    />
                    <label htmlFor="newsletter" className="ml-2 block text-sm text-gray-700">
                      I would like to receive updates about courses, events, and promotions
                    </label>
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-lg transition-colors duration-300"
                  >
                    Submit Inquiry
                  </Button>
                </form>
              </div>

              {/* Information */}
              <div>
                <h2 className="text-3xl font-bold text-primary mb-6">Contact Information</h2>
                <div className="bg-gray-50 p-8 rounded-xl shadow-lg mb-8">
                  <h3 className="text-xl font-bold text-primary mb-4">Get in Touch</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <span className="mr-3 mt-1">📞</span>
                      <div>
                        <span className="block font-medium text-gray-800">Phone</span>
                        <span className="text-gray-600">+94117040140 / +94768545962</span>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-3 mt-1">💬</span>
                      <div>
                        <span className="block font-medium text-gray-800">WhatsApp</span>
                        <a
                          href="https://wa.me/94768545962"
                          className="text-gray-600 hover:text-blue-600 transition-colors"
                        >
                          +94768545962
                        </a>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-3 mt-1">✉️</span>
                      <div>
                        <span className="block font-medium text-gray-800">Email</span>
                        <span className="text-gray-600">info@imledu.lk</span>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-3 mt-1">📍</span>
                      <div>
                        <span className="block font-medium text-gray-800">Address</span>
                        <span className="text-gray-600">No.135E-2/1, Galle Road, Dehiwala, Sri Lanka</span>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-3 mt-1">🕒</span>
                      <div>
                        <span className="block font-medium text-gray-800">Office Hours</span>
                        <span className="text-gray-600">Monday-Saturday: 9.00 AM – 5.30 PM</span>
                        <span className="block text-gray-600">Sunday: 9.00 AM – 1.00 PM</span>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-xl shadow-lg">
                  <h3 className="text-xl font-bold text-primary mb-6 flex items-center">
                    <svg
                      className="w-6 h-6 mr-2 text-blue-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    Knowledge Center
                  </h3>

                  <div className="space-y-5">
                    <div className="border-l-4 border-blue-600 pl-4 py-1 transition-all duration-300 hover:bg-blue-100/50 hover:shadow-sm rounded">
                      <h4 className="font-semibold text-blue-900 mb-1">How soon will I receive a response?</h4>
                      <p className="text-gray-700">
                        We aim to respond to all inquiries within 24-48 hours during business days.
                      </p>
                    </div>

                    <div className="border-l-4 border-indigo-600 pl-4 py-1 transition-all duration-300 hover:bg-indigo-100/50 hover:shadow-sm rounded">
                      <h4 className="font-semibold text-indigo-900 mb-1">Can I visit the campus?</h4>
                      <p className="text-gray-700">
                        Yes, you can schedule a campus tour by contacting our admissions office.
                      </p>
                    </div>

                    <div className="border-l-4 border-purple-600 pl-4 py-1 transition-all duration-300 hover:bg-purple-100/50 hover:shadow-sm rounded">
                      <h4 className="font-semibold text-purple-900 mb-1">Are there any scholarships available?</h4>
                      <p className="text-gray-700">
                        We offer merit-based scholarships for eligible students. Please inquire for more details.
                      </p>
                    </div>

                    <div className="border-l-4 border-blue-600 pl-4 py-1 transition-all duration-300 hover:bg-blue-100/50 hover:shadow-sm rounded">
                      <h4 className="font-semibold text-blue-900 mb-1">Do you offer part-time courses?</h4>
                      <p className="text-gray-700">
                        Yes, many of our courses are available in part-time and evening formats to accommodate working
                        professionals.
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 pt-5 border-t border-blue-200">
                    <Link
                      href="/course-details"
                      className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
                    >
                      <span>View complete course details</span>
                      <FileText className="ml-2 w-4 h-4" />
                    </Link>
                  </div>
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

