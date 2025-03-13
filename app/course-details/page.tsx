import Link from "next/link"
import { ArrowLeft, BookOpen, Clock, Award, Users, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import MainHeader from "../components/main-header"
import Footer from "../components/footer"
import HeroAnimation from "../components/hero-animation"

export default function CourseDetailsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <MainHeader />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-[url('/placeholder.svg?height=400&width=1200&text=Course+Details')] bg-cover bg-center py-24">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-blue-900/90"></div>
          <HeroAnimation />
          <div className="container relative z-20">
            <div className="mx-auto max-w-3xl text-center text-white">
              <h1 className="mb-4 text-4xl md:text-5xl font-extrabold drop-shadow-lg">Course Details</h1>
              <p className="text-xl leading-relaxed">Comprehensive information about our programs and courses</p>
            </div>
          </div>
        </section>

        {/* Course Categories Section */}
        <section className="py-16 bg-white">
          <div className="container">
            <div className="mb-8">
              <Link href="/" className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors">
                <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
              </Link>
            </div>

            <h2 className="text-3xl font-bold text-primary mb-8">Our Course Categories</h2>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Certificate Courses",
                  description: "Short-term professional development and skill enhancement programs",
                  icon: <Clock className="h-8 w-8 text-blue-600" />,
                  items: [
                    "Certificate in Digital Marketing",
                    "Certificate in Project Management",
                    "Certificate in Data Analytics",
                  ],
                },
                {
                  title: "Diploma Courses",
                  description: "Comprehensive diploma programs for career advancement",
                  icon: <BookOpen className="h-8 w-8 text-purple-600" />,
                  items: [
                    "Diploma in Business Management",
                    "Diploma in Marketing",
                    "Diploma in Human Resource Management",
                  ],
                },
                {
                  title: "Postgraduate Diploma Courses",
                  description: "Advanced programs for graduates seeking specialized knowledge",
                  icon: <Award className="h-8 w-8 text-green-600" />,
                  items: [
                    "Postgraduate Diploma in Business Administration",
                    "Postgraduate Diploma in Marketing",
                    "Postgraduate Diploma in Finance",
                  ],
                },
                {
                  title: "MBA Programs",
                  description: "Master of Business Administration programs for aspiring leaders",
                  icon: <Users className="h-8 w-8 text-red-600" />,
                  items: ["Master of Business Administration", "MBA in Marketing", "MBA in Finance"],
                },
              ].map((category, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
                >
                  <div className="mb-4 rounded-full bg-blue-100 p-4 w-fit">{category.icon}</div>
                  <h3 className="text-xl font-bold text-primary mb-2">{category.title}</h3>
                  <p className="text-gray-600 mb-4">{category.description}</p>
                  <h4 className="font-medium text-gray-800 mb-2">Available Courses:</h4>
                  <ul className="space-y-1">
                    {category.items.map((item, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircle className="h-4 w-4 mr-2 text-green-500 mt-1 flex-shrink-0" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Admission Requirements Section */}
        <section className="py-16 bg-gray-50">
          <div className="container">
            <h2 className="text-3xl font-bold text-primary mb-8">Admission Requirements</h2>

            <div className="grid gap-8 md:grid-cols-2">
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold text-primary mb-4">Undergraduate Programs</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 mr-2 text-green-500 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Minimum 3 A-Levels at grades A-C or equivalent</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 mr-2 text-green-500 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">IELTS 6.0 or equivalent for international students</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 mr-2 text-green-500 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Completed application form</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 mr-2 text-green-500 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Personal statement</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 mr-2 text-green-500 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Academic references</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold text-primary mb-4">Postgraduate Programs</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 mr-2 text-green-500 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">
                      Bachelor's degree with minimum 2:2 classification or equivalent
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 mr-2 text-green-500 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Minimum 3 years of relevant work experience (for MBA)</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 mr-2 text-green-500 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">IELTS 6.5 or equivalent for international students</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 mr-2 text-green-500 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">CV/Resume</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 mr-2 text-green-500 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Two professional references</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Fee Structure Section */}
        <section className="py-16 bg-white">
          <div className="container">
            <h2 className="text-3xl font-bold text-primary mb-8">Fee Structure</h2>

            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-xl shadow-lg">
                <thead>
                  <tr className="bg-primary text-white">
                    <th className="py-4 px-6 text-left">Course</th>
                    <th className="py-4 px-6 text-left">Duration</th>
                    <th className="py-4 px-6 text-left">Total Fee (LKR)</th>
                    <th className="py-4 px-6 text-left">Payment Options</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-200 hover:bg-gray-50">
                    <td className="py-4 px-6">BA (Hons) in Business Management</td>
                    <td className="py-4 px-6">3 years</td>
                    <td className="py-4 px-6">1,200,000 per year</td>
                    <td className="py-4 px-6">Full payment, Semester-wise, Monthly installments</td>
                  </tr>
                  <tr className="border-b border-gray-200 hover:bg-gray-50">
                    <td className="py-4 px-6">Master of Business Administration (MBA)</td>
                    <td className="py-4 px-6">1-2 years</td>
                    <td className="py-4 px-6">1,800,000 (total)</td>
                    <td className="py-4 px-6">Full payment, Semester-wise, Monthly installments</td>
                  </tr>
                  <tr className="border-b border-gray-200 hover:bg-gray-50">
                    <td className="py-4 px-6">ACCA Qualification</td>
                    <td className="py-4 px-6">3-4 years</td>
                    <td className="py-4 px-6">75,000 per paper</td>
                    <td className="py-4 px-6">Per paper payment</td>
                  </tr>
                  <tr className="border-b border-gray-200 hover:bg-gray-50">
                    <td className="py-4 px-6">Digital Marketing Certificate</td>
                    <td className="py-4 px-6">8 weeks</td>
                    <td className="py-4 px-6">45,000 (total)</td>
                    <td className="py-4 px-6">Full payment, Two installments</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-4 px-6">Strategic Leadership Program</td>
                    <td className="py-4 px-6">12 weeks</td>
                    <td className="py-4 px-6">120,000 (total)</td>
                    <td className="py-4 px-6">Full payment, Two installments</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-8 bg-blue-50 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-primary mb-4">Additional Information</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 mr-2 text-blue-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Registration fee of LKR 5,000 applies to all courses</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 mr-2 text-blue-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Scholarships available for high-achieving students</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 mr-2 text-blue-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Special discounts for early registration</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 mr-2 text-blue-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Exam fees are not included in the course fees</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-primary to-blue-900 text-white">
          <div className="container text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Start Your Journey?</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Contact our admissions team for personalized guidance on choosing the right course for your career goals.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/register">
                <Button className="bg-white text-primary hover:bg-gray-100 text-lg px-8 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                  Register Now
                </Button>
              </Link>
              <Link href="/contact">
                <Button className="bg-transparent border-2 border-white text-white hover:bg-white/10 text-lg px-8 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

