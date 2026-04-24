import type { WpRawPost } from "@/services/wordpress/types";
import { MOCK_RAW_POSTS } from "@/services/wordpress/mocks";

/**
 * Raw fetch layer — no transformation, no business logic.
 *
 * Each function simulates the equivalent WordPress REST API call.
 * To switch to real data, replace the mock return with a `fetch()` call
 * to `${process.env.NEXT_PUBLIC_WP_BASE_URL}/wp-json/wp/v2/posts?_embed&…`
 * and return `response.json()` typed as `WpRawPost[]`.
 */

export async function fetchLatestPosts(limit: number): Promise<WpRawPost[]> {
  // TODO: fetch(`${WP_BASE_URL}/wp-json/wp/v2/posts?_embed&per_page=${limit}`)
  return MOCK_RAW_POSTS.slice(0, limit);
}

export async function fetchPostBySlug(
  slug: string
): Promise<WpRawPost | null> {
  // TODO: fetch(`${WP_BASE_URL}/wp-json/wp/v2/posts?_embed&slug=${slug}`)
  //       then return response.json()[0] ?? null
  return MOCK_RAW_POSTS.find((p) => p.slug === slug) ?? null;
}

export async function fetchPostsByCategory(
  categorySlug: string
): Promise<WpRawPost[]> {
  // TODO: resolve slug → ID first, then:
  //       fetch(`${WP_BASE_URL}/wp-json/wp/v2/posts?_embed&categories=${id}`)
  return MOCK_RAW_POSTS.filter((p) =>
    p._embedded?.["wp:term"]?.[0]?.some((t) => t.slug === categorySlug)
  );
}

export async function fetchSearchPosts(query: string): Promise<WpRawPost[]> {
  // TODO: fetch(`${WP_BASE_URL}/wp-json/wp/v2/posts?_embed&search=${encodeURIComponent(query)}`)
  const q = query.toLowerCase();
  return MOCK_RAW_POSTS.filter(
    (p) =>
      p.title.rendered.toLowerCase().includes(q) ||
      p.excerpt.rendered.toLowerCase().includes(q)
  );
}
