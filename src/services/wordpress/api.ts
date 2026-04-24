import type { WpRawPost } from "@/services/wordpress/types";
import { MOCK_RAW_POSTS } from "@/services/wordpress/mocks";
import { WP_BASE_URL, REVALIDATE_TIME } from "@/lib/config";

/**
 * Raw fetch layer — no transformation, no business logic.
 *
 * When WORDPRESS_API_URL is set in the environment every function performs a
 * real HTTP request to the WordPress REST API with `?_embed` so that author,
 * featured media, and taxonomy terms are resolved in a single round-trip.
 *
 * When the variable is absent (local dev without a CMS instance) the functions
 * fall back to the mock dataset transparently.
 */

const WP_API = `${WP_BASE_URL}/wp-json/wp/v2`;

async function wpFetch<T>(url: string): Promise<T> {
  let res: Response;

  try {
    res = await fetch(url, { next: { revalidate: REVALIDATE_TIME } });
  } catch (err) {
    throw new Error(
      `WordPress fetch failed — could not reach ${url}: ${String(err)}`
    );
  }

  if (!res.ok) {
    throw new Error(
      `WordPress API returned ${res.status} ${res.statusText} for ${url}`
    );
  }

  try {
    return (await res.json()) as T;
  } catch {
    throw new Error(`WordPress API returned invalid JSON for ${url}`);
  }
}

// ---------------------------------------------------------------------------

export async function fetchLatestPosts(limit: number): Promise<WpRawPost[]> {
  if (!WP_BASE_URL) {
    return MOCK_RAW_POSTS.slice(0, limit);
  }

  return wpFetch<WpRawPost[]>(`${WP_API}/posts?_embed&per_page=${limit}`);
}

export async function fetchPostBySlug(
  slug: string
): Promise<WpRawPost | null> {
  if (!WP_BASE_URL) {
    return MOCK_RAW_POSTS.find((p) => p.slug === slug) ?? null;
  }

  const results = await wpFetch<WpRawPost[]>(
    `${WP_API}/posts?_embed&slug=${encodeURIComponent(slug)}`
  );

  return results[0] ?? null;
}

export async function fetchPostsByCategory(
  categorySlug: string
): Promise<WpRawPost[]> {
  if (!WP_BASE_URL) {
    return MOCK_RAW_POSTS.filter((p) =>
      p._embedded?.["wp:term"]?.[0]?.some((t) => t.slug === categorySlug)
    );
  }

  // The posts endpoint filters by category ID, not slug.
  // Resolve the slug to an ID first with a lightweight request.
  const categories = await wpFetch<{ id: number }[]>(
    `${WP_API}/categories?slug=${encodeURIComponent(categorySlug)}&per_page=1`
  );

  const categoryId = categories[0]?.id;
  if (!categoryId) return [];

  return wpFetch<WpRawPost[]>(
    `${WP_API}/posts?_embed&categories=${categoryId}`
  );
}

export async function fetchSearchPosts(query: string): Promise<WpRawPost[]> {
  if (!WP_BASE_URL) {
    const q = query.toLowerCase();
    return MOCK_RAW_POSTS.filter(
      (p) =>
        p.title.rendered.toLowerCase().includes(q) ||
        p.excerpt.rendered.toLowerCase().includes(q)
    );
  }

  return wpFetch<WpRawPost[]>(
    `${WP_API}/posts?_embed&search=${encodeURIComponent(query)}`
  );
}
