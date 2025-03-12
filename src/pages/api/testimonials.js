/**
 * API route handler for testimonials
 */

import { getTestimonialsFromDatabase } from "../../lib/database";

export default async function handler(req, res) {
  // Only allow GET requests
  if (req.method !== "GET") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    // Get testimonials from database
    const testimonials = await getTestimonialsFromDatabase();

    // Return testimonials
    return res.status(200).json({ testimonials });
  } catch (error) {
    console.error("Error fetching testimonials:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
}
