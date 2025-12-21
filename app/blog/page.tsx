import { getPosts, getCategories, calculateReadingTime } from '@/lib/blog';
import { BlogGrid } from '@/components/blog/BlogGrid';
import { BlogHero } from '@/components/blog/BlogHero';
import { BlogCategories } from '@/components/blog/blog-categories';
import { BlogSearch } from '@/components/blog/blog-search';
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

export default async function BlogPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string; search?: string }>;
}) {
  const resolvedSearchParams = await searchParams;
  const category = resolvedSearchParams.category;
  const search = resolvedSearchParams.search;
  
  const { posts } = await getPosts(1, 100, category, search);
  const categories = await getCategories();
  
  // Transform data to match component's expected format
  const formattedPosts = posts.map((post) => ({
    title: post.title,
    excerpt: post.excerpt,
    date: post.date,
    category: post.category,
    image: post.image,
    slug: post.slug,
    readTime: calculateReadingTime(post.content)
  }));

  // Transform categories for BlogCategories component
  const formattedCategories = categories.map((cat) => ({
    name: cat.name,
    slug: cat.slug,
  }));

  return (
    <main>
      <BlogHero/>
      <div className="container mx-auto px-6 py-12">
        <BlogSearch />
        <BlogCategories categories={formattedCategories} />
      </div>
      <BlogGrid posts={formattedPosts} />
    </main>
  );
}