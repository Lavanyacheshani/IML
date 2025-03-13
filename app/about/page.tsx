import Image from "next/image"
import Link from "next/link"
import { CheckCircle, Award, Users, BookOpen, GraduationCap, Target } from "lucide-react"
import { Button } from "@/components/ui/button"
import MainHeader from "../components/main-header"
import Footer from "../components/footer"
import HeroAnimation from "../components/hero-animation"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <MainHeader />

      {/* Hero Section */}
      <section className="relative bg-[url('/assets/a1.jpeg')] bg-cover bg-center py-32">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-blue-900/90"></div>
        <HeroAnimation />
        <div className="container relative z-20">
          <div className="mx-auto max-w-3xl text-center text-white">
            <h1 className="mb-6 text-4xl md:text-5xl lg:text-6xl font-extrabold drop-shadow-lg">About IML Business School</h1>
            <p className="text-xl leading-relaxed">
              The Institute of Management & Leadership - A leading private education institution in Sri Lanka
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container">
          <div className="grid gap-12 md:grid-cols-2 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Who We Are</h2>
              <div className="w-20 h-1 bg-red-500 mb-8"></div>
              <p className="text-gray-700 mb-6">
                The Institute of Management & Leadership is a leading private education and lifelong learning
                institution in Sri Lanka. We offer a diverse range of education pathways and professional training and
                are known for the rigor and quality of our programmes.
              </p>
              <p className="text-gray-700 mb-6">
                Founded in 2018 on the initiative of the smart learning and education for all concept. IML is a
                professional institute with over 1000+ individual and corporate learners who have access to a wide range
                of learning courses, published resources, and networking events.
              </p>
              <p className="text-gray-700">
                IML is committed to providing high-quality education that is accessible, affordable, and relevant to the
                needs of today's rapidly changing world. Our programs are designed to equip students with the knowledge,
                skills, and mindset needed to succeed in their chosen fields.
              </p>
            </div>
            <div className="relative h-[400px] rounded-xl overflow-hidden shadow-2xl">
              <Image
                src="/assets/a2.jpg"
                alt="IML Campus"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Our Mission & Vision</h2>
            <div className="w-20 h-1 bg-red-500 mx-auto"></div>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="bg-white p-8 rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl">
              <div className="mb-6 rounded-full bg-blue-100 p-4 w-fit">
                <Target className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4">Our Mission</h3>
              <p className="text-gray-700">
                To provide high-quality education and training that empowers individuals to achieve their full potential
                and contribute to the development of society. We are committed to fostering a culture of innovation,
                excellence, and lifelong learning.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl">
              <div className="mb-6 rounded-full bg-purple-100 p-4 w-fit">
                <GraduationCap className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4">Our Vision</h3>
              <p className="text-gray-700">
                To emerge as the most sought-after education and training partner in the region by making a meaningful
                contribution towards building a knowledgeable society. We aspire to be recognized globally for our
                innovative approach to education and commitment to excellence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Our Core Values</h2>
            <div className="w-20 h-1 bg-red-500 mx-auto mb-6"></div>
            <p className="text-gray-700 max-w-3xl mx-auto">
              At IML, our values guide everything we do. They shape our culture, inform our decisions, and drive our
              commitment to excellence in education.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="bg-white p-6 rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <h3 className="text-xl font-bold text-primary mb-3 flex items-center">
                <CheckCircle className="h-5 w-5 mr-2 text-green-500" /> Excellence
              </h3>
              <p className="text-gray-700">
                We strive for excellence in all aspects of our educational offerings, from curriculum design to teaching
                methodologies.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <h3 className="text-xl font-bold text-primary mb-3 flex items-center">
                <CheckCircle className="h-5 w-5 mr-2 text-green-500" /> Innovation
              </h3>
              <p className="text-gray-700">
                We embrace innovation and continuously seek new ways to enhance the learning experience for our
                students.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <h3 className="text-xl font-bold text-primary mb-3 flex items-center">
                <CheckCircle className="h-5 w-5 mr-2 text-green-500" /> Integrity
              </h3>
              <p className="text-gray-700">
                We uphold the highest standards of integrity and ethics in all our interactions with students, staff,
                and partners.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <h3 className="text-xl font-bold text-primary mb-3 flex items-center">
                <CheckCircle className="h-5 w-5 mr-2 text-green-500" /> Inclusivity
              </h3>
              <p className="text-gray-700">
                We value diversity and create an inclusive environment where all individuals are respected and
                empowered.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <h3 className="text-xl font-bold text-primary mb-3 flex items-center">
                <CheckCircle className="h-5 w-5 mr-2 text-green-500" /> Collaboration
              </h3>
              <p className="text-gray-700">
                We foster collaboration among students, faculty, industry partners, and the wider community to enhance
                learning outcomes.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <h3 className="text-xl font-bold text-primary mb-3 flex items-center">
                <CheckCircle className="h-5 w-5 mr-2 text-green-500" /> Lifelong Learning
              </h3>
              <p className="text-gray-700">
                We promote a culture of lifelong learning, encouraging continuous personal and professional development.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Affiliations Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Our Affiliations</h2>
            <div className="w-20 h-1 bg-red-500 mx-auto mb-6"></div>
            <p className="text-gray-700 max-w-3xl mx-auto">
              We are proud to partner with leading educational institutions and organizations around the world to
              provide our students with the best possible learning experience.
            </p>
          </div>
          <div className="flex justify-center">
            <div className="bg-white p-6 rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 max-w-3xl">
              <div className="relative h-auto w-full">
                <Image
                  src="/assets/logo1.jpg"
                  alt="Our Partner Organizations"
                  width={800}
                  height={400}
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Why Choose IML</h2>
            <div className="w-20 h-1 bg-red-500 mx-auto mb-6"></div>
            <p className="text-gray-700 max-w-3xl mx-auto">
              Choosing the right educational institution is a crucial decision. Here's why IML stands out as the
              preferred choice for students and professionals alike.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="bg-white p-8 rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
              <div className="mb-6 rounded-full bg-blue-100 p-4 w-fit">
                <Award className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-4">Quality Education</h3>
              <p className="text-gray-700">
                We are committed to providing high-quality education that meets international standards. Our programs
                are designed to equip students with the knowledge and skills needed for success.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
              <div className="mb-6 rounded-full bg-green-100 p-4 w-fit">
                <Users className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-4">Expert Faculty</h3>
              <p className="text-gray-700">
                Our faculty comprises experienced professionals and academics who bring real-world insights into the
                classroom, ensuring a practical and relevant learning experience.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
              <div className="mb-6 rounded-full bg-purple-100 p-4 w-fit">
                <BookOpen className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-4">Diverse Programs</h3>
              <p className="text-gray-700">
                We offer a wide range of programs across various disciplines, allowing students to choose the path that
                best aligns with their interests and career goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-primary to-blue-900 text-white">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Journey with IML?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Take the first step towards a brighter future. Explore our programs and discover how IML can help you
            achieve your educational and career goals.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/courses/undergraduate">
              <Button className="bg-white text-primary hover:bg-gray-100 text-lg px-8 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                Explore Programs
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

      <Footer />
    </div>
  )
}

