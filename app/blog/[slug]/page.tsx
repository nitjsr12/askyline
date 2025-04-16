import { getPostBySlug, getPosts, getLatestPosts, getCategories } from '@/lib/wordpress';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import styles from './postContent.module.css';

// Define type for Post
type Post = {
  id: number;
  slug: string;
  title: { rendered: string };
  date: string;
  content: { rendered: string };
  _embedded: {
    'wp:featuredmedia': Array<{ source_url: string }>;
    author: Array<{ name: string; avatar_urls: { [key: number]: string }; description: string }>;
  };
};

// Define type for Category
type Category = {
  id: number;
  name: string;
  slug: string;
  count: number;
};

export default async function BlogPost({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug(params.slug);
  const latestPosts = await getLatestPosts(3); // Fetch 3 latest posts
  const categories = await getCategories(); // Fetch all categories

  // Extract featured image if available
  const featuredImage = post._embedded['wp:featuredmedia']?.[0]?.source_url || '/default-banner.jpg';

  // Calculate reading time
  const wordCount = post.content.rendered.split(' ').length;
  const readingTime = Math.ceil(wordCount / 200);

  return (
    <article className="bg-gray-900 dark:bg-gray-900 text-white dark:text-gray-100 min-h-screen transition-colors duration-300">
      {/* Banner Image */}
      <div className="relative w-full h-80 md:h-96">
        <img 
          src={featuredImage} 
          alt={post.title.rendered} 
          className="object-cover w-full h-full"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
        
        {/* Back Button */}
        <div className="absolute top-6 left-6">
          <Link 
            href="/blog" 
            className="flex items-center gap-2 text-white hover:text-gray-200 transition-colors bg-black/30 backdrop-blur-sm rounded-full px-4 py-2 hover:bg-black/40"
          >
            <ArrowLeft size={18} />
            <span className="text-sm font-medium">Back to Blog</span>
          </Link>
        </div>
      </div>

      {/* Main Content with Sidebar */}
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row gap-8">
        {/* Main Content */}
        <div className="lg:w-2/3">
          <header className="mb-12">
            <div className="flex items-center gap-3 text-sm text-gray-500 dark:text-gray-400 mb-4">
              <span>{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
              <span className="w-1 h-1 rounded-full bg-gray-400"></span>
              <span>{readingTime} min read</span>
            </div>
            
            <h1 
              className="text-4xl md:text-5xl font-bold mb-6 leading-tight tracking-tight"
              dangerouslySetInnerHTML={{ __html: post.title.rendered }}
            />
            
            {/* Author (if available) */}
            {post._embedded?.author?.[0] && (
              <div className="flex items-center gap-3 mt-6">
                <div className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 overflow-hidden">
                  {post._embedded.author[0].avatar_urls?.[48] && (
                    <img 
                      src={post._embedded.author[0].avatar_urls[48]} 
                      alt={post._embedded.author[0].name}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
                <div>
                  <p className="font-medium">{post._embedded.author[0].name}</p>
                  {post._embedded.author[0].description && (
                    <p className="text-sm text-gray-500 dark:text-gray-400">{post._embedded.author[0].description}</p>
                  )}
                </div>
              </div>
            )}
          </header>

          <div
            className={`${styles.content} max-w-none mx-auto`}
            dangerouslySetInnerHTML={{ __html: post.content.rendered }}
          />
          
          {/* Footer with back button */}
          <div className="mt-16 pt-8 border-t border-gray-700">
            <Link 
              href="/blog" 
              className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors group"
            >
              <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
              <span className="font-medium">Back to all articles</span>
            </Link>
          </div>
        </div>

        {/* Sidebar */}
        <div className="lg:w-1/3 space-y-8">
          {/* Latest Posts Section */}
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Latest Posts</h3>
            <div className="space-y-4">
              {latestPosts.map((post: Post) => (
                <Link 
                  key={post.id} 
                  href={`/blog/${post.slug}`}
                  className="block group"
                >
                  <div className="flex gap-3">
                    <div className="flex-shrink-0 w-16 h-16 bg-gray-700 rounded-md overflow-hidden">
                      {post._embedded?.['wp:featuredmedia']?.[0]?.source_url && (
                        <img 
                          src={post._embedded['wp:featuredmedia'][0].source_url} 
                          alt={post.title.rendered}
                          className="w-full h-full object-cover"
                        />
                      )}
                    </div>
                    <div>
                      <h4 
                        className="font-medium group-hover:text-blue-400 transition-colors"
                        dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                      />
                      <p className="text-sm text-gray-400">
                        {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Categories Section */}
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Categories</h3>
            <div className="space-y-2">
              {categories.map((category: Category) => (
                <Link
                  key={category.id}
                  href={`/blog/category/${category.slug}`}
                  className="flex justify-between items-center py-2 px-3 bg-gray-700 hover:bg-gray-600 rounded-md transition-colors"
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
  return posts.map((post: any) => ({
    slug: post.slug,
  }));
}
