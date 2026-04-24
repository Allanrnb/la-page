import type { Post } from "@/types/post";

interface CarouselProps {
  posts: Post[];
}

export default function Carousel({ posts }: CarouselProps) {
  return (
    <div>
      {posts.map((post) => (
        <p key={post.id}>{post.title}</p>
      ))}
    </div>
  );
}
