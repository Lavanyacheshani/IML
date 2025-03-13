import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import MainHeader from "../components/main-header"
import Footer from "../components/footer"
import HeroAnimation from "../components/hero-animation"

export default function ExamResultsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <MainHeader />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-[url('/placeholder.svg?height=400&width=1200&text=Exam+Results')] bg-cover bg-center py-24">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-blue-900/90"></div>
          <HeroAnimation />
          <div className="container relative z-20">
            <div className="mx-auto max-w-3xl text-center text-white">
              <h1 className="mb-4 text-4xl md:text-5xl font-extrabold drop-shadow-lg">Exam Results</h1>
              <p className="text-xl leading-relaxed">Check your exam results and track your academic progress</p>
            </div>
          </div>
        </section>

        {/* Search Section */}
        <section className="py-16 bg-white">
          <div className="container">
            <div className="max-w-3xl mx-auto bg-gray-50 p-8 rounded-xl shadow-lg">
              <h2 className="text-2xl font-bold text-primary mb-6">Search Your Results</h2>
              <div className="space-y-6">
                <div>
                  <label htmlFor="studentId" className="block text-sm font-medium text-gray-700 mb-1">
                    Student ID / Registration Number *
                  </label>
                  <Input id="studentId" type="text" placeholder="Enter your student ID" className="w-full" required />
                </div>

                <div>
                  <label htmlFor="examType" className="block text-sm font-medium text-gray-700 mb-1">
                    Exam Type *
                  </label>
                  <select
                    id="examType"
                    className="w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  >
                    <option value="">Select exam type</option>
                    <option value="midterm">Midterm Examination</option>
                    <option value="final">Final Examination</option>
                    <option value="assignment">Assignment</option>
                    <option value="project">Project</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="academicYear" className="block text-sm font-medium text-gray-700 mb-1">
                    Academic Year *
                  </label>
                  <select
                    id="academicYear"
                    className="w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  >
                    <option value="">Select academic year</option>
                    <option value="2023">2023</option>
                    <option value="2022">2022</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                  </select>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-lg transition-colors duration-300 flex items-center justify-center"
                >
                  <Search className="mr-2 h-5 w-5" /> Search Results
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Recent Results Section */}
        <section className="py-16 bg-gray-50">
          <div className="container">
            <h2 className="text-3xl font-bold text-primary mb-8 text-center">Recent Examination Results</h2>

            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-xl shadow-lg">
                <thead>
                  <tr className="bg-primary text-white">
                    <th className="py-4 px-6 text-left">Exam Name</th>
                    <th className="py-4 px-6 text-left">Course</th>
                    <th className="py-4 px-6 text-left">Date</th>
                    <th className="py-4 px-6 text-left">Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-200 hover:bg-gray-50">
                    <td className="py-4 px-6">Final Examination - Business Management</td>
                    <td className="py-4 px-6">BTEC HND in Business Management</td>
                    <td className="py-4 px-6">15 Mar 2023</td>
                    <td className="py-4 px-6">
                      <span className="bg-green-100 text-green-800 py-1 px-3 rounded-full text-sm font-medium">
                        Published
                      </span>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-200 hover:bg-gray-50">
                    <td className="py-4 px-6">Midterm Examination - Computing</td>
                    <td className="py-4 px-6">BTEC HND in Computing</td>
                    <td className="py-4 px-6">10 Feb 2023</td>
                    <td className="py-4 px-6">
                      <span className="bg-green-100 text-green-800 py-1 px-3 rounded-full text-sm font-medium">
                        Published
                      </span>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-200 hover:bg-gray-50">
                    <td className="py-4 px-6">Assignment 2 - Marketing Principles</td>
                    <td className="py-4 px-6">BTEC HND in Business Management</td>
                    <td className="py-4 px-6">05 Feb 2023</td>
                    <td className="py-4 px-6">
                      <span className="bg-green-100 text-green-800 py-1 px-3 rounded-full text-sm font-medium">
                        Published
                      </span>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-200 hover:bg-gray-50">
                    <td className="py-4 px-6">Final Examination - MBA</td>
                    <td className="py-4 px-6">Master of Business Administration</td>
                    <td className="py-4 px-6">20 Jan 2023</td>
                    <td className="py-4 px-6">
                      <span className="bg-green-100 text-green-800 py-1 px-3 rounded-full text-sm font-medium">
                        Published
                      </span>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-4 px-6">O/L Mathematics - Final Exam</td>
                    <td className="py-4 px-6">O/L Mathematics Comprehensive Program</td>
                    <td className="py-4 px-6">12 Jan 2023</td>
                    <td className="py-4 px-6">
                      <span className="bg-green-100 text-green-800 py-1 px-3 rounded-full text-sm font-medium">
                        Published
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-white">
          <div className="container">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-primary mb-2">Exam Information Center</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto mb-4"></div>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Find answers to common questions about exam results and the examination process
              </p>
            </div>

            <div className="max-w-4xl mx-auto grid gap-6 md:grid-cols-2">
              <div className="bg-gradient-to-br from-white to-blue-50 p-6 rounded-xl shadow-lg transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl">
                <div className="flex items-start mb-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                      <svg
                        className="w-6 h-6 text-blue-600"
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
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-primary ml-4">How do I check my exam results?</h3>
                </div>
                <p className="text-gray-700 ml-14">
                  You can check your exam results by entering your student ID, selecting the exam type, and academic
                  year in the search form above. Results will be displayed if they have been published.
                </p>
              </div>

              <div className="bg-gradient-to-br from-white to-indigo-50 p-6 rounded-xl shadow-lg transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl">
                <div className="flex items-start mb-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center">
                      <svg
                        className="w-6 h-6 text-indigo-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-primary ml-4">When are results typically published?</h3>
                </div>
                <p className="text-gray-700 ml-14">
                  Results are usually published within 2-3 weeks after the examination date. You will receive an email
                  notification when your results are available.
                </p>
              </div>

              <div className="bg-gradient-to-br from-white to-purple-50 p-6 rounded-xl shadow-lg transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl">
                <div className="flex items-start mb-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center">
                      <svg
                        className="w-6 h-6 text-purple-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2"
                        />
                      </svg>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-primary ml-4">What if I've lost my student ID?</h3>
                </div>
                <p className="text-gray-700 ml-14">
                  If you've lost your student ID, please contact the Student Services office at
                  studentservices@imledu.lk or visit the office in person with your identification.
                </p>
              </div>

              <div className="bg-gradient-to-br from-white to-blue-50 p-6 rounded-xl shadow-lg transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl">
                <div className="flex items-start mb-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                      <svg
                        className="w-6 h-6 text-blue-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                        />
                      </svg>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-primary ml-4">How can I request a review of my results?</h3>
                </div>
                <p className="text-gray-700 ml-14">
                  If you believe there has been an error in your results, you can request a review by submitting a
                  Results Review Form within 7 days of the results publication. Forms are available at the Examinations
                  Office.
                </p>
              </div>
            </div>

            <div className="text-center mt-10">
              <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                View All FAQs
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

