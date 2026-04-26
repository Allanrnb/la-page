/* biome-ignore-all lint/security/noDangerouslySetInnerHtml: WordPress post body must render trusted CMS HTML */
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getLatestPosts, getPostBySlug } from "@/services/wordpress";

interface PostPageProps {
  params: Promise<{ slug: string }>;
}

function decodeHtmlContent(html: string): string {
  if (!html.includes("&lt;") && !html.includes("&#")) {
    return html;
  }

  return html
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#039;/g, "'")
    .replace(/&amp;/g, "&");
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

export default async function PostPage({ params }: PostPageProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const latestPosts = await getLatestPosts(20);
  const relatedPosts = latestPosts
    .filter((item) => item.id !== post.id && item.category.slug === post.category.slug)
    .slice(0, 4);

  const categories = Array.from(
    new Map(latestPosts.map((item) => [item.category.slug, item.category])).values()
  ).slice(0, 8);

  const featuredImage = post.featuredImage ?? "/images/placeholder.jpg";
  const renderedContent = decodeHtmlContent(post.content);

  return (
    <section className="mx-auto w-full max-w-[1240px] px-6 pb-20 pt-8">
      <div className="grid grid-cols-12 gap-12">
        <article className="col-span-8">
          <header className="mb-10 border-b border-zinc-200 pb-8">
            <p className="mb-3 text-xs uppercase tracking-[0.16em] text-zinc-500">
              {post.category.name}
            </p>

            <h1 className="max-w-[22ch] font-serif text-6xl leading-[1.08] tracking-tight text-zinc-950">
              {post.title}
            </h1>

            <p className="mt-6 max-w-[68ch] text-lg leading-relaxed text-zinc-600">
              {post.excerpt}
            </p>

            <div className="mt-7 flex items-center gap-5 text-xs uppercase tracking-[0.12em] text-zinc-500">
              <span>{formatPublishedDate(post.publishedAt)}</span>
              <span aria-hidden>•</span>
              <span>{post.author?.name ?? "Redação"}</span>
            </div>
          </header>

          <div className="relative mb-10 h-[520px] overflow-hidden rounded-lg bg-neutral-100">
            <Image
              src={featuredImage}
              alt={post.title}
              fill
              priority
              unoptimized
              className="h-full w-full object-cover"
            />
          </div>

          <div
            className="prose prose-neutral mt-8 max-w-[720px] leading-relaxed prose-headings:font-serif prose-headings:tracking-tight"
            dangerouslySetInnerHTML={{ __html: renderedContent }}
          />
        </article>

        <aside className="col-span-4 space-y-12">
          <section>
            <h2 className="mb-5 text-xs uppercase tracking-[0.16em] text-zinc-700">
              Relacionadas
            </h2>
            <div className="space-y-6">
              {relatedPosts.length > 0 ? (
                relatedPosts.map((item) => (
                  <article key={item.id} className="border-b border-zinc-200 pb-5">
                    <p className="mb-2 text-[11px] uppercase tracking-[0.14em] text-zinc-500">
                      {item.category.name}
                    </p>
                    <Link
                      href={`/post/${item.slug}`}
                      className="font-serif text-2xl leading-tight text-zinc-950 transition-colors hover:text-zinc-700"
                    >
                      {item.title}
                    </Link>
                  </article>
                ))
              ) : (
                <p className="text-sm text-zinc-500">
                  Sem matérias relacionadas no momento.
                </p>
              )}
            </div>
          </section>

          <section>
            <h2 className="mb-5 text-xs uppercase tracking-[0.16em] text-zinc-700">
              Categorias
            </h2>
            <ul className="space-y-3">
              {categories.map((category) => (
                <li key={category.id}>
                  <Link
                    href={`/categoria/${category.slug}`}
                    className="text-sm text-zinc-700 transition-colors hover:text-zinc-950"
                  >
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        </aside>
      </div>
    </section>
  );
}
