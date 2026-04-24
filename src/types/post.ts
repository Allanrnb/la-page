import type { Author } from "@/types/author";
import type { Category } from "@/types/category";
import type { Tag } from "@/types/tag";

export interface Post {
  // Core identity — always present, never optional
  id: string;
  title: string;
  slug: string;
  content: string;

  // Rich fields — required but may be empty strings
  excerpt: string;
  publishedAt: string;
  isFeatured: boolean;
  category: Category;

  // Fields the API may omit entirely
  featuredImage?: string;
  tags?: Tag[];
  author?: Author;
}
