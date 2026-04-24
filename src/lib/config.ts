/**
 * WordPress headless CMS base URL.
 * Set NEXT_PUBLIC_WP_BASE_URL in .env.local for local dev,
 * and in the deployment environment for production.
 *
 * Expected format: https://cms.example.com (no trailing slash)
 */
export const WP_BASE_URL = process.env.NEXT_PUBLIC_WP_BASE_URL ?? "";

/**
 * Firebase project configuration.
 * All values are read from environment variables so that no credentials
 * are committed to the repository.
 */
export const FIREBASE_CONFIG = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY ?? "",
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN ?? "",
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID ?? "",
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET ?? "",
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID ?? "",
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID ?? "",
} as const;
