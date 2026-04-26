import type { Post } from "@/types/post";
import Image from "next/image";
import Link from "next/link";

interface NewsCardProps {
  post: Post;
}

function formatPublishedDate(date: string): string {
  const parsed = new Date(date);

  if (Number.isNaN(parsed.getTime())) {
    return date;
  }

  return new Intl.DateTimeFormat("pt-BR", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  }).format(parsed);
}

export default function NewsCard({ post }: NewsCardProps) {
  const imageSrc = post.featuredImage ?? "/images/placeholder.jpg";

  return (
    <article className="min-w-[280px] shrink-0 snap-start sm:min-w-[300px] md:min-w-0">
      <Link
        href={`/noticia/${post.slug}`}
        className="group block space-y-3"
        aria-label={`Ler matéria: ${post.title}`}
      >
        <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
          <Image
            src={imageSrc}
            alt={post.title}
            fill
            unoptimized
            className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
          />
        </div>

        <p className="text-[11px] uppercase tracking-[0.16em] text-zinc-500">
          {post.category.name}
        </p>

        <h3 className="font-serif text-xl font-semibold leading-snug tracking-tight text-zinc-950">
          {post.title}
        </h3>

        <p className="text-[11px] uppercase tracking-[0.12em] text-zinc-500">
          {formatPublishedDate(post.publishedAt)}
        </p>
      </Link>
    </article>
  );
}
