/**
 * WordPress headless CMS base URL.
 *
 * Intentionally NOT prefixed with NEXT_PUBLIC_ — this value is only ever
 * read in server-side code (Server Components, Route Handlers). Keeping it
 * server-only prevents the CMS origin from being exposed to the browser.
 *
 * Set WORDPRESS_API_URL in .env.local for local dev and in the deployment
 * environment for production.
 *
 * Expected format: https://cms.example.com (no trailing slash)
 */
export const WP_BASE_URL = process.env.WORDPRESS_API_URL ?? "";

/**
 * ISR revalidation window (seconds) used by all WordPress fetch calls.
 * Centralised here so cache behaviour can be tuned in one place.
 */
export const REVALIDATE_TIME = 60;

/**
 * Firebase project configuration.
 * NEXT_PUBLIC_ prefix is intentional: Firebase config is embedded in the
 * client bundle by design. Real security is enforced by Firebase Security Rules.
 */
export const FIREBASE_CONFIG = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY ?? "",
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN ?? "",
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID ?? "",
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET ?? "",
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID ?? "",
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID ?? "",
} as const;
