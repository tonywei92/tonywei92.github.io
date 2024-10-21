import Link from "next/link";
import SyntaxHighlighter from "react-syntax-highlighter";
import { Metadata } from "next";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { getPostBySlug, getPosts, imageBuilder } from "@/lib/sanity";
import { formatDate } from "@/lib/utils";
import { PortableText } from "@portabletext/react";
import { PortableTextComponents } from "@portabletext/react";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { CopyButton } from "@/components/ui/copy-button";
import { Button } from "@/components/ui/button";
import ScrollProgress from "@/components/ui/scroll-progress";

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // fetch data
  const post = await getPostBySlug(params.slug);

  return {
    title: `${post.title} | Tech Insights by Tony Song`,
    description: post.description,
    openGraph: {
      images: [imageBuilder.image(post.mainImage!).url()],
    },
  };
}

export async function generateStaticParams() {
  const posts = await getPosts(true);
  return posts.map((post) => ({ slug: post.slug!.current! }));
}

interface CodeProps {
  value: {
    code: string;
    language?: string;
  };
}

interface InlineCodeProps {
  children: React.ReactNode;
}

interface ImageProps {
  value: SanityImageSource & {
    alt?: string;
  };
}

const components: PortableTextComponents = {
  types: {
    code: ({ value }: CodeProps) => {
      const { code, language } = value;
      return (
        <div className="relative">
          <SyntaxHighlighter
            showLineNumbers={true}
            showInlineLineNumbers={true}
            language={language === "tsx" ? "typescript" : language}
            style={atomOneDark}
            customStyle={{
              paddingTop: "2.4em",
              paddingBottom: "2.4em",
            }}
          >
            {code}
          </SyntaxHighlighter>
          <div className="absolute top-3 right-3 flex items-center space-x-2">
            <CopyButton
              className="text-zinc-500 hover:text-zinc-400"
              text={code}
            />
            <div className="text-xs text-zinc-500 pointer-events-none">
              {language}
            </div>
          </div>
        </div>
      );
    },
    image: ({ value }: ImageProps) => (
      <img
        src={imageBuilder.image(value).url()}
        alt={value.alt || " "}
        className="my-8 rounded-lg"
      />
    ),
  },
  marks: {
    code: ({ children }: InlineCodeProps) => (
      <code className="bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded break-words">
        {children}
      </code>
    ),
  },
};

export default async function Post({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug(params.slug);

  return (
    <>
      <ScrollProgress />
      <div className="pt-24 md:pt-32 pb-12 flex items-center justify-center px-6">
        <div className="max-w-2xl w-full">
          <h1 className="text-2xl md:text-4xl font-bold mb-8 text-slate-900 dark:text-slate-300">
            {post.title}
          </h1>
          <div className="text-sm text-gray-500 mb-8">
            {formatDate(post._createdAt)}
          </div>
          <div className="flex flex-wrap gap-2 mb-8">
            {post.tags!.map((tag) => (
              <Link
                href={`/blog/tags/${tag.slug!.current}`}
                key={tag._id}
                className="text-xs font-bold uppercase text-indigo-500 font-mono mb-4 leading-relaxed"
              >
                #{tag.slug!.current}
              </Link>
            ))}
          </div>
          <img
            src={imageBuilder.image(post.mainImage!).url()}
            alt={post.title}
            className="rounded-lg mb-8"
          />
          <div className="prose dark:prose-invert mb-16">
            <PortableText value={post.body!} components={components} />
          </div>
          <div className="flex justify-center">
            <Button variant="default" className="w-48" asChild>
              <Link href="/blog">Explore more posts</Link>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
