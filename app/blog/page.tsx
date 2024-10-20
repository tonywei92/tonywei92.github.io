import { PostCard } from "@/components/ui/post-card";

export default function Blog() {
  return (
    <div className="py-24 flex items-center justify-center px-6">
      <div className="max-w-2xl w-full">
        <h2 className="text-2xl font-bold mb-16 text-center">Blog.</h2>
        <div className="flex space-x-6">
          <div className="w-[16rem] hidden md:block">
            <div className="dark:bg-zinc-900 bg-zinc-100 p-4">
              <div className="font-bold text-indigo-500">ALL POSTS</div>
            </div>
          </div>
          <div className="flex-1 divide-y divide-zinc-800">
            {Array.from({ length: 5 }).map((_, index) => (
              <PostCard
                compact
                key={index}
                className="py-6"
                title="Post Title"
                date="2024-10-19"
                tags={["Technology", "DevOps"]}
                href="/"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
