import { NextRequest, NextResponse } from 'next/server';
import { getPosts, createPost, getPostById, updatePost, deletePost } from '@/lib/blog';
import type { BlogPost } from '@/lib/blog';

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const page = parseInt(searchParams.get('page') || '1');
    const perPage = parseInt(searchParams.get('perPage') || '12');
    const category = searchParams.get('category') || undefined;
    const search = searchParams.get('search') || undefined;
    const featured = searchParams.get('featured') === 'true' ? true : undefined;

    const result = await getPosts(page, perPage, category, search, featured);
    return NextResponse.json(result);
  } catch (error) {
    console.error('Error fetching posts:', error);
    return NextResponse.json(
      { error: 'Failed to fetch posts' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Basic validation
    if (!body.title || !body.slug || !body.content) {
      return NextResponse.json(
        { error: 'Title, slug, and content are required' },
        { status: 400 }
      );
    }

    const newPost = await createPost({
      slug: body.slug,
      title: body.title,
      excerpt: body.excerpt || body.content.substring(0, 150) + '...',
      content: body.content,
      author: body.author || {
        name: 'Admin',
        email: 'admin@askylinedigital.com',
        avatar: '/images/profile.png',
      },
      category: body.category || 'Uncategorized',
      tags: body.tags || [],
      image: body.image || '/images/portfolio-1.jpg',
      featured: body.featured || false,
      published: body.published !== undefined ? body.published : true,
      seo: body.seo || {
        metaTitle: body.title,
        metaDescription: body.excerpt || body.content.substring(0, 150) + '...',
        keywords: body.tags?.join(', ') || '',
      },
    });

    return NextResponse.json(newPost, { status: 201 });
  } catch (error) {
    console.error('Error creating post:', error);
    return NextResponse.json(
      { error: 'Failed to create post' },
      { status: 500 }
    );
  }
}

