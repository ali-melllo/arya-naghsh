import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { blogPosts } from "@/lib/data/blog";
import { BlogCard } from "@/components/blog/blog-card";
import { LinkButton } from "@/components/ui/button";

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) return {};
  return { title: post.title, description: post.excerpt };
}

export default function BlogDetailPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) notFound();

  const related = blogPosts.filter((p) => p.slug !== post.slug && p.category === post.category).slice(0, 2);

  return (
    <article className="py-14">
      <div className="container mx-auto max-w-[720px]">
        <div className="mb-3 text-xs font-bold text-accent">{post.category}</div>
        <h1 className="mb-4 text-3xl font-extrabold leading-snug tracking-tight sm:text-4xl">
          {post.title}
        </h1>
        <div className="mb-10 flex gap-3 text-sm text-ink-soft">
          <span>{post.date}</span>
          <span>·</span>
          <span>{post.readingTime}</span>
        </div>
        <div className="mb-10 aspect-[16/9] rounded-xl border border-border bg-gradient-to-br from-accent/10 to-surface" />
        <div className="space-y-5 text-[1.02rem] leading-8">
          {post.content.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </div>

      {related.length > 0 && (
        <div className="container mx-auto mt-16 max-w-[720px] border-t border-border pt-12">
          <h2 className="mb-6 text-lg font-extrabold">مطالب مرتبط</h2>
          <div className="grid gap-6 sm:grid-cols-2">
            {related.map((r) => (
              <BlogCard key={r.slug} post={r} />
            ))}
          </div>
        </div>
      )}

      <div className="container mx-auto mt-14 max-w-[720px] text-center">
        <LinkButton href="/contact">درخواست مشاوره برای پروژه چاپی شما</LinkButton>
      </div>
    </article>
  );
}
