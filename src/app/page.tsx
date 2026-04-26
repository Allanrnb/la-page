import { getLatestPosts } from "@/services/wordpress";
import Hero from "@/components/news/Hero";
import NewsCard from "@/components/news/NewsCard";

export default async function HomePage() {
  const posts = await getLatestPosts();
  const [featured, ...rest] = posts;

  return (
    <main>
      {featured && <Hero post={featured} />}

      <section className="mx-auto mt-12 w-full max-w-[1200px] px-4 md:mt-16">
        <div className="mb-6 flex items-center gap-4 md:mb-8">
          <h2 className="shrink-0 text-xs uppercase tracking-[0.16em] text-zinc-700">
            Em Destaque
          </h2>
          <span aria-hidden className="h-px w-full bg-zinc-200" />
        </div>

        <div className="-mx-4 flex gap-5 overflow-x-auto px-4 pb-2 md:mx-0 md:grid md:grid-cols-2 md:gap-6 md:overflow-visible md:px-0 lg:grid-cols-4">
          {rest.map((post) => (
            <NewsCard key={post.id} post={post} />
          ))}
        </div>
      </section>
    </main>
  );
}
