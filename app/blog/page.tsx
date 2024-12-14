import { BlogGrid } from "@/components/blog/BlogGrid";
import { BlogHero } from "@/components/blog/BlogHero";

export default function BlogPage() {
  return (
    <main className="pt-20">
      <BlogHero />
      <BlogGrid />
    </main>
  );
}