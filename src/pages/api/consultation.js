/**
 * API route handler for consultation requests
 */

import { saveConsultationToDatabase } from "../../lib/database";
import { sendEmail } from "../../lib/email";

export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    const {
      name,
      email,
      phone,
      company,
      serviceInterest,
      budget,
      timeline,
      message,
    } = req.body;

    // Basic validation
    if (!name || !email || !serviceInterest) {
      return res
        .status(400)
        .json({ message: "Name, email, and service interest are required" });
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ message: "Invalid email address" });
    }

    // Save consultation request to database
    await saveConsultationToDatabase({
      name,
      email,
      phone: phone || "",
      company: company || "",
      serviceInterest,
      budget: budget || "",
      timeline: timeline || "",
      message: message || "",
    });

    // Send notification email
    await sendEmail({
      to: "sales@digitalagency.com",
      subject: "New Consultation Request",
      text: `
        Name: ${name}
        Email: ${email}
        Phone: ${phone || "Not provided"}
        Company: ${company || "Not provided"}
        Service Interest: ${serviceInterest}
        Budget: ${budget || "Not provided"}
        Timeline: ${timeline || "Not provided"}
        Message: ${message || "Not provided"}
      `,
      html: `
        <h1>New Consultation Request</h1>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
        <p><strong>Company:</strong> ${company || "Not provided"}</p>
        <p><strong>Service Interest:</strong> ${serviceInterest}</p>
        <p><strong>Budget:</strong> ${budget || "Not provided"}</p>
        <p><strong>Timeline:</strong> ${timeline || "Not provided"}</p>
        <p><strong>Message:</strong> ${message || "Not provided"}</p>
      `,
    });

    // Send confirmation email to the user
    await sendEmail({
      to: email,
      subject: "Your Consultation Request with DigitalPro",
      text: `
        Dear ${name},

        Thank you for requesting a consultation with DigitalPro. We have received your request and will contact you shortly to schedule a time to discuss your project.

        Best regards,
        The DigitalPro Team
      `,
      html: `
        <h1>Your Consultation Request with DigitalPro</h1>
        <p>Dear ${name},</p>
        <p>Thank you for requesting a consultation with DigitalPro. We have received your request and will contact you shortly to schedule a time to discuss your project.</p>
        <p>Best regards,<br>The DigitalPro Team</p>
      `,
    });

    // Return success response
    return res
      .status(200)
      .json({ message: "Consultation request submitted successfully" });
  } catch (error) {
    console.error("Error processing consultation request:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
}
