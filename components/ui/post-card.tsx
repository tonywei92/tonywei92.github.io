import { MoveRight } from "lucide-react";
import { cn, formatDate } from "@/lib/utils";

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
  if (compact) {
    console.log("test");
  } else {
    console.log("not compact");
  }
  return (
    <div
      className={cn(
        "flex justify-between space-y-2",
        compact ? "flex-col" : "flex-row md:flex-row md:space-x-4 md:space-y-0",
        className
      )}
    >
      <div className="text-sm text-zinc-500 pr-16 font-semibold">
        {formatDate(date)}
      </div>
      <div className="flex-1">
        <h3 className="text-lg font-bold mb-2">{title}</h3>
        <div className="flex space-x-2 text-xs font-bold uppercase text-indigo-500 font-mono mb-4">
          {tags.map((tag) => (
            <div key={tag}>{tag}</div>
          ))}
        </div>
        <a
          href={href}
          className="text-xs text-indigo-500 font-bold inline-flex items-center space-x-2"
        >
          <span>Read more</span> <MoveRight className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
}
