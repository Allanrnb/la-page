/** Shape of a WordPress REST API v2 rendered field */
interface WpRendered {
  rendered: string;
}

/** Author object from _embedded.author */
export interface WpRawAuthor {
  id: number;
  name: string;
  /** Keys are pixel sizes ("24", "48", "96") */
  avatar_urls: Record<string, string>;
}

/** Featured media object from _embedded["wp:featuredmedia"] */
export interface WpRawFeaturedMedia {
  source_url: string;
}

/** Term (category or tag) from _embedded["wp:term"] */
export interface WpRawTerm {
  id: number;
  name: string;
  slug: string;
  taxonomy: "category" | "post_tag";
}

/** _embedded block returned when ?_embed is appended to the request */
export interface WpRawEmbedded {
  author?: WpRawAuthor[];
  "wp:featuredmedia"?: WpRawFeaturedMedia[];
  /** Index 0 → categories, index 1 → tags */
  "wp:term"?: WpRawTerm[][];
}

/** Raw post object from GET /wp-json/wp/v2/posts?_embed */
export interface WpRawPost {
  id: number;
  slug: string;
  /** ISO 8601 publish date in site local time */
  date: string;
  title: WpRendered;
  excerpt: WpRendered;
  content: WpRendered;
  /** WordPress "sticky" maps to isFeatured */
  sticky: boolean;
  _embedded?: WpRawEmbedded;
}
