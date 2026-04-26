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
    <section className="mx-auto mt-10 w-full max-w-[1200px] px-4 md:mt-16">
      <article className="grid grid-cols-1 items-start gap-8 pt-6 pb-3 lg:grid-cols-12 lg:gap-12 lg:pt-10 lg:pb-4">
        <div className="order-2 space-y-4 lg:order-1 lg:col-span-7 md:space-y-6">
          <p className="mb-2 text-xs uppercase tracking-[0.16em] text-zinc-500">
            {post.category.name}
          </p>

          <h1 className="max-w-[24ch] font-serif text-4xl leading-[1.1] tracking-tight text-zinc-950 md:text-5xl lg:max-w-[26ch] lg:text-6xl">
            {post.title}
          </h1>

          <p className="mt-4 max-w-lg text-base leading-relaxed text-gray-600 md:mt-6 md:text-lg">
            {post.excerpt}
          </p>

          <div className="mt-6 flex items-center gap-5">
            <p className="text-xs uppercase tracking-[0.12em] text-zinc-500">
              {formatPublishedDate(post.publishedAt)}
            </p>

            <Link
              href={`/noticia/${post.slug}`}
              className="inline-flex items-center border border-black px-4 py-2 text-sm uppercase tracking-widest text-zinc-900 transition hover:bg-black hover:text-white"
            >
              Ler mais
            </Link>
          </div>
        </div>

        <div className="order-1 lg:order-2 lg:col-span-5">
          <div className="relative h-[220px] overflow-hidden rounded-lg shadow-sm sm:h-[260px] md:h-[440px] lg:h-[520px]">
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
