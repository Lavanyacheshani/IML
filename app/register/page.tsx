"use client"

import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
import { useState } from 'react'
import MainHeader from '@/app/components/main-header'
import { coursesData, getAllCourses } from '@/app/lib/course-data'

function FormToSheet() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [message, setMessage] = useState('')
  const [selectedCourse, setSelectedCourse] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('')

  const allCourses = getAllCourses()
  const categories = Object.keys(coursesData)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setMessage('')
    
    const formData = new FormData(e.currentTarget)
    const name = formData.get('name') as string
    const email = formData.get('email') as string
    const address = formData.get('address') as string
    const phone = formData.get('phone') as string
    const course = formData.get('course') as string
    const education = formData.get('education') as string
    const experience = formData.get('experience') as string
    const messageText = formData.get('message') as string

    const url = "https://script.google.com/macros/s/AKfycbxXd30S6Hwopcqw1TN0Vtn6E360HZXqh0NPfH9lmv2xmQqhGz9K05A5uId-rx3P2OPf/exec"
    
    fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: `Name=${encodeURIComponent(name)}&Email=${encodeURIComponent(email)}&Address=${encodeURIComponent(address)}&Phone=${encodeURIComponent(phone)}&Course=${encodeURIComponent(course)}&Education=${encodeURIComponent(education)}&Experience=${encodeURIComponent(experience)}&Message=${encodeURIComponent(messageText)}`
    })
    .then(res => res.text())
    .then(data => {
      setMessage(data)
      if (data.includes('success') || data.includes('Success')) {
        e.currentTarget.reset()
        setSelectedCourse('')
        setSelectedCategory('')
      }
    })
    .catch(error => {
      console.log(error)
      setMessage('An error occurred. Please try again.')
    })
    .finally(() => {
      setIsSubmitting(false)
    })
  }

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category)
    setSelectedCourse('')
  }

  const handleCourseChange = (courseId: string) => {
    setSelectedCourse(courseId)
  }

  const getCoursesByCategory = (category: string) => {
    return coursesData[category] || []
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <MainHeader />
      
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Student Registration</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Join AIML Business School and take the first step towards your professional success. 
            Fill out the form below to register for your preferred course.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="shadow-xl">
            <CardHeader className="text-center bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
              <CardTitle className="text-2xl font-bold">Course Registration Form</CardTitle>
              <CardDescription className="text-blue-100">
                Please provide your details and select your preferred course
              </CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Information Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-sm font-medium text-gray-700">
                      Full Name *
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Enter your full name"
                      required
                      className="w-full"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                      Email Address *
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Enter your email address"
                      required
                      className="w-full"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-sm font-medium text-gray-700">
                      Phone Number *
                    </Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="Enter your phone number"
                      required
                      className="w-full"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="education" className="text-sm font-medium text-gray-700">
                      Highest Education Qualification
                    </Label>
                    <Select name="education" onValueChange={(value) => {}}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your education level" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="O/L">G.C.E. O/L</SelectItem>
                        <SelectItem value="A/L">G.C.E. A/L</SelectItem>
                        <SelectItem value="Diploma">Diploma</SelectItem>
                        <SelectItem value="Degree">Bachelor's Degree</SelectItem>
                        <SelectItem value="Masters">Master's Degree</SelectItem>
                        <SelectItem value="Other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="address" className="text-sm font-medium text-gray-700">
                    Address *
                  </Label>
                  <Textarea
                    id="address"
                    name="address"
                    placeholder="Enter your complete address"
                    required
                    className="w-full"
                    rows={3}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="experience" className="text-sm font-medium text-gray-700">
                    Work Experience (if any)
                  </Label>
                  <Textarea
                    id="experience"
                    name="experience"
                    placeholder="Briefly describe your work experience"
                    className="w-full"
                    rows={2}
                  />
                </div>

                {/* Course Selection Section */}
                <div className="border-t pt-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Course Selection</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="category" className="text-sm font-medium text-gray-700">
                        Course Category *
                      </Label>
                      <Select onValueChange={handleCategoryChange} value={selectedCategory}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select course category" />
                        </SelectTrigger>
                        <SelectContent>
                          {categories.map((category) => (
                            <SelectItem key={category} value={category}>
                              {category.charAt(0).toUpperCase() + category.slice(1)} Courses
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="course" className="text-sm font-medium text-gray-700">
                        Select Course *
                      </Label>
                      <Select 
                        name="course" 
                        onValueChange={handleCourseChange} 
                        value={selectedCourse}
                        disabled={!selectedCategory}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder={selectedCategory ? "Select a course" : "First select a category"} />
                        </SelectTrigger>
                        <SelectContent>
                          {selectedCategory && getCoursesByCategory(selectedCategory).map((course) => (
                            <SelectItem key={course.id} value={course.title}>
                              {course.title}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {selectedCourse && (
                    <div className="mt-4 p-4 bg-blue-50 rounded-lg border border-blue-200">
                      <h4 className="font-medium text-blue-800 mb-2">Selected Course Details:</h4>
                      {allCourses.find(course => course.title === selectedCourse) && (
                        <div className="text-sm text-blue-700">
                          <p><strong>Duration:</strong> {allCourses.find(course => course.title === selectedCourse)?.duration}</p>
                          <p><strong>Investment:</strong> {allCourses.find(course => course.title === selectedCourse)?.investment || 'Contact for pricing'}</p>
                          {allCourses.find(course => course.title === selectedCourse)?.commencement && (
                            <p><strong>Commencement:</strong> {allCourses.find(course => course.title === selectedCourse)?.commencement}</p>
                          )}
                        </div>
                      )}
                    </div>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-sm font-medium text-gray-700">
                    Additional Information
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Any additional information or questions you'd like to share"
                    className="w-full"
                    rows={3}
                  />
                </div>

                {message && (
                  <div className={`p-4 rounded-md text-sm ${
                    message.includes('success') || message.includes('Success') 
                      ? 'bg-green-100 text-green-700 border border-green-200' 
                      : 'bg-red-100 text-red-700 border border-red-200'
                  }`}>
                    {message}
                  </div>
                )}

                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Button 
                    type="submit" 
                    className="flex-1 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-medium py-3 px-6 rounded-md transition-all duration-200 transform hover:scale-105"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        Processing...
                      </div>
                    ) : (
                      'Submit Registration'
                    )}
                  </Button>
                  
                  <Button 
                    type="button" 
                    variant="outline"
                    className="flex-1"
                    onClick={() => {
                      const form = document.querySelector('form') as HTMLFormElement
                      if (form) form.reset()
                      setSelectedCourse('')
                      setSelectedCategory('')
                      setMessage('')
                    }}
                  >
                    Clear Form
                  </Button>
                </div>
        </form>
            </CardContent>
          </Card>

          {/* Additional Information */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="text-center p-6">
              <h3 className="font-semibold text-gray-800 mb-2">Quality Education</h3>
              <p className="text-sm text-gray-600">Accredited courses with international recognition</p>
            </Card>
            
            <Card className="text-center p-6">
              <h3 className="font-semibold text-gray-800 mb-2">Expert Faculty</h3>
              <p className="text-sm text-gray-600">Learn from industry professionals and experienced educators</p>
            </Card>
            
            <Card className="text-center p-6">
              <h3 className="font-semibold text-gray-800 mb-2">Career Support</h3>
              <p className="text-sm text-gray-600">Comprehensive support for your career development</p>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FormToSheet