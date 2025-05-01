import { GoogleSpreadsheet } from "google-spreadsheet"
import { JWT } from "google-auth-library"

// Google Sheets document ID from the URL
const SPREADSHEET_ID = "1W2EKkch9HpV8ebpg3WeRW5Fqv8SRw_Uue9WSvmkhk3s"
const SHEET_ID = 0 // Using the first sheet by default

// Function to initialize and get the Google Sheets document
export async function getGoogleSheetsDoc() {
  try {
    // Create a JWT client using environment variables
    const serviceAccountAuth = new JWT({
      email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL || "iml-67@iml-business-school.iam.gserviceaccount.com",
      key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    })

    // Initialize the sheet
    const doc = new GoogleSpreadsheet(SPREADSHEET_ID, serviceAccountAuth)
    await doc.loadInfo() // Load document properties and sheets

    return doc
  } catch (error) {
    console.error("Error initializing Google Sheets:", error)
    throw error
  }
}

// Function to add a new row to the Google Sheet
export async function addRowToSheet(rowData: Record<string, any>) {
  try {
    const doc = await getGoogleSheetsDoc()
    const sheet = doc.sheetsById[SHEET_ID]

    // If the sheet is empty, add headers first
    const rows = await sheet.getRows()
    if (rows.length === 0) {
      await sheet.setHeaderRow(Object.keys(rowData))
    }

    // Add the new row
    await sheet.addRow(rowData)

    return { success: true }
  } catch (error) {
    console.error("Error adding row to Google Sheet:", error)
    return { success: false, error: error.message }
  }
}

