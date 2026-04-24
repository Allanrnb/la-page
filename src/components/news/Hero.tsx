import type { Post } from "@/types/post";

interface HeroProps {
  post: Post;
}

export default function Hero({ post }: HeroProps) {
  return (
    <section>
      <p>{post.title}</p>
    </section>
  );
}
