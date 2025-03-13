import Link from "next/link"
import { ArrowLeft, Clock, Calendar, Award, BookOpen, Users, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import MainHeader from "@/app/components/main-header"
import Footer from "@/app/components/footer"
import HeroAnimation from "@/app/components/hero-animation"

// Mock data for course details
const coursesData = {
  "mba-general": {
    title: "Master of Business Administration",
    category: "mba",
    description:
      "Our MBA program is designed for ambitious professionals who want to advance their careers, switch industries, or start their own business. This comprehensive program covers all key areas of business administration and management, with a focus on leadership, strategic thinking, and practical application.",
    duration: "2 years (Full-time or Part-time)",
    startDates: "September, January, May",
    accreditation: "Association of MBAs (AMBA)",
    level: "Master's Degree",
    image: "/placeholder.svg?height=600&width=1200&text=MBA",
    modules: [
      "Strategic Management",
      "Financial Management",
      "Marketing Management",
      "Organizational Leadership",
      "Operations Management",
      "Business Economics",
      "Business Research Methods",
      "Corporate Governance and Ethics",
      "International Business",
      "Entrepreneurship and Innovation",
      "Dissertation / Business Project",
    ],
    careerProspects: [
      "Senior Manager",
      "Business Consultant",
      "Chief Executive Officer",
      "Operations Director",
      "Marketing Director",
      "Finance Director",
      "Entrepreneur",
    ],
    entryRequirements:
      "Bachelor's degree with minimum 2:2 classification or equivalent. Minimum 3 years of relevant work experience. IELTS 6.5 or equivalent for international students.",
    fees: "LKR 1,800,000 (total program cost)",
  },
  "business-management": {
    title: "Diploma in Business Management",
    category: "diploma",
    description:
      "The Diploma in Business Management is designed to develop the skills, abilities, and knowledge you need for a successful management career. This program provides a solid foundation in business and management principles, with opportunities to specialize in areas such as marketing, human resources, or finance.",
    duration: "1 year",
    startDates: "September, January",
    accreditation: "Sri Lanka Qualifications Framework",
    level: "Diploma Level",
    image: "/placeholder.svg?height=600&width=1200&text=Business+Management",
    modules: [
      "Introduction to Business Management",
      "Accounting and Finance for Managers",
      "Marketing Principles",
      "Organizational Behavior",
      "Business Economics",
      "Business Law",
      "Human Resource Management",
      "Operations Management",
    ],
    careerProspects: [
      "Business Administrator",
      "Office Manager",
      "Team Leader",
      "Operations Supervisor",
      "Project Coordinator",
      "Business Analyst",
      "Entrepreneur",
    ],
    entryRequirements:
      "Minimum O/Levels with passes in 5 subjects including English and Mathematics. IELTS 5.5 or equivalent for international students.",
    fees: "LKR 250,000 (total program cost)",
  },
  "digital-marketing": {
    title: "Certificate in Digital Marketing",
    category: "certificate",
    description:
      "The Certificate in Digital Marketing provides a comprehensive introduction to digital marketing strategies and tools. This program covers key areas such as social media marketing, search engine optimization, content marketing, and digital advertising, equipping students with the skills needed to succeed in the digital marketing landscape.",
    duration: "3 months",
    startDates: "Monthly intakes",
    accreditation: "IML Business School",
    level: "Certificate Level",
    image: "/placeholder.svg?height=600&width=1200&text=Digital+Marketing",
    modules: [
      "Digital Marketing Fundamentals",
      "Social Media Marketing",
      "Search Engine Optimization (SEO)",
      "Content Marketing",
      "Email Marketing",
      "Digital Advertising",
      "Analytics and Reporting",
      "Digital Marketing Strategy",
    ],
    careerProspects: [
      "Digital Marketing Assistant",
      "Social Media Coordinator",
      "SEO Specialist",
      "Content Creator",
      "Email Marketing Specialist",
      "Digital Marketing Analyst",
    ],
    entryRequirements: "No formal academic requirements. Basic computer literacy and internet skills required.",
    fees: "LKR 45,000 (total program cost)",
  },
}

export default function CourseDetailsPage({ params }: { params: { category: string; id: string } }) {
  const { category, id } = params
  const course = coursesData[id as keyof typeof coursesData]

  if (!course) {
    return (
      <div className="min-h-screen flex flex-col">
        <MainHeader />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center py-12">
            <h1 className="text-3xl font-bold text-gray-700 mb-4">Course Not Found</h1>
            <p className="text-gray-600 mb-6">The course you are looking for does not exist.</p>
            <Link href={`/courses/${category}`}>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white mr-4">Back to Courses</Button>
            </Link>
            <Link href="/">
              <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                Back to Home
              </Button>
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
        {/* Hero Section */}
        <section className="relative bg-[url('/placeholder.svg?height=600&width=1200')] bg-cover bg-center py-32">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-blue-900/90"></div>
          <HeroAnimation />
          <div className="container relative z-20">
            <div className="mx-auto max-w-3xl text-center text-white">
              <h1 className="mb-6 text-4xl md:text-5xl font-extrabold drop-shadow-lg">{course.title}</h1>
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                <span className="inline-flex items-center bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm">
                  <Clock className="mr-2 h-4 w-4" /> {course.duration}
                </span>
                <span className="inline-flex items-center bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm">
                  <Calendar className="mr-2 h-4 w-4" /> Starts: {course.startDates}
                </span>
                <span className="inline-flex items-center bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm">
                  <Award className="mr-2 h-4 w-4" /> {course.level}
                </span>
              </div>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link href={`/register?course=${id}&category=${category}`}>
                  <Button className="bg-white text-primary hover:bg-gray-100 text-lg px-8 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                    Register Now
                  </Button>
                </Link>
                <Link href={`/inquire?course=${id}&category=${category}`}>
                  <Button className="bg-transparent border-2 border-white text-white hover:bg-white/10 text-lg px-8 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                    Inquire
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Course Details Section */}
        <section className="py-16 bg-white">
          <div className="container">
            <div className="mb-8">
              <Link
                href={`/courses/${category}`}
                className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors"
              >
                <ArrowLeft className="mr-2 h-4 w-4" /> Back to {category.charAt(0).toUpperCase() + category.slice(1)}{" "}
                Courses
              </Link>
            </div>

            <div className="grid gap-12 lg:grid-cols-3">
              {/* Main Content */}
              <div className="lg:col-span-2">
                <h2 className="text-3xl font-bold text-primary mb-6">Course Overview</h2>
                <p className="text-gray-700 mb-8 text-lg leading-relaxed">{course.description}</p>

                <div className="mb-12">
                  <h3 className="text-2xl font-bold text-primary mb-4">What You'll Learn</h3>
                  <div className="grid gap-4 md:grid-cols-2">
                    {course.modules.map((module, index) => (
                      <div key={index} className="flex items-start">
                        <CheckCircle className="h-5 w-5 mr-2 text-green-500 mt-1 flex-shrink-0" />
                        <span className="text-gray-700">{module}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mb-12">
                  <h3 className="text-2xl font-bold text-primary mb-4">Career Opportunities</h3>
                  <p className="text-gray-700 mb-4">
                    Graduates of this program can pursue careers in various roles, including:
                  </p>
                  <div className="grid gap-4 md:grid-cols-2">
                    {course.careerProspects.map((career, index) => (
                      <div key={index} className="flex items-start">
                        <CheckCircle className="h-5 w-5 mr-2 text-blue-500 mt-1 flex-shrink-0" />
                        <span className="text-gray-700">{career}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mb-12">
                  <h3 className="text-2xl font-bold text-primary mb-4">Entry Requirements</h3>
                  <p className="text-gray-700">{course.entryRequirements}</p>
                </div>
              </div>

              {/* Sidebar */}
              <div>
                <div className="bg-gray-50 p-6 rounded-xl shadow-lg mb-8">
                  <h3 className="text-xl font-bold text-primary mb-4">Course Information</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <Clock className="h-5 w-5 mr-3 text-blue-600 mt-1" />
                      <div>
                        <span className="block font-medium text-gray-800">Duration</span>
                        <span className="text-gray-600">{course.duration}</span>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <Calendar className="h-5 w-5 mr-3 text-blue-600 mt-1" />
                      <div>
                        <span className="block font-medium text-gray-800">Start Dates</span>
                        <span className="text-gray-600">{course.startDates}</span>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <Award className="h-5 w-5 mr-3 text-blue-600 mt-1" />
                      <div>
                        <span className="block font-medium text-gray-800">Accreditation</span>
                        <span className="text-gray-600">{course.accreditation}</span>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <BookOpen className="h-5 w-5 mr-3 text-blue-600 mt-1" />
                      <div>
                        <span className="block font-medium text-gray-800">Level</span>
                        <span className="text-gray-600">{course.level}</span>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <Users className="h-5 w-5 mr-3 text-blue-600 mt-1" />
                      <div>
                        <span className="block font-medium text-gray-800">Class Size</span>
                        <span className="text-gray-600">Maximum 30 students</span>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="bg-blue-50 p-6 rounded-xl shadow-lg mb-8">
                  <h3 className="text-xl font-bold text-primary mb-4">Fees</h3>
                  <p className="text-gray-700 mb-4">{course.fees}</p>
                  <p className="text-sm text-gray-600 mb-4">
                    Payment plans and scholarships are available for eligible students.
                  </p>
                  <Link href="/contact">
                    <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">Contact for Fee Details</Button>
                  </Link>
                </div>

                <div className="bg-gray-50 p-6 rounded-xl shadow-lg">
                  <h3 className="text-xl font-bold text-primary mb-4">Have Questions?</h3>
                  <p className="text-gray-700 mb-4">
                    Our admissions team is here to help you with any questions about this course.
                  </p>
                  <Link href={`/inquire?course=${id}&category=${category}`}>
                    <Button className="w-full bg-primary hover:bg-primary/90 text-white mb-3">Inquire Now</Button>
                  </Link>
                  <Link href="/contact">
                    <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary/10">
                      Contact Us
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

