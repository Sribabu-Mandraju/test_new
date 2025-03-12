/**
 * Database utility functions for MongoDB operations
 */
import { MongoClient } from "mongodb";

// Load MongoDB URI from environment variables
const uri = process.env.MONGODB_URI;
const dbName = process.env.MONGODB_DB_NAME || "digital_marketing";

if (!uri) {
  throw new Error("MongoDB URI is not defined in environment variables.");
}

// Create a global client to prevent multiple connections in development
let client;
let dbInstance;

if (!global._mongoClientPromise) {
  client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  global._mongoClientPromise = client.connect();
}

const clientPromise = global._mongoClientPromise;

/**
 * Get a database connection
 * @returns {Promise<Db>} - MongoDB database instance
 */
export async function connectToDatabase() {
  if (!dbInstance) {
    try {
      console.log("Connecting to MongoDB...");
      const connectedClient = await clientPromise;
      dbInstance = connectedClient.db(dbName);
      console.log("Connected to MongoDB successfully");
    } catch (error) {
      console.error("Error connecting to MongoDB:", error);
      throw error;
    }
  }
  return dbInstance;
}

/**
 * Save contact form submission to the database
 * @param {Object} contact - Contact form data
 * @returns {Promise} - Promise that resolves when contact is saved
 */
export async function saveContactToDatabase(contact) {
  try {
    const db = await connectToDatabase();
    const collection = db.collection("contacts");

    // Add timestamp
    const contactWithTimestamp = {
      ...contact,
      createdAt: new Date(),
    };

    const result = await collection.insertOne(contactWithTimestamp);
    console.log("Contact saved to database with ID:", result.insertedId);
    return result;
  } catch (error) {
    console.error("Error saving contact to database:", error);
    throw error;
  }
}

/**
 * Save newsletter subscription to the database
 * @param {Object} subscription - Newsletter subscription data
 * @returns {Promise} - Promise that resolves when subscription is saved
 */
export async function saveSubscriptionToDatabase(subscription) {
  try {
    const db = await connectToDatabase();
    const collection = db.collection("subscriptions");

    // Check if email already exists
    const existingSubscription = await collection.findOne({ email: subscription.email });
    if (existingSubscription) {
      return { alreadySubscribed: true };
    }

    const result = await collection.insertOne({
      ...subscription,
      createdAt: new Date(),
    });

    console.log("Subscription saved to database:", result.insertedId);
    return result;
  } catch (error) {
    console.error("Error saving subscription to database:", error);
    throw error;
  }
}

/**
 * Get all testimonials from the database
 * @returns {Promise<Array>} - Promise that resolves to an array of testimonials
 */
export async function getTestimonialsFromDatabase() {
  try {
    const db = await connectToDatabase();
    const collection = db.collection("testimonials");
    return await collection.find({}).toArray();
  } catch (error) {
    console.error("Error getting testimonials from database:", error);
    throw error;
  }
}

/**
 * Get projects from the database
 * @param {string} category - Optional category filter
 * @returns {Promise<Array>} - Promise that resolves to an array of projects
 */
export async function getProjectsFromDatabase(category = null) {
  try {
    const db = await connectToDatabase();
    const collection = db.collection("projects");

    const query = category ? { category } : {};
    return await collection.find(query).toArray();
  } catch (error) {
    console.error("Error getting projects from database:", error);
    throw error;
  }
}

/**
 * Save consultation request to the database
 * @param {Object} consultation - Consultation request data
 * @returns {Promise} - Promise that resolves when consultation is saved
 */
export async function saveConsultationToDatabase(consultation) {
  try {
    const db = await connectToDatabase();
    const collection = db.collection("consultations");
    const result = await collection.insertOne({
      ...consultation,
      createdAt: new Date(),
      status: "pending",
    });

    console.log("Consultation saved to database:", result.insertedId);
    return result;
  } catch (error) {
    console.error("Error saving consultation to database:", error);
    throw error;
  }
}

/**
 * Get all services from the database or return an empty array if none exist
 * @param {string} category - Optional category filter
 * @returns {Promise<Array>} - Promise that resolves to an array of services
 */
export async function getServicesFromDatabase(category = null) {
  try {
    const db = await connectToDatabase();
    const collection = db.collection("services");

    // Create query based on category
    const query = category ? { category } : {};
    return await collection.find(query).toArray();
  } catch (error) {
    console.error("Error getting services from database:", error);
    return [];
  }
}
