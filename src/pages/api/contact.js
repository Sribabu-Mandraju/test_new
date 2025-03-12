/**
 * API route handler for contact form submissions
 */
import { sendUserConfirmationEmail, sendOwnerNotificationEmail } from "../../lib/email"
import { saveContactToDatabase } from "../../lib/database"

export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" })
  }

  try {
    const { name, email, phone, company, message } = req.body

    // Basic validation
    if (!name || !email || !message) {
      return res.status(400).json({ message: "Name, email, and message are required" })
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return res.status(400).json({ message: "Invalid email address" })
    }

    console.log("Processing contact form submission:", { name, email })

    // Save contact to database
    try {
      await saveContactToDatabase({
        name,
        email,
        phone: phone || "",
        company: company || "",
        message,
      })
      console.log("Contact saved to database successfully")
    } catch (dbError) {
      console.error("Database error:", dbError)
      // Continue with email sending even if database fails
    }

    // Send notification email to the website owner
    try {
      await sendOwnerNotificationEmail({
        name,
        email,
        phone,
        company,
        message,
      })
      console.log("Notification email sent to website owner")
    } catch (emailError) {
      console.error("Error sending notification email:", emailError)
      // Continue with confirmation email even if notification email fails
    }

    // Send confirmation email to the user
    try {
      await sendUserConfirmationEmail({
        name,
        email,
      })
      console.log("Confirmation email sent to user")
    } catch (emailError) {
      console.error("Error sending confirmation email:", emailError)
      // Continue with success response even if confirmation email fails
    }

    // Return success response
    return res.status(200).json({
      success: true,
      message: "Contact form submitted successfully",
    })
  } catch (error) {
    console.error("Error processing contact form:", error)
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    })
  }
}

