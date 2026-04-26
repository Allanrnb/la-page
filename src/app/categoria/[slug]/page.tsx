import { getPostsByCategory } from "@/services/wordpress";
import Image from "next/image";
import Link from "next/link";
import PostCard from "@/components/news/PostCard";
import { notFound } from "next/navigation";

interface CategoriaPageProps {
  params: Promise<{ slug: string }>;
}

function formatPublishedDate(date: string): string {
  const parsed = new Date(date);

  if (Number.isNaN(parsed.getTime())) {
    return date;
  }

  return new Intl.DateTimeFormat("pt-BR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  }).format(parsed);
}

export default async function CategoriaPage({ params }: CategoriaPageProps) {
  const { slug } = await params;
  const posts = await getPostsByCategory(slug);
  const [featured, ...rest] = posts;

  if (!featured) {
    notFound();
  }

  const featuredImage = featured.featuredImage ?? "/images/placeholder.jpg";
  const sectionTitle = featured.category.name;

  return (
    <main className="mx-auto w-full max-w-[1240px] px-4 pb-20 pt-10">
      <header>
        <p className="text-xs uppercase tracking-[0.16em] text-zinc-500">
          Categoria
        </p>
        <h1 className="mt-3 font-serif text-5xl leading-tight tracking-tight text-zinc-950">
          {sectionTitle}
        </h1>
      </header>

      <section className="mt-12">
        <Link
          href={`/post/${featured.slug}`}
          className="group grid grid-cols-12 items-start gap-8"
        >
          <article className="col-span-6">
            <p className="mb-3 text-xs uppercase tracking-[0.16em] text-zinc-500">
              {featured.category.name}
            </p>
            <h2 className="max-w-[24ch] font-serif text-5xl leading-[1.08] tracking-tight text-zinc-950 transition-colors group-hover:text-zinc-700">
              {featured.title}
            </h2>
            <p className="mt-5 max-w-[62ch] text-base leading-relaxed text-zinc-600">
              {featured.excerpt}
            </p>
            <p className="mt-6 text-xs uppercase tracking-[0.12em] text-zinc-500">
              {formatPublishedDate(featured.publishedAt)}
            </p>
          </article>

          <div className="col-span-6">
            <div className="relative h-[420px] overflow-hidden rounded-lg bg-neutral-100 shadow-sm">
              <Image
                src={featuredImage}
                alt={featured.title}
                fill
                unoptimized
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
              />
            </div>
          </div>
        </Link>
      </section>

      {rest.length > 0 && (
        <section className="mt-16">
          <div className="space-y-8">
            {rest.map((post) => (
              <div key={post.id} className="border-b border-zinc-200 pb-8">
                <PostCard post={post} variant="list" />
              </div>
            ))}
          </div>
        </section>
      )}
    </main>
  );
}
