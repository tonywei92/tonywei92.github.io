import { Button } from "@/components/ui/button";
import { PostCard } from "@/components/ui/post-card";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <main>
        <div className="h-[100vh] w-full flex items-center justify-center px-6">
          <div className="max-w-2xl text-center space-y-4">
            <h1 className="text-4xl font-bold pb-4">
              Hey There! Let's Connect.
            </h1>
            <p className="text-zinc-500 font-medium pb-8">
              I'm Tony Song. I dedicated myself as Software Engineer and
              technical leader, driving the creation of exceptional products and
              sharing my learnings.
            </p>
            <div className="flex justify-center space-x-4">
              <Button variant="default" className="w-24" asChild>
                <a href="#latest-post">Blog</a>
              </Button>
              <Button variant="outline" className="w-24" asChild>
                <Link href="/about-me">About Me</Link>
              </Button>
            </div>
          </div>
        </div>
        <div className="flex justify-center px-6">
          <div className="max-w-2xl w-full">
            <h2
              className="text-2xl font-bold mb-6 scroll-mt-24"
              id="latest-post"
            >
              Latest Posts
            </h2>
            <div className="divide-y divide-zinc-800">
              {Array.from({ length: 5 }).map((_, index) => (
                <PostCard
                  key={index}
                  className="py-6"
                  title="Post Title"
                  date="2024-10-19"
                  tags={["Technology", "DevOps"]}
                  href="/"
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
      </main>
    </div>
  );
}
