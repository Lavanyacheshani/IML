"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { usePathname } from "next/navigation"

export default function MainHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
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
            className={`${
              isMenuOpen ? "flex" : "hidden"
            } md:flex absolute md:relative top-16 md:top-0 left-0 w-full md:w-auto flex-col md:flex-row items-start md:items-center bg-white md:bg-transparent p-4 md:p-0 space-y-4 md:space-y-0 md:space-x-6 shadow-md md:shadow-none z-50`}
          >
            <Link
              href="/"
              className={`text-sm font-medium ${pathname === "/" ? "text-primary" : "text-muted-foreground hover:text-primary"} transition-colors`}
            >
              Home
            </Link>
            <Link
              href="/about"
              className={`text-sm font-medium ${pathname === "/about" ? "text-primary" : "text-muted-foreground hover:text-primary"} transition-colors`}
            >
              About
            </Link>
            <Link
              href="/exam-results"
              className={`text-sm font-medium ${pathname === "/exam-results" ? "text-primary" : "text-muted-foreground hover:text-primary"} transition-colors`}
            >
              Exam Results
            </Link>
            <Link
              href="/gallery"
              className={`text-sm font-medium ${pathname === "/gallery" ? "text-primary" : "text-muted-foreground hover:text-primary"} transition-colors`}
            >
              Gallery
            </Link>
            <Link
              href="/contact"
              className={`text-sm font-medium ${pathname === "/contact" ? "text-primary" : "text-muted-foreground hover:text-primary"} transition-colors`}
            >
              Contact Us
            </Link>
          </nav>
        </div>
        <div className="flex items-center">
          <Link href="/register">
            <button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 hidden md:inline-flex px-4 py-2 rounded-md">
              Register Online
            </button>
          </Link>
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
  )
}

