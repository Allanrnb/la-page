import { getLatestPosts } from "@/services/wordpress";
import Hero from "@/components/news/Hero";
import NewsCard from "@/components/news/NewsCard";

export default async function HomePage() {
  const posts = await getLatestPosts();
  const [featured, ...rest] = posts;

  return (
    <main>
      {featured && <Hero post={featured} />}
      {rest.map((post) => (
        <NewsCard key={post.id} post={post} />
      ))}
    </main>
  );
}
