"use server"

import { addRowToSheet } from "@/app/lib/google-sheets"

export async function saveRegistration(formData: FormData) {
  try {
    // Extract form data
    const firstName = formData.get("firstName") as string
    const lastName = formData.get("lastName") as string
    const email = formData.get("email") as string
    const phone = formData.get("phone") as string
    const address = formData.get("address") as string
    const category = formData.get("category") as string
    const course = formData.get("course") as string
    const education = formData.get("education") as string
    const comments = formData.get("comments") as string
    const submittedAt = new Date().toISOString()

    // Create row data object
    const rowData = {
      firstName,
      lastName,
      email,
      phone,
      address,
      category,
      course,
      education,
      comments,
      submittedAt,
    }

    // Save to Google Sheets
    const result = await addRowToSheet(rowData)

    if (!result.success) {
      throw new Error(result.error || "Failed to save registration data")
    }

    return { success: true }
  } catch (error) {
    console.error("Registration error:", error)
    return { success: false, error: error.message }
  }
}

