import type { Post } from "@/types/post";
import type { WpRawPost } from "@/services/wordpress/types";

const FALLBACK_CATEGORY = { id: "", name: "Sem categoria", slug: "sem-categoria" };

export function mapPost(raw: WpRawPost): Post {
  const embedded = raw._embedded;

  const rawAuthor = embedded?.author?.[0];
  const rawMedia = embedded?.["wp:featuredmedia"]?.[0];
  const rawCategories = embedded?.["wp:term"]?.[0] ?? [];
  const rawTags = embedded?.["wp:term"]?.[1] ?? [];

  const primaryCategory = rawCategories[0];

  return {
    id: String(raw.id),
    title: raw.title.rendered,
    slug: raw.slug,
    excerpt: raw.excerpt.rendered,
    content: raw.content.rendered,
    publishedAt: raw.date,
    isFeatured: raw.sticky,

    category: primaryCategory
      ? {
          id: String(primaryCategory.id),
          name: primaryCategory.name,
          slug: primaryCategory.slug,
        }
      : FALLBACK_CATEGORY,

    featuredImage: rawMedia?.source_url,

    tags: rawTags.map((t) => ({
      id: String(t.id),
      name: t.name,
      slug: t.slug,
    })),

    author: rawAuthor
      ? {
          id: String(rawAuthor.id),
          name: rawAuthor.name,
          // WordPress provides several sizes; prefer 96 px, fall back to any available
          avatar:
            rawAuthor.avatar_urls["96"] ??
            Object.values(rawAuthor.avatar_urls)[0] ??
            "",
        }
      : undefined,
  };
}

export function mapPosts(raws: WpRawPost[]): Post[] {
  return raws.map(mapPost);
}
