import type { Post } from "@/types/post";
import PostCard from "@/components/news/PostCard";

interface NewsCardProps {
  post: Post;
}

export default function NewsCard({ post }: NewsCardProps) {
  return <PostCard post={post} />;
}
