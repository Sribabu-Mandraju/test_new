/**
 * Email utility functions for sending emails
 */
import nodemailer from "nodemailer"

// Create a transporter with the email credentials from environment variables
const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: Number.parseInt(process.env.EMAIL_PORT || "587"),
  secure: process.env.EMAIL_SECURE === "true",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
})

// Verify the connection configuration on startup
transporter.verify((error, success) => {
  if (error) {
    console.log("SMTP Server connection error:", error)
  } else {
    console.log("SMTP Server is ready to send messages")
  }
})

/**
 * Send an email
 * @param {Object} options - Email options
 * @param {string} options.to - Recipient email address
 * @param {string} options.subject - Email subject
 * @param {string} options.text - Plain text email content
 * @param {string} options.html - HTML email content
 * @returns {Promise} - Promise that resolves when email is sent
 */
export async function sendEmail({ to, subject, text, html }) {
  try {
    const mailOptions = {
      from: `"DigitalPro Marketing" <${process.env.EMAIL_FROM}>`,
      to,
      subject,
      text,
      html,
    }

    console.log("Attempting to send email to:", to)

    const info = await transporter.sendMail(mailOptions)
    console.log("Email sent successfully to:", to, "MessageID:", info.messageId)
    return info
  } catch (error) {
    console.error("Error sending email:", error)
    throw error
  }
}

/**
 * Send a confirmation email to the user
 * @param {Object} data - User data
 * @returns {Promise} - Promise that resolves when email is sent
 */
export async function sendUserConfirmationEmail(data) {
  const { name, email } = data

  const subject = "Thank you for contacting DigitalPro"
  const text = `
    Dear ${name},
    
    Thank you for reaching out to DigitalPro. We have received your message and will get back to you as soon as possible.
    
    Best regards,
    The DigitalPro Team
  `
  const html = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h1 style="color: #4f46e5;">Thank you for contacting DigitalPro</h1>
      <p>Dear ${name},</p>
      <p>Thank you for reaching out to DigitalPro. We have received your message and will get back to you as soon as possible.</p>
      <p>Best regards,<br>The DigitalPro Team</p>
    </div>
  `

  return sendEmail({ to: email, subject, text, html })
}

/**
 * Send a notification email to the website owner
 * @param {Object} data - Form submission data
 * @returns {Promise} - Promise that resolves when email is sent
 */
export async function sendOwnerNotificationEmail(data) {
  const { name, email, phone, company, message } = data

  const subject = "New Contact Form Submission"
  const text = `
    New Contact Form Submission
    
    Name: ${name}
    Email: ${email}
    Phone: ${phone || "Not provided"}
    Company: ${company || "Not provided"}
    
    Message:
    ${message}
  `
  const html = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h1 style="color: #4f46e5;">New Contact Form Submission</h1>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
      <p><strong>Company:</strong> ${company || "Not provided"}</p>
      <h2 style="color: #4f46e5;">Message:</h2>
      <p>${message.replace(/\n/g, "<br>")}</p>
    </div>
  `

  return sendEmail({ to: process.env.EMAIL_FROM, subject, text, html })
}

