/**
 * API route handler for newsletter subscriptions
 */

import { saveSubscriptionToDatabase } from "../../../src/lib/database";
import { sendTemplateEmail } from "../../../src/lib/email";

export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    const { email } = req.body;

    // Basic validation
    if (!email) {
      return res.status(400).json({ message: "Email is required" });
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ message: "Invalid email address" });
    }

    // Save subscription to database
    const result = await saveSubscriptionToDatabase({ email });

    // If already subscribed
    if (result.alreadySubscribed) {
      return res
        .status(200)
        .json({ message: "You are already subscribed to our newsletter" });
    }

    // Send welcome email
    await sendTemplateEmail("newsletter-welcome", {}, email);

    // Return success response
    return res
      .status(200)
      .json({ message: "Successfully subscribed to newsletter" });
  } catch (error) {
    console.error("Error processing subscription:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
}
