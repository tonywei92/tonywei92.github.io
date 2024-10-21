import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { PostCard } from "@/components/ui/post-card";
import Link from "next/link";
import { getPosts } from "@/lib/sanity";
import { MotionFramerWrapper } from "@/components/ui/motion-framer-wrapper";

export default async function Home() {
  const posts = await getPosts(true, 6);
  return (
    <div>
      <main>
        <div className="h-[100vh] w-full flex items-center justify-center px-6">
          <div className="max-w-2xl text-center space-y-4">
            <MotionFramerWrapper
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              <h1 className="text-4xl font-bold pb-4">
                Hey There! Let's Connect.
              </h1>
            </MotionFramerWrapper>
            <MotionFramerWrapper
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
              viewport={{ once: true }}
            >
              <p className="text-zinc-500 font-medium pb-8">
                I'm Tony Song. I dedicated myself as Software Engineer and
                technical leader, driving the creation of exceptional products
                and sharing my learnings.
              </p>
            </MotionFramerWrapper>
            <MotionFramerWrapper
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 2 }}
              viewport={{ once: true }}
            >
              <div className="flex justify-center space-x-4">
                <Button variant="default" className="w-24" asChild>
                  <a href="#latest-post">Blog</a>
                </Button>
                <Button variant="outline" className="w-24" asChild>
                  <Link href="/about-me">About Me</Link>
                </Button>
              </div>
            </MotionFramerWrapper>
          </div>
        </div>
        <div
          className="flex justify-center px-6 delay-[300ms] duration-[600ms] taos:translate-y-[200px] taos:opacity-0"
          data-taos-offset="300"
        >
          <div className="max-w-2xl w-full">
            <h2
              className="text-2xl font-bold mb-6 scroll-mt-24"
              id="latest-post"
            >
              Latest Posts
            </h2>

            <div className="divide-y divide-zinc-200 dark:divide-zinc-800">
              {posts.map((post: any, i: number) => (
                <MotionFramerWrapper
                  key={post._id}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 1 }}
                  viewport={{ once: true }}
                >
                  <PostCard
                    className="py-6"
                    title={post.title}
                    date={post.createdAt}
                    tags={post.tags.map((tag: any) => tag.slug.current)}
                    href={`/blog/${post.slug.current}`}
                  />
                </MotionFramerWrapper>
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
