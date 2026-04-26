import { redirect } from "next/navigation";

interface NoticiaPageProps {
  params: Promise<{ slug: string }>;
}

export default async function NoticiaPage({ params }: NoticiaPageProps) {
  const { slug } = await params;
  redirect(`/post/${slug}`);
}
