import { searchPosts } from "@/services/wordpress";
import NewsCard from "@/components/news/NewsCard";

interface SearchPageProps {
  searchParams: Promise<{ q?: string }>;
}

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const { q = "" } = await searchParams;
  const posts = await searchPosts(q);

  return (
    <main>
      <h1>Resultados para &ldquo;{q}&rdquo;</h1>
      {posts.map((post) => (
        <NewsCard key={post.id} post={post} />
      ))}
    </main>
  );
}
