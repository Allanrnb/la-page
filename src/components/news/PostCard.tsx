import type { Post } from "@/types/post";
import Image from "next/image";
import Link from "next/link";

type PostCardVariant = "standard" | "featured" | "list";

interface PostCardProps {
  post: Post;
  variant?: PostCardVariant;
  className?: string;
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

export default function PostCard({
  post,
  variant = "standard",
  className = "",
}: PostCardProps) {
  const imageSrc = post.featuredImage ?? "/images/placeholder.jpg";

  if (variant === "list") {
    return (
      <article className={className}>
        <Link
          href={`/post/${post.slug}`}
          className="group grid grid-cols-[180px_1fr] items-start gap-5"
          aria-label={`Ler matéria: ${post.title}`}
        >
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-md bg-neutral-100">
            <Image
              src={imageSrc}
              alt={post.title}
              fill
              unoptimized
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
            />
          </div>

          <div className="space-y-2">
            <p className="text-[11px] uppercase tracking-[0.16em] text-zinc-500">
              {post.category.name}
            </p>
            <h3 className="font-serif text-2xl font-semibold leading-tight tracking-tight text-zinc-950">
              {post.title}
            </h3>
            <p className="max-w-[60ch] text-sm leading-relaxed text-zinc-600 line-clamp-3">
              {post.excerpt}
            </p>
            <p className="text-[11px] uppercase tracking-[0.12em] text-zinc-500">
              {formatPublishedDate(post.publishedAt)}
            </p>
          </div>
        </Link>
      </article>
    );
  }

  if (variant === "featured") {
    return (
      <article className={className}>
        <Link
          href={`/post/${post.slug}`}
          className="group block space-y-4"
          aria-label={`Ler matéria: ${post.title}`}
        >
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg bg-neutral-100">
            <Image
              src={imageSrc}
              alt={post.title}
              fill
              unoptimized
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
            />
          </div>
          <p className="text-[11px] uppercase tracking-[0.16em] text-zinc-500">
            {post.category.name}
          </p>
          <h3 className="max-w-[28ch] font-serif text-3xl font-semibold leading-tight tracking-tight text-zinc-950">
            {post.title}
          </h3>
          <p className="max-w-[62ch] text-base leading-relaxed text-zinc-600 line-clamp-3">
            {post.excerpt}
          </p>
          <p className="text-[11px] uppercase tracking-[0.12em] text-zinc-500">
            {formatPublishedDate(post.publishedAt)}
          </p>
        </Link>
      </article>
    );
  }

  return (
    <article className={className}>
      <Link
        href={`/post/${post.slug}`}
        className="group block space-y-3"
        aria-label={`Ler matéria: ${post.title}`}
      >
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg bg-neutral-100">
          <Image
            src={imageSrc}
            alt={post.title}
            fill
            unoptimized
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
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
