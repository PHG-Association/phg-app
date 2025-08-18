import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Helper function to handle image paths with base path
export function getImagePath(path: string): string {
  const isProd = process.env.NODE_ENV === 'production';
  const basePath = isProd ? '/phg-app' : '';
  
  // If path already starts with basePath, don't add it again
  if (path.startsWith(basePath)) {
    return path;
  }
  
  return `${basePath}${path}`;
}
