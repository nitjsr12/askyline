'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function BlogCategories({ categories }: { categories: Array<{ id: number; name: string; slug: string }> }) {
  const pathname = usePathname();
  
  return (
    <div className="flex flex-wrap gap-2 justify-center mb-8">
      <Link 
        href="/blog"
        className={`px-3 py-1 rounded-full text-sm ${pathname === '/blog' ? 'bg-blue-600 text-white' : 'bg-gray-800 text-gray-300 hover:bg-gray-700'}`}
      >
        All
      </Link>
      {categories.map((category) => (
        <Link
          key={category.id}
          href={`/blog/category/${category.slug}`}
          className={`px-3 py-1 rounded-full text-sm ${pathname.includes(category.slug) ? 'bg-blue-600 text-white' : 'bg-gray-800 text-gray-300 hover:bg-gray-700'}`}
        >
          {category.name}
        </Link>
      ))}
    </div>
  );
}