import { getPosts } from "@/lib/wordpress";
import { BlogGrid } from "@/components/blog/BlogGrid";

export default async function BlogPage() {
  const wpPosts = await getPosts();

  const posts = wpPosts.map((post: any) => ({
    title: post.title.rendered,
    excerpt: post.excerpt.rendered.replace(/<[^>]+>/g, ''), // strip HTML
    date: post.date,
    category: post._embedded['wp:term']?.[0]?.[0]?.name || 'General',
    image: post._embedded['wp:featuredmedia']?.[0]?.source_url || '/fallback.jpg',
    slug: post.slug,
    readTime: Math.ceil(post.content.rendered.split(' ').length / 200), // 200 wpm read time
  }));

  return <BlogGrid posts={posts} />;
}
