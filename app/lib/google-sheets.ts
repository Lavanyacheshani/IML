import { NextRequest, NextResponse } from 'next/server';
import { appendToSheet } from '@/lib/google-sheets';

const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwzaHspm3Idmz7GS9qocF4GmIVtYvG1Xl5bCRMEzOi5bfa1KvpgLRAtnMWuURu4VReGqQ/exec";

export async function addRowToSheet(rowData: any) {
  try {
    const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(rowData),
    });
    const result = await response.json();
    if (result.result === "success") {
      return { success: true };
    } else {
      return { success: false, error: result.error || "Unknown error" };
    }
  } catch (error: any) {
    return { success: false, error: error.message };
  }
}

