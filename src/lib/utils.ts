import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * Utility function to merge Tailwind CSS classes.
 * Ensures that conflicting classes are properly merged.
 *
 * @param {...ClassValue[]} inputs - List of class names
 * @returns {string} - Merged class names
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs))
}

