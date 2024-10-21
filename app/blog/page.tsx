import { PostCard } from "@/components/ui/post-card";
import { getPosts, getTags } from "@/lib/sanity";
import Link from "next/link";

export default async function Blog() {
  const posts: any[] = await getPosts(true);
  const tags: any[] = await getTags();
  return (
    <div className="pt-24 md:pt-32 pb-12 flex items-center justify-center px-6">
      <div className="max-w-2xl w-full">
        <div className="flex md:space-x-8">
          <div className="w-[14rem] hidden md:block">
            <div className="dark:bg-zinc-900 bg-zinc-100 p-4 rounded">
              <div className="font-bold text-indigo-500 mb-4">Tags</div>
              <ol className="text-xs font-semibold text-slate-500 space-y-2">
                {tags.map((tag) => (
                  <li key={tag._id}>
                    <Link href={`/blog/tags/${tag.slug.current}`}>
                      # {tag.slug.current}
                    </Link>
                  </li>
                ))}
              </ol>
            </div>
          </div>
          <div className="flex-1 divide-y divide-zinc-200 dark:divide-zinc-800">
            {posts.map((post) => (
              <PostCard
                compact
                key={post._id}
                className="py-6"
                title={post.title}
                date={post.createdAt}
                tags={post.tags.map((tag: any) => tag.slug.current)}
                href={`/blog/${post.slug.current}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
