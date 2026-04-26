import { getLatestPosts } from "@/services/wordpress";
import { getPostsByCategory } from "@/services/wordpress";
import Hero from "@/components/news/Hero";
import PostCard from "@/components/news/PostCard";

const CATEGORY_SECTIONS = [
  { label: "Política", slug: "politica" },
  { label: "Tecnologia", slug: "tecnologia" },
  { label: "Economia", slug: "economia" },
];

const DEBUG_BYPASS_CATEGORY_FILTERING =
  process.env.HOMEPAGE_BYPASS_CATEGORY_FILTERING === "true";

function uniqueById(posts: Awaited<ReturnType<typeof getLatestPosts>>) {
  const seen = new Set<string>();
  return posts.filter((post) => {
    if (seen.has(post.id)) return false;
    seen.add(post.id);
    return true;
  });
}

function getCategoryBlockPosts(
  categoryPosts: Awaited<ReturnType<typeof getLatestPosts>>,
  fallbackPool: Awaited<ReturnType<typeof getLatestPosts>>
) {
  const uniqueCategory = uniqueById(categoryPosts);
  const uniqueFallback = uniqueById(fallbackPool);

  const picked = [...uniqueCategory];

  for (const post of uniqueFallback) {
    if (picked.length >= 4) break;
    if (!picked.some((item) => item.id === post.id)) {
      picked.push(post);
    }
  }

  return picked.slice(0, 4);
}

function SectionHeading({ title }: { title: string }) {
  return (
    <div className="mb-8 flex items-center gap-4">
      <h2 className="shrink-0 text-xs uppercase tracking-[0.16em] text-zinc-700">
        {title}
      </h2>
      <span aria-hidden className="h-px w-full bg-zinc-200" />
    </div>
  );
}

export default async function HomePage() {
  const [posts, politicaPosts, tecnologiaPosts, economiaPosts] =
    await Promise.all([
      getLatestPosts(24),
      getPostsByCategory("politica"),
      getPostsByCategory("tecnologia"),
      getPostsByCategory("economia"),
    ]);

  const [featured, ...rest] = uniqueById(posts);
  const featuredNewsPosts = rest.slice(0, 4);
  const latestNewsPosts = rest.slice(4, 10);

  const categoryDataMap = {
    politica: uniqueById(politicaPosts),
    tecnologia: uniqueById(tecnologiaPosts),
    economia: uniqueById(economiaPosts),
  };

  console.info("[home] data counts", {
    latestPosts: posts.length,
    politicaPosts: politicaPosts.length,
    tecnologiaPosts: tecnologiaPosts.length,
    economiaPosts: economiaPosts.length,
    bypassCategoryFiltering: DEBUG_BYPASS_CATEGORY_FILTERING,
  });

  const categoryBlocks = CATEGORY_SECTIONS.map((section) => {
    const sourcePosts = DEBUG_BYPASS_CATEGORY_FILTERING
      ? posts
      : categoryDataMap[section.slug as keyof typeof categoryDataMap];

    const postsForSection = getCategoryBlockPosts(
      sourcePosts,
      posts
    );

    console.info(`[home] section "${section.slug}"`, {
      sourceCount: sourcePosts.length,
      renderedCount: postsForSection.length,
      postIds: postsForSection.map((post) => post.id),
    });

    return { ...section, posts: postsForSection };
  });

  return (
    <main>
      {featured && <Hero post={featured} />}

      <section className="mx-auto mt-16 w-full max-w-[1240px] px-6">
        <SectionHeading title="Em Destaque" />
        <div className="grid grid-cols-4 gap-6">
          {featuredNewsPosts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      </section>

      <section className="mx-auto mt-20 w-full max-w-[1240px] px-6">
        <SectionHeading title="Últimas Notícias" />
        <div className="space-y-8">
          {latestNewsPosts.map((post) => (
            <PostCard key={post.id} post={post} variant="list" />
          ))}
        </div>
      </section>

      {categoryBlocks.map((section) => {
        const [mainPost, ...secondaryPosts] = section.posts;
        if (!mainPost) return null;

        return (
          <section
            key={section.slug}
            className="mx-auto mt-20 w-full max-w-[1240px] px-6"
          >
            <SectionHeading title={section.label} />
            <div className="grid grid-cols-12 gap-7">
              <div className="col-span-7">
                <PostCard post={mainPost} variant="featured" />
              </div>
              <div className="col-span-5 space-y-7">
                {secondaryPosts.slice(0, 3).map((post) => (
                  <PostCard key={post.id} post={post} variant="list" />
                ))}
              </div>
            </div>
          </section>
        );
      })}
    </main>
  );
}
