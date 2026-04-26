import type { Post } from "@/types/post";
import Image from "next/image";
import Link from "next/link";

interface HeroProps {
  post: Post;
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

export default function Hero({ post }: HeroProps) {
  const imageSrc = post.featuredImage ?? "/images/placeholder.jpg";

  return (
    <section className="mx-auto w-full max-w-[1200px] px-5 md:px-8">
      <article className="grid items-start gap-8 py-6 lg:grid-cols-2 lg:gap-12 lg:py-10">
        <div className="order-2 lg:order-1">
          <p className="text-xs uppercase tracking-[0.16em] text-zinc-500">
            {post.category.name}
          </p>

          <h1 className="mt-4 max-w-[22ch] font-serif text-4xl leading-tight text-zinc-950 md:text-5xl">
            {post.title}
          </h1>

          <p className="mt-5 max-w-[52ch] text-base leading-8 text-zinc-600 md:text-lg">
            {post.excerpt}
          </p>

          <div className="mt-6 flex items-center gap-4">
            <p className="text-xs uppercase tracking-[0.12em] text-zinc-500">
              {formatPublishedDate(post.publishedAt)}
            </p>

            <Link
              href={`/noticia/${post.slug}`}
              className="inline-flex items-center border border-zinc-300 px-4 py-2 text-[11px] uppercase tracking-[0.12em] text-zinc-800 transition-colors hover:border-zinc-950 hover:text-zinc-950"
            >
              Ler mais
            </Link>
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <div className="relative aspect-[16/10] overflow-hidden rounded-sm">
            <Image
              src={imageSrc}
              alt={post.title}
              fill
              priority
              unoptimized
              className="object-cover"
            />
          </div>
        </div>
      </article>
    </section>
  );
}
