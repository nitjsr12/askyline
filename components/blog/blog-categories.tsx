'use client';

import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';

export function BlogCategories({ categories }: { categories: Array<{ id?: number; name: string; slug: string }> }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentCategory = searchParams.get('category');
  
  return (
    <div className="flex flex-wrap gap-2 justify-center mb-8">
      <Link 
        href="/blog"
        className={`px-3 py-1 rounded-full text-sm transition-colors ${!currentCategory ? 'bg-blue-600 text-white' : 'bg-gray-800 text-gray-300 hover:bg-gray-700'}`}
      >
        All
      </Link>
      {categories.map((category) => (
        <Link
          key={category.slug}
          href={`/blog?category=${category.slug}`}
          className={`px-3 py-1 rounded-full text-sm transition-colors ${currentCategory === category.slug ? 'bg-blue-600 text-white' : 'bg-gray-800 text-gray-300 hover:bg-gray-700'}`}
        >
          {category.name}
        </Link>
      ))}
    </div>
  );
}