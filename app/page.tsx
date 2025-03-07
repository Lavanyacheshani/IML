"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Search, ChevronRight, Users, BookOpen, Briefcase, Globe, BarChart2, ArrowRight, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import HeroSlider from "./components/hero-slider"
import CounterAnimation from "./components/counter-animation"
import TestimonialSlider from "./components/testimonial-slider"

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-b from-gray-50 to-white">
      {/* Navbar */}
      <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md">
        <div className="container flex h-16 md:h-20 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="mr-6">
              <Image
                src="/assets/logo.jpg"
                alt="IML Business School Logo"
                width={120}
                height={40}
                className="drop-shadow-md transition-transform hover:scale-105"
              />
            </Link>
            <nav
              className={`${isMenuOpen ? "flex" : "hidden"} md:flex absolute md:relative top-16 md:top-0 left-0 w-full md:w-auto flex-col md:flex-row items-start md:items-center bg-white md:bg-transparent p-4 md:p-0 space-y-4 md:space-y-0 md:space-x-6`}
            >
              <Link href="/" className="text-sm font-medium text-primary hover:text-primary/80 transition-colors">
                Home
              </Link>
              <Link
                href="/about"
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                About
              </Link>
              <Link
                href="/exam-results"
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                Exam Results
              </Link>
              <Link
                href="/gallery"
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                Gallery
              </Link>
              <Link
                href="/contact"
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                Contact Us
              </Link>
            </nav>
          </div>
          <div className="flex items-center">
            <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 hidden md:inline-flex">
              Register Online
            </Button>
            <button
              className="md:hidden ml-4 p-2 rounded-md bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative">
          <HeroSlider />
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-r from-black/60 to-primary/60 text-white">
          <h1 className="mb-6 max-w-4xl text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight drop-shadow-lg animate-fade-in-up px-4">
            <span className="text-white">People&apos;s Institute for</span> 
             <span className="text-blue-500"> Professional Development</span>
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
                <span className="text-4xl md:text-5xl lg:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                  IML Business School
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
              
              </div>
            </div>
          </div>
        </section>

        {/* Vision Section */}
        <section className="relative bg-[url('/assets/1.jpg')] bg-cover bg-fixed bg-center py-24 md:py-32">
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

        {/* Courses Section */}
        <section className="bg-gray-50 py-16 md:py-24">
          <div className="container">
            <h2 className="mb-12 md:mb-16 text-center text-3xl md:text-4xl font-extrabold text-primary animate-fade-in-up">
              Explore Our Courses
            </h2>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
                <div
                  key={item}
                  className="group overflow-hidden rounded-xl bg-white shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 animate-fade-in-up"
                  style={{ animationDelay: `${item * 100}ms` }}
                >
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image
                      src={`/placeholder.svg?height=300&width=400&text=Course+${item}`}
                      alt={`Course ${item}`}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="mb-3 text-xl font-bold text-primary">Business Management Course {item}</h3>
                    <p className="mb-4 text-gray-600">
                      Learn essential business management skills with our comprehensive program.
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-blue-600">12 Weeks</span>
                      <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-800">
                        Enrolling
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-12 md:mt-16 text-center animate-fade-in-up animation-delay-1000">
              <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white text-lg py-4 md:py-6 px-6 md:px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                View All Courses <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
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
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
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
      <footer className="bg-gradient-to-r from-primary to-blue-900 py-12 md:py-16 text-white">
        <div className="container grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="animate-fade-in-up">
            <h3 className="mb-4 text-xl md:text-2xl font-bold">About Us</h3>
            <p className="mb-6 text-gray-300">
              IML Business School is a leading private education institution in Sri Lanka offering diverse education
              pathways and professional training.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="rounded-full bg-white/10 p-2 hover:bg-white/20 transition-colors">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a href="#" className="rounded-full bg-white/10 p-2 hover:bg-white/20 transition-colors">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="#" className="rounded-full bg-white/10 p-2 hover:bg-white/20 transition-colors">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>
          <div className="animate-fade-in-up animation-delay-300">
            <h3 className="mb-4 text-xl md:text-2xl font-bold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/courses" className="text-gray-300 hover:text-white transition-colors">
                  Courses
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/executive-education" className="text-gray-300 hover:text-white transition-colors">
                  Executive Education
                </Link>
              </li>
              <li>
                <Link href="/verification" className="text-gray-300 hover:text-white transition-colors">
                  Verification & Payments
                </Link>
              </li>
            </ul>
            <div className="mt-6">
              <h3 className="mb-4 text-xl md:text-2xl font-bold">Newsletter</h3>
              <div className="flex">
                <Input
                  type="email"
                  placeholder="Your email"
                  className="h-10 md:h-12 rounded-l-md border-0 bg-white/10 text-white placeholder:text-gray-400"
                />
                <Button className="rounded-l-none bg-blue-600 hover:bg-blue-700 text-white transition-colors">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
          <div className="animate-fade-in-up animation-delay-600">
            <h3 className="mb-4 text-xl md:text-2xl font-bold">Contact Information</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="mr-3 mt-1">📞</span>
                <span>+94117040140 / +94768545962</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 mt-1">✉️</span>
                <span>info@imledu.lk</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 mt-1">📍</span>
                <span>No.135E-2/1, Galle Road, Dehiwala, Sri Lanka</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 mt-1">🕒</span>
                <span>Monday-Saturday: 9.00 AM – 5.30 PM</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 mt-1">🕒</span>
                <span>Sunday: 9.00 AM – 1.00 PM</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="container mt-8 md:mt-12 border-t border-white/20 pt-6 md:pt-8 text-center text-sm text-gray-400">
          <p>© {new Date().getFullYear()} IML Business School. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

