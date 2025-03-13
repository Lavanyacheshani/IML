import Image from "next/image"
import Link from "next/link"
import { Search, ChevronRight, Users, BookOpen, Briefcase, Globe, BarChart2, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import HeroSlider from "@/app/components/hero-slider"
import CounterAnimation from "@/app/components/counter-animation"
import TestimonialSlider from "@/app/components/testimonial-slider"
import CourseCategories from "@/app/components/course-categories"
import MainHeader from "@/app/components/main-header"
import Footer from "@/app/components/footer"
import HeroAnimation from "@/app/components/hero-animation"

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-b from-gray-50 to-white">
      {/* Navbar */}
      <MainHeader />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative">
          <HeroSlider />
          <HeroAnimation />
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-r from-black/60 to-primary/60 text-white z-10">
            <h1 className="mb-6 max-w-4xl text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight drop-shadow-lg animate-fade-in-up px-4">
              People&apos;s Institute for Professional Development
            </h1>
            <div className="w-full max-w-md px-4 animate-fade-in-up animation-delay-300">
              <div className="relative">
                <Input
                  type="text"
                  placeholder="Search Courses..."
                  className="h-12 md:h-14 w-full rounded-full bg-white/90 pl-6 pr-14 text-black shadow-xl focus:ring-2 focus:ring-blue-400 transition-all duration-300"
                />
                <Search className="absolute right-5 top-3 md:top-4 h-6 w-6 text-primary" />
              </div>
            </div>
          </div>
        </section>

        {/* Welcome Section */}
        <section className="bg-white py-16 md:py-24">
          <div className="container grid gap-12 md:grid-cols-2">
            <div className="flex flex-col justify-center">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-primary mb-4 animate-fade-in-left">
                Welcome to <br />
                <span className="text-4xl md:text-5xl lg:text-6xl font-bold">
                  <span className="text-red-600">IML</span>
                  <span className="text-blue-600"> Business</span>
                  <span className="text-yellow-500"> School</span>
                </span>

              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mb-6 animate-grow-width"></div>
            </div>
            <div className="flex flex-col justify-center space-y-6 animate-fade-in-right">
              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                The Institute of Management & Leadership is a leading private education and lifelong learning
                institution in Sri Lanka. We offer a diverse range of education pathways and professional training and
                are known for the rigor and quality of our programmes.
              </p>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                Founded in 2018 on the initiative of the smart learning and education for all concept. IML is a
                professional institute with over 1000+ individual and corporate learners who have access to a wide range
                of learning courses, published resources, and networking events.
              </p>
              <Link href="/about">
                <Button className="w-fit mt-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Key Services Section */}
        <section className="bg-gray-50 py-16 md:py-24">
          <div className="container">
            <h2 className="mb-12 md:mb-16 text-center text-3xl md:text-4xl font-extrabold text-primary animate-fade-in-up">
              Our Key Services
            </h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-xl bg-white p-6 md:p-8 shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 animate-fade-in-up animation-delay-100">
                <div className="mb-6 rounded-full bg-blue-100 p-4 w-fit">
                  <Users className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="mb-4 text-xl font-bold text-primary">Career Development</h3>
                <p className="text-gray-600">
                  Comprehensive career guidance and development programs for students at all levels.
                </p>
              </div>
              <div className="rounded-xl bg-white p-6 md:p-8 shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 animate-fade-in-up animation-delay-200">
                <div className="mb-6 rounded-full bg-indigo-100 p-4 w-fit">
                  <Briefcase className="h-8 w-8 text-indigo-600" />
                </div>
                <h3 className="mb-4 text-xl font-bold text-primary">Corporate Training</h3>
                <p className="text-gray-600">
                  Customized training solutions for businesses to enhance employee skills and productivity.
                </p>
              </div>
              <div className="rounded-xl bg-white p-6 md:p-8 shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 animate-fade-in-up animation-delay-300">
                <div className="mb-6 rounded-full bg-purple-100 p-4 w-fit">
                  <BookOpen className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="mb-4 text-xl font-bold text-primary">Executive Education Services</h3>
                <p className="text-gray-600">Specialized programs designed for executives and business leaders.</p>
              </div>
              <div className="rounded-xl bg-white p-6 md:p-8 shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 animate-fade-in-up animation-delay-400">
                <div className="mb-6 rounded-full bg-green-100 p-4 w-fit">
                  <Globe className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="mb-4 text-xl font-bold text-primary">Online Learning Solutions</h3>
                <p className="text-gray-600">
                  Flexible digital learning platforms for remote education and skill development.
                </p>
              </div>
              <div className="rounded-xl bg-white p-6 md:p-8 shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 animate-fade-in-up animation-delay-500">
                <div className="mb-6 rounded-full bg-red-100 p-4 w-fit">
                  <BarChart2 className="h-8 w-8 text-red-600" />
                </div>
                <h3 className="mb-4 text-xl font-bold text-primary">Business Consultancy Services</h3>
                <p className="text-gray-600">
                  Expert business consulting to help organizations achieve their strategic goals.
                </p>
              </div>
              <div className="flex items-center justify-center animate-fade-in-up animation-delay-600">
                <Link href="/about">
                  
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Vision Section */}
        <section className="relative bg-[url('/assets/banner4.jpg')] bg-cover bg-fixed bg-center py-24 md:py-32">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-blue-900/90"></div>
          <div className="container relative z-10">
            <div className="mx-auto max-w-3xl text-center text-white">
              <h2 className="mb-8 text-3xl md:text-4xl lg:text-5xl font-extrabold drop-shadow-lg animate-fade-in-up">
                Our Vision
              </h2>
              <p className="text-xl md:text-2xl leading-relaxed drop-shadow animate-fade-in-up animation-delay-300">
                To emerge as the most sought-after education and training partner in the region by making a meaningful
                contribution towards building a knowledgeable society.
              </p>
            </div>
          </div>
        </section>

        {/* Strength Section */}
        <section className="bg-white py-16 md:py-24">
          <div className="container">
            <h2 className="mb-12 md:mb-16 text-center text-3xl md:text-4xl font-extrabold text-primary animate-fade-in-up">
              Our Strength
            </h2>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              <CounterAnimation end={23} title="Years of Excellence" />
              <CounterAnimation end={40} title="Branches Islandwide" suffix="+" />
              <CounterAnimation end={400} title="Full-time Academics" suffix="+" />
              <CounterAnimation end={35000} title="Students" suffix="+" />
            </div>
          </div>
        </section>

        {/* Course Categories Section */}
        <section className="bg-white py-16 md:py-24">
          <div className="container">
            <h2 className="mb-12 md:mb-16 text-center text-3xl md:text-4xl font-extrabold text-primary animate-fade-in-up">
              Course Categories
            </h2>
            <CourseCategories />
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="bg-white py-16 md:py-24">
          <div className="container">
            <h2 className="mb-12 md:mb-16 text-center text-3xl md:text-4xl font-extrabold text-primary animate-fade-in-up">
              What Our Students Say
            </h2>
            <TestimonialSlider />
          </div>
        </section>

        {/* Faculty Section */}
        <section className="bg-gray-50 py-16 md:py-24">
          <div className="container">
            <h2 className="mb-12 md:mb-16 text-center text-3xl md:text-4xl font-extrabold text-primary animate-fade-in-up">
              International Visiting Faculty
            </h2>
            <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-3 max-w-5xl mx-auto">
              {[1, 2, 3].map((item) => (
                <div
                  key={item}
                  className="group overflow-hidden rounded-xl bg-white shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 animate-fade-in-up"
                  style={{ animationDelay: `${item * 100}ms` }}
                >
                  <div className="relative h-64 w-full overflow-hidden">
                    <Image
                      src={`/placeholder.svg?height=300&width=300&text=Faculty+${item}`}
                      alt={`Faculty Member ${item}`}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-primary">Dr. John Smith</h3>
                    <p className="text-gray-600">Professor of Business Management</p>
                    <p className="text-sm text-blue-600">Harvard University</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}

