import { getPostsByCategory } from "@/services/wordpress";
import NewsCard from "@/components/news/NewsCard";

interface CategoriaPageProps {
  params: Promise<{ slug: string }>;
}

export default async function CategoriaPage({ params }: CategoriaPageProps) {
  const { slug } = await params;
  const posts = await getPostsByCategory(slug);

  return (
    <main>
      <h1>{slug}</h1>
      {posts.map((post) => (
        <NewsCard key={post.id} post={post} />
      ))}
    </main>
  );
}
