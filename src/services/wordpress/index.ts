import type { Post } from "@/types/post";
import * as api from "@/services/wordpress/api";
import { mapPost, mapPosts } from "@/services/wordpress/mapper";

export async function getLatestPosts(limit = 10): Promise<Post[]> {
  const raw = await api.fetchLatestPosts(limit);
  return mapPosts(raw);
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  const raw = await api.fetchPostBySlug(slug);
  return raw ? mapPost(raw) : null;
}

export async function getPostsByCategory(categorySlug: string): Promise<Post[]> {
  const raw = await api.fetchPostsByCategory(categorySlug);
  return mapPosts(raw);
}

export async function searchPosts(query: string): Promise<Post[]> {
  const raw = await api.fetchSearchPosts(query);
  return mapPosts(raw);
}
