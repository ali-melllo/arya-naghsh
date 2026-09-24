import type { Metadata } from "next";
import { BlogGrid } from "@/components/blog/blog-grid";

export const metadata: Metadata = {
  title: "مجله آریا نقش",
  description: "دانش و تجربه‌هایی درباره چاپ، طراحی، بسته‌بندی و هویت بصری.",
};

export default function BlogPage() {
  return (
    <div className="container py-14">
      <div className="mb-11 max-w-xl">
        <h1 className="mb-3 text-3xl font-extrabold tracking-tight">مجله آریا نقش</h1>
        <p className="text-ink-soft">دانش و تجربه‌هایی درباره چاپ، طراحی، بسته‌بندی و هویت بصری.</p>
      </div>
      <BlogGrid />
    </div>
  );
}
