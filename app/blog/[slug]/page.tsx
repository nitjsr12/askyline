import { getPostBySlug, getPosts, getLatestPosts, getCategories } from '@/lib/wordpress';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import styles from './postContent.module.css';
import SocialShare from '@/components/blog/SocialShare';
import { Metadata } from 'next';

// Type declarations
interface Post {
  id: number;
  slug: string;
  title: {
    rendered: string;
  };
  date: string;
  content: {
    rendered: string;
  };
  excerpt?: {
    rendered: string;
  };
  _embedded: {
    'wp:featuredmedia'?: {
      source_url: string;
    }[];
    author?: {
      name: string;
      description?: string;
      avatar_urls?: {
        '48': string;
      };
    }[];
  };
}

interface Category {
  id: number;
  name: string;
  slug: string;
  count: number;
}

// Proper typing for Next.js 15 dynamic routes
type PageParams = {
  params: { slug: string };
  searchParams?: Record<string, string | string[] | undefined>;
};

export async function generateMetadata({ params }: PageParams): Promise<Metadata> {
  // Properly await the params before using
  const { slug } = await Promise.resolve(params);
  const post = await getPostBySlug(slug);
  const featuredImage = post._embedded['wp:featuredmedia']?.[0]?.source_url || '/default-banner.jpg';

  return {
    title: post.title.rendered,
    description: post.excerpt?.rendered?.replace(/<[^>]+>/g, '') || '',
    openGraph: {
      title: post.title.rendered,
      description: post.excerpt?.rendered?.replace(/<[^>]+>/g, '') || '',
      type: 'article',
      images: [featuredImage],
      url: `${process.env.NEXT_PUBLIC_SITE_URL}/blog/${post.slug}`,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title.rendered,
      description: post.excerpt?.rendered?.replace(/<[^>]+>/g, '') || '',
      images: [featuredImage],
    },
  };
}

export default async function BlogPostPage({ params }: PageParams) {
  // Properly await the params before using
  const { slug } = await Promise.resolve(params);
  const post = await getPostBySlug(slug);
  const latestPosts = await getLatestPosts(3);
  const categories = await getCategories();

  const featuredImage = post._embedded['wp:featuredmedia']?.[0]?.source_url || '/default-banner.jpg';
  const wordCount = post.content.rendered.split(/\s+/).length;
  const readingTime = Math.ceil(wordCount / 200);
  const postUrl = `${process.env.NEXT_PUBLIC_SITE_URL}/blog/${post.slug}`;

  return (
    <article className="bg-gray-900 text-white min-h-screen transition-colors duration-300">
      {/* Banner section */}
      <div className="relative w-full h-80 md:h-96">
        <img 
          src={featuredImage} 
          alt={post.title.rendered} 
          className="object-cover w-full h-full"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        <div className="absolute top-6 left-6">
          <Link 
            href="/blog" 
            className="flex items-center gap-2 text-white hover:text-gray-200 transition bg-black/30 px-4 py-2 rounded-full"
          >
            <ArrowLeft size={18} />
            <span className="text-sm font-medium">Back to Blog</span>
          </Link>
        </div>
      </div>

      {/* Main content area */}
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row gap-8">
        {/* Primary content */}
        <div className="lg:w-2/3">
          <header className="mb-12">
            <div className="flex items-center gap-3 text-sm text-gray-400 mb-4">
              <span>
                {new Date(post.date).toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </span>
              <span className="w-1 h-1 bg-gray-400 rounded-full" />
              <span>{readingTime} min read</span>
            </div>
            <h1 className="text-4xl font-bold mb-6" dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
            
            {post._embedded?.author?.[0] && (
              <div className="flex items-center gap-3 mt-6">
                <img 
                  src={post._embedded.author[0].avatar_urls?.['48']} 
                  alt={post._embedded.author[0].name} 
                  className="w-10 h-10 rounded-full object-cover" 
                  width={40}
                  height={40}
                />
                <div>
                  <p className="font-medium">{post._embedded.author[0].name}</p>
                  {post._embedded.author[0].description && (
                    <p className="text-sm text-gray-400">
                      {post._embedded.author[0].description}
                    </p>
                  )}
                </div>
              </div>
            )}
          </header>

          <div className={`${styles.content} max-w-none`} dangerouslySetInnerHTML={{ __html: post.content.rendered }} />

          <SocialShare title={post.title.rendered} url={postUrl} />

          <div className="mt-16 pt-8 border-t border-gray-700">
            <Link 
              href="/blog" 
              className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition"
            >
              <ArrowLeft size={18} />
              <span>Back to all articles</span>
            </Link>
          </div>
        </div>

        {/* Sidebar */}
        <div className="lg:w-1/3 space-y-8">
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Latest Posts</h3>
            <div className="space-y-4">
              {latestPosts.map((post) => (
                <Link 
                  key={post.id} 
                  href={`/blog/${post.slug}`} 
                  className="block group"
                >
                  <div className="flex gap-3">
                    <div className="w-16 h-16 bg-gray-700 rounded overflow-hidden">
                      <img 
                        src={post._embedded['wp:featuredmedia']?.[0]?.source_url || ''} 
                        alt={post.title.rendered} 
                        className="object-cover w-full h-full"
                        loading="lazy"
                        width={64}
                        height={64}
                      />
                    </div>
                    <div>
                      <h4 
                        className="font-medium group-hover:text-blue-400 transition" 
                        dangerouslySetInnerHTML={{ __html: post.title.rendered }} 
                      />
                      <p className="text-sm text-gray-400">
                        {new Date(post.date).toLocaleDateString('en-US', { 
                          month: 'short', 
                          day: 'numeric' 
                        })}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Categories</h3>
            <div className="space-y-2">
              {categories.map((category) => (
                <Link
                  key={category.id}
                  href={`/blog/category/${category.slug}`}
                  className="flex justify-between items-center px-3 py-2 bg-gray-700 hover:bg-gray-600 rounded transition"
                >
                  <span>{category.name}</span>
                  <span className="bg-gray-600 text-xs px-2 py-1 rounded-full">
                    {category.count}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

export async function generateStaticParams() {
  const posts = await getPosts();
  return posts.map((post) => ({ 
    slug: post.slug 
  }));
}