/**
 * Client-side API functions for interacting with the backend
 */

/**
 * Submit contact form data to the backend
 * @param {Object} formData - Form data to submit
 * @returns {Promise<Object>} - Promise that resolves to response data
 */
export async function submitContactForm(formData) {
  try {
    console.log("Submitting contact form:", formData)

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })

    if (!response.ok) {
      const errorData = await response.json()
      throw new Error(errorData.message || "Failed to submit form")
    }

    return await response.json()
  } catch (error) {
    console.error("Error submitting contact form:", error)
    throw error
  }
}

/**
 * Subscribe to the newsletter
 * @param {string} email - Email address to subscribe
 * @returns {Promise<Object>} - Promise that resolves to response data
 */
export async function subscribeToNewsletter(email) {
  try {
    const response = await fetch("/api/subscribe", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    })

    if (!response.ok) {
      const errorData = await response.json()
      throw new Error(errorData.message || "Failed to subscribe")
    }

    return await response.json()
  } catch (error) {
    console.error("Error subscribing to newsletter:", error)
    throw error
  }
}

/**
 * Request a consultation
 * @param {Object} data - Consultation request data
 * @returns {Promise<Object>} - Promise that resolves to response data
 */
export async function requestConsultation(data) {
  try {
    const response = await fetch("/api/consultation", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })

    if (!response.ok) {
      const errorData = await response.json()
      throw new Error(errorData.message || "Failed to request consultation")
    }

    return await response.json()
  } catch (error) {
    console.error("Error requesting consultation:", error)
    throw error
  }
}

/**
 * Get services filtered by category
 * @param {string} category - Category to filter by (optional)
 * @returns {Promise<Object>} - Promise that resolves to services data
 */
export async function getServices(category = null) {
  try {
    const url = category ? `/api/services?category=${category}` : "/api/services"

    const response = await fetch(url)

    if (!response.ok) {
      throw new Error("Failed to fetch services")
    }

    return await response.json()
  } catch (error) {
    console.error("Error fetching services:", error)
    throw error
  }
}

