import { getPostBySlug, getPosts, getLatestPosts, getCategories, calculateReadingTime } from '@/lib/blog';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft } from 'lucide-react';
import styles from './postContent.module.css';
import SocialShare from '@/components/blog/SocialShare';
import { Metadata } from 'next';
import Comments from '@/components/Comments';
import type { BlogPost } from '@/lib/blog';

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  const featuredImage = post.image || '/images/portfolio-1.jpg';
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://askylinedigital.com';

  return {
    title: post.seo.metaTitle || post.title,
    description: post.seo.metaDescription || post.excerpt,
    keywords: post.seo.keywords,
    openGraph: {
      title: post.seo.metaTitle || post.title,
      description: post.seo.metaDescription || post.excerpt,
      type: 'article',
      images: [featuredImage],
      url: `${siteUrl}/blog/${post.slug}`,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.seo.metaTitle || post.title,
      description: post.seo.metaDescription || post.excerpt,
      images: [featuredImage],
    },
  };
}

export default async function BlogPostPage(
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return (
      <div className="bg-gray-900 text-white min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
          <Link href="/blog" className="text-blue-400 hover:text-blue-300">
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  const latestPosts = await getLatestPosts(3);
  const categories = await getCategories();
  const featuredImage = post.image || '/images/portfolio-1.jpg';
  const readingTime = calculateReadingTime(post.content);
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://askylinedigital.com';
  const postUrl = `${siteUrl}/blog/${post.slug}`;

  return (
    <article className="bg-gray-900 text-white min-h-screen transition-colors duration-300">
      {/* Banner section */}
      <div className="relative h-64 md:h-96">
        <Image
          src={featuredImage}
          alt={post.title}
          className="object-cover w-full h-full"
          fill
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        <div className="absolute top-6 left-6 z-10">
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
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row gap-12">
        {/* Primary content */}
        <div className="lg:w-2/3">
          <header className="mb-12">
            <div className="flex items-center gap-3 text-sm text-gray-400 mb-4">
              <span>
                {new Date(post.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </span>
              <span className="w-1 h-1 bg-gray-400 rounded-full" />
              <span>{readingTime} min read</span>
              <span className="w-1 h-1 bg-gray-400 rounded-full" />
              <span className="px-2 py-1 bg-gray-800 rounded text-xs">{post.category}</span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">{post.title}</h1>

            <div className="flex items-center gap-3 mt-6">
              {post.author.avatar && (
                <Image
                  src={post.author.avatar}
                  alt={post.author.name}
                  className="w-10 h-10 rounded-full object-cover"
                  width={40}
                  height={40}
                />
              )}
              <div>
                <p className="font-medium">{post.author.name}</p>
                <p className="text-sm text-gray-400">{post.author.email}</p>
              </div>
            </div>
          </header>

          <div className={`${styles.content} max-w-none prose prose-invert prose-lg`} dangerouslySetInnerHTML={{ __html: post.content }} />

          {post.tags && post.tags.length > 0 && (
            <div className="mt-8 flex flex-wrap gap-2">
              {post.tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm"
                >
                  #{tag}
                </span>
              ))}
            </div>
          )}

          <SocialShare title={post.title} url={postUrl} />

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
        <aside className="lg:w-1/3 space-y-8 lg:sticky top-24 h-fit">
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Latest Posts</h3>
            <div className="space-y-4">
              {latestPosts.map((latestPost) => (
                <Link
                  key={latestPost.id}
                  href={`/blog/${latestPost.slug}`}
                  className="block group"
                >
                  <div className="flex gap-4 items-center">
                    <div className="w-20 h-20 bg-gray-700 rounded-md overflow-hidden flex-shrink-0">
                      <Image
                        src={latestPost.image}
                        alt={latestPost.title}
                        className="object-cover w-full h-full"
                        width={80}
                        height={80}
                        loading="lazy"
                      />
                    </div>
                    <div>
                      <h4 className="font-medium group-hover:text-blue-400 transition line-clamp-2">
                        {latestPost.title}
                      </h4>
                      <p className="text-sm text-gray-400 mt-1">
                        {new Date(latestPost.date).toLocaleDateString('en-US', {
                          month: 'short',
                          day: 'numeric',
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
                  key={category.slug}
                  href={`/blog?category=${category.slug}`}
                  className="flex justify-between items-center px-3 py-2 bg-gray-700 hover:bg-gray-600 rounded transition"
                >
                  <span className="capitalize">{category.name}</span>
                  <span className="bg-gray-600 text-xs px-2 py-1 rounded-full">
                    {category.count}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </aside>
      </div>
      <Comments postId={post.id} />
    </article>
  );
}

export async function generateStaticParams() {
  const { posts } = await getPosts(1, 1000); // Get all posts for static generation
  return posts.map((post) => ({
    slug: post.slug,
  }));
}