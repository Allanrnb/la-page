import type { Post } from "@/types/post";
import type { Author } from "@/types/author";
import type { WpRawPost } from "@/services/wordpress/types";

const FALLBACK_CATEGORY = {
  id: "",
  name: "Sem categoria",
  slug: "sem-categoria",
};

const FALLBACK_AUTHOR: Author = {
  id: "",
  name: "Redação",
  avatar: "",
};

const FALLBACK_IMAGE = "/placeholder.jpg";

/**
 * Strip HTML tags from a WordPress rendered field and decode the most
 * common HTML entities. WordPress wraps excerpts (and occasionally titles)
 * in block-level tags that must not leak into the UI layer.
 */
function stripHtml(html: string): string {
  return html
    .replace(/<[^>]+>/g, "")
    .replace(/&nbsp;|&#160;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&ldquo;|&#8220;|&#x201C;/gi, '"')
    .replace(/&rdquo;|&#8221;|&#x201D;/gi, '"')
    .replace(/&rsquo;|&#8217;|&#x2019;/gi, "'")
    .replace(/&ndash;|&#8211;|&#x2013;/gi, "–")
    .replace(/&#039;/g, "'")
    .replace(/&#8230;/g, "…")
    .replace(/&#8212;/g, "—")
    .replace(/\s+/g, " ")
    .trim();
}

export function mapPost(raw: WpRawPost): Post {
  const embedded = raw._embedded;

  const rawAuthor = embedded?.author?.[0];
  const rawMedia = embedded?.["wp:featuredmedia"]?.[0];
  // wp:term[0] → categories, wp:term[1] → tags
  const rawCategories = embedded?.["wp:term"]?.[0] ?? [];
  const rawTags = embedded?.["wp:term"]?.[1] ?? [];

  const primaryCategory = rawCategories[0];
  const cleanExcerpt = stripHtml(raw.excerpt.rendered);
  const excerpt =
    cleanExcerpt.length > 200
      ? `${cleanExcerpt.slice(0, 200).trim()}...`
      : cleanExcerpt;

  const author: Author = rawAuthor
    ? {
        id: String(rawAuthor.id),
        name: rawAuthor.name || FALLBACK_AUTHOR.name,
        // WordPress serves several sizes; prefer 96 px, fall back to any available
        avatar:
          rawAuthor.avatar_urls["96"] ??
          Object.values(rawAuthor.avatar_urls)[0] ??
          "",
      }
    : FALLBACK_AUTHOR;

  return {
    id: String(raw.id),
    slug: raw.slug,
    date: raw.date,
    publishedAt: raw.date,
    isFeatured: raw.sticky,

    // Plain text fields for cards/lists
    title: stripHtml(raw.title.rendered),
    excerpt,
    // HTML fields for post detail rendering
    titleHtml: raw.title.rendered,
    excerptHtml: raw.excerpt.rendered,
    contentHtml: raw.content.rendered,

    category: primaryCategory
      ? {
          id: String(primaryCategory.id),
          name: primaryCategory.name,
          slug: primaryCategory.slug,
        }
      : FALLBACK_CATEGORY,

    featuredImage: rawMedia?.source_url ?? FALLBACK_IMAGE,

    tags: rawTags.map((t) => ({
      id: String(t.id),
      name: t.name,
      slug: t.slug,
    })),

    author,
  };
}

export function mapPosts(raws: WpRawPost[]): Post[] {
  return raws.map(mapPost);
}
