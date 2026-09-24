import Link from "next/link";
import type { BlogPost } from "@/types";

export function BlogCard({ post }: { post: BlogPost }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group block overflow-hidden rounded-xl border border-border bg-surface"
    >
      <div className="aspect-[4/3] bg-gradient-to-br from-accent/10 to-surface" />
      <div className="p-5">
        <div className="mb-1.5 text-xs font-bold text-accent">{post.category}</div>
        <h3 className="mb-2 text-base font-bold leading-snug line-clamp-2">{post.title}</h3>
        <p className="mb-3 text-sm text-ink-soft line-clamp-2">{post.excerpt}</p>
        <div className="flex gap-3 text-xs text-ink-soft">
          <span>{post.date}</span>
          <span>·</span>
          <span>{post.readingTime}</span>
        </div>
      </div>
    </Link>
  );
}
