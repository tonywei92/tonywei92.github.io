import { Button } from "@/components/ui/button";
import { PostCard } from "@/components/ui/post-card";
import { getPostsByTag, getTags } from "@/lib/sanity";
import Link from "next/link";

export async function generateStaticParams() {
  const tags = await getTags();
  return tags.map((tag) => ({ slug: tag.slug!.current }));
}

export default async function Post({ params }: { params: { slug: string } }) {
  const postsByTag = await getPostsByTag(params.slug);
  return (
    <div className="pt-24 md:pt-32 pb-12 flex items-center justify-center px-6">
      <div className="max-w-2xl w-full">
        <h1 className="text-3xl font-bold mb-8">
          <span className="font-mono">#{params.slug}</span>
        </h1>
        <div className="divide-y divide-zinc-200 dark:divide-zinc-800">
          {postsByTag.map((post) => (
            <PostCard
              className="py-6"
              key={post._id}
              title={post.title!}
              date={post.createdAt!}
              tags={post.tags!.map((tag) => tag.slug!.current!)}
              href={`/blog/${post.slug!.current}`}
            />
          ))}
        </div>
        <div className="flex justify-center mt-6">
          <Button variant="outline" className="w-24" asChild>
            <Link href="/blog">View All</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
