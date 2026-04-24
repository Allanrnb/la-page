import type { Author } from "@/types/author";
import type { Category } from "@/types/category";
import type { Tag } from "@/types/tag";

export interface Post {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  featuredImage: string;
  category: Category;
  tags: Tag[];
  author: Author;
  publishedAt: string;
  isFeatured: boolean;
}
