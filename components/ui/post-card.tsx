import { MoveRight } from "lucide-react";
import { cn, formatDate } from "@/lib/utils";
import Link from "next/link";

interface Props {
  title: string;
  href: string;
  className?: string;
  date: string;
  tags: string[];
  compact?: boolean;
}

export function PostCard({
  title,
  href,
  className,
  date,
  tags,
  compact,
}: Props) {
  return (
    <div
      className={cn(
        "flex justify-between space-y-2",
        compact ? "flex-col" : "flex-row md:flex-row md:space-x-4 md:space-y-0",
        className
      )}
    >
      <div className="text-sm text-zinc-500 font-semibold w-[10rem]">
        {formatDate(date)}
      </div>
      <div className="flex-1">
        <Link href={href} className="text-lg font-bold mb-2 block">
          {title}
        </Link>
        <div className="text-xs font-bold uppercase text-indigo-500 font-mono mb-4 leading-relaxed">
          {tags.map((tag) => (
            <Link key={tag} href={`/blog/tags/${tag}`}>
              <span>#{tag}</span>{" "}
            </Link>
          ))}
        </div>
        <Link
          href={href}
          className="text-xs text-indigo-500 font-bold inline-flex items-center space-x-2"
        >
          <span>Read more</span> <MoveRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
