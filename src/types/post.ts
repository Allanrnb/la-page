import type { Author } from "@/types/author";
import type { Category } from "@/types/category";
import type { Tag } from "@/types/tag";

export interface Post {
  // Core identity
  id: string;
  slug: string;
  date: string;

  // Plain text (for cards/lists)
  title: string;
  excerpt: string;

  // HTML (for post page)
  titleHtml: string;
  excerptHtml: string;
  contentHtml: string;

  // Compatibility fields still used in current UI layer
  publishedAt: string;
  isFeatured: boolean;
  category: Category;

  // Fields the API may omit entirely
  featuredImage?: string;
  tags?: Tag[];
  author?: Author;
}
