/**
 * API route handler for portfolio projects
 */

import { getProjectsFromDatabase } from "../../lib/database";

export default async function handler(req, res) {
  // Only allow GET requests
  if (req.method !== "GET") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    // Get category from query parameters
    const { category } = req.query;

    // Get projects from database
    const projects = await getProjectsFromDatabase(category);

    // Return projects
    return res.status(200).json({ projects });
  } catch (error) {
    console.error("Error fetching projects:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
}
