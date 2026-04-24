import type { Post } from "@/types/post";

interface NewsCardProps {
  post: Post;
}

export default function NewsCard({ post }: NewsCardProps) {
  return (
    <article>
      <p>{post.title}</p>
    </article>
  );
}
