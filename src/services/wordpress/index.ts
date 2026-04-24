import type { Post } from "@/types/post";
import { MOCK_POSTS } from "@/services/wordpress/mocks";

export async function getLatestPosts(limit = 10): Promise<Post[]> {
  return MOCK_POSTS.slice(0, limit);
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  return MOCK_POSTS.find((post) => post.slug === slug) ?? null;
}

export async function getPostsByCategory(categorySlug: string): Promise<Post[]> {
  return MOCK_POSTS.filter((post) => post.category.slug === categorySlug);
}

export async function searchPosts(query: string): Promise<Post[]> {
  const q = query.toLowerCase();
  return MOCK_POSTS.filter(
    (post) =>
      post.title.toLowerCase().includes(q) ||
      post.excerpt.toLowerCase().includes(q)
  );
}
