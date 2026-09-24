import { BlogCard } from "./blog-card";
import { blogPosts } from "@/lib/data/blog";

export function BlogGrid() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {blogPosts.map((post) => (
        <BlogCard key={post.slug} post={post} />
      ))}
    </div>
  );
}
