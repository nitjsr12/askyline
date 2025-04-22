import { getPosts } from '@/lib/wordpress';
import { BlogGrid } from '@/components/blog/BlogGrid';
import { BlogHero } from '@/components/blog/BlogHero';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Latest Blogs - Askylinedigital',
  description: 'Explore the latest blogs and articles on digital transformation, technology solutions, and more.',
  keywords: 'blogs, articles, digital transformation, technology solutions, latest news, insights, industry trends',
  openGraph: {
    title: 'Latest Blogs - Askylinedigital',
    description: 'Explore the latest blogs and articles on digital transformation, technology solutions, and more.',
    url: 'https://askylinedigital.com/blog',
    siteName: 'Askylinedigital',
  }
};
export default async function BlogPage() {
  const posts = await getPosts();
  
  // Transform WordPress data to match your component's expected format
  const formattedPosts = posts.map((post: any) => ({
    title: post.title.rendered,
    excerpt: post.excerpt.rendered.replace(/<[^>]*>?/gm, '').substring(0, 150) + '...',
    date: post.date,
    category: post._embedded['wp:term'][0][0]?.name || 'Uncategorized',
    image: post._embedded['wp:featuredmedia']?.[0]?.source_url || '/default-blog-image.jpg',
    slug: post.slug,
    readTime: Math.ceil(post.content.rendered.split(' ').length / 200) // ~200 words per minute
  }));

  return (
    <main>
      <BlogHero/>
      <BlogGrid posts={formattedPosts} />
    </main>
  );
}