import Link from "next/link"
import Image from "next/image"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  Mail,
  Phone,
  MapPin,
  Clock,
  ChevronRight,
  MessageCircle,
} from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative bg-gradient-to-br from-primary to-blue-900 text-white">
      {/* Top wave decoration */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none transform translate-y-[-1px]">
        <svg
          className="relative block w-full h-12 md:h-16"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="fill-white"
          ></path>
        </svg>
      </div>

      {/* Main footer content */}
      <div className="container pt-24 pb-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Column 1: About */}
          <div className="animate-fade-in-up">
            <div className="mb-6">
              <Image
                src="/placeholder.svg?height=60&width=180&text=IML+Business+School"
                alt="IML Business School Logo"
                width={180}
                height={60}
                className="brightness-0 invert"
              />
            </div>
            <p className="mb-6 text-gray-300 leading-relaxed">
              IML Business School is a leading private education institution in Sri Lanka offering diverse education
              pathways and professional training for future leaders.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="bg-white/10 hover:bg-white/20 p-2.5 rounded-full transition-colors duration-300">
                <Facebook size={18} />
              </a>
              <a href="#" className="bg-white/10 hover:bg-white/20 p-2.5 rounded-full transition-colors duration-300">
                <Twitter size={18} />
              </a>
              <a href="#" className="bg-white/10 hover:bg-white/20 p-2.5 rounded-full transition-colors duration-300">
                <Instagram size={18} />
              </a>
              <a href="#" className="bg-white/10 hover:bg-white/20 p-2.5 rounded-full transition-colors duration-300">
                <Linkedin size={18} />
              </a>
              <a href="#" className="bg-white/10 hover:bg-white/20 p-2.5 rounded-full transition-colors duration-300">
                <Youtube size={18} />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="animate-fade-in-up animation-delay-300">
            <h3 className="text-xl font-bold mb-6 flex items-center">
              <span className="w-8 h-0.5 bg-blue-400 mr-3"></span>
              Quick Links
            </h3>
            <ul className="space-y-3">
              {[
                { title: "About Us", href: "/about" },
                { title: "Courses", href: "/courses/certificate" },
                { title: "Exam Results", href: "/exam-results" },
                { title: "Gallery", href: "/gallery" },
                { title: "Contact Us", href: "/contact" },
                { title: "Register Online", href: "/register" },
                { title: "Inquire Now", href: "/inquire" },
                { title: "Course Details", href: "/course-details" },
              ].map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center group"
                  >
                    <ChevronRight
                      size={16}
                      className="mr-2 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all duration-300"
                    />
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Information */}
          <div className="animate-fade-in-up animation-delay-600">
            <h3 className="text-xl font-bold mb-6 flex items-center">
              <span className="w-8 h-0.5 bg-blue-400 mr-3"></span>
              Contact Information
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Phone className="mr-3 mt-1 text-blue-300 flex-shrink-0" size={18} />
                <span>+94117040140 / +94768545962</span>
              </li>
              <li className="flex items-start">
                <MessageCircle className="mr-3 mt-1 text-blue-300 flex-shrink-0" size={18} />
                <a href="https://wa.me/94768545962" className="hover:underline">
                  +94768545962 (WhatsApp)
                </a>
              </li>
              <li className="flex items-start">
                <Mail className="mr-3 mt-1 text-blue-300 flex-shrink-0" size={18} />
                <span>info@imledu.lk</span>
              </li>
              <li className="flex items-start">
                <MapPin className="mr-3 mt-1 text-blue-300 flex-shrink-0" size={18} />
                <span>No.135E-2/1, Galle Road, Dehiwala, Sri Lanka</span>
              </li>
              <li className="flex items-start">
                <Clock className="mr-3 mt-1 text-blue-300 flex-shrink-0" size={18} />
                <div>
                  <div>Monday-Saturday: 9.00 AM – 5.30 PM</div>
                  <div>Sunday: 9.00 AM – 1.00 PM</div>
                </div>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div className="animate-fade-in-up animation-delay-900">
            <h3 className="text-xl font-bold mb-6 flex items-center">
              <span className="w-8 h-0.5 bg-blue-400 mr-3"></span>
              Newsletter
            </h3>
            <p className="mb-4 text-gray-300">
              Subscribe to our newsletter to receive updates on new courses, events, and special offers.
            </p>
            <div className="space-y-3">
              <div className="flex flex-col sm:flex-row">
                <Input
                  type="email"
                  placeholder="Your email address"
                  className="h-12 rounded-l-md border-0 bg-white/10 text-white placeholder:text-gray-400 focus:ring-2 focus:ring-blue-400"
                />
                <Button className="mt-2 sm:mt-0 sm:rounded-l-none bg-blue-500 hover:bg-blue-600 text-white transition-colors">
                  Subscribe
                </Button>
              </div>
              <p className="text-xs text-gray-400">
                By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom footer */}
      <div className="border-t border-white/10 py-8">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-gray-400 mb-4 md:mb-0">
              © {currentYear} IML Business School. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm text-gray-400">
              <Link href="#" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link href="#" className="hover:text-white transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

