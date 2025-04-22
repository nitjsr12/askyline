import { NextResponse } from 'next/server';

const WP_URL = process.env.WORDPRESS_API_URL!;

export async function GET(request: Request) {
  const url = new URL(request.url);
  const postId = url.searchParams.get('post');
  if (!postId) {
    return NextResponse.json({ error: 'Missing post ID' }, { status: 400 });
  }
  const wpRes = await fetch(
    `${WP_URL}/wp-json/wp/v2/comments?post=${postId}&per_page=100`
  );
  const comments = await wpRes.json();
  return NextResponse.json(comments);
}

export async function POST(request: Request) {
  const { postId, name, email, content } = await request.json();
  if (!postId || !name || !email || !content) {
    return NextResponse.json(
      { error: 'postId, name, email and content are required' },
      { status: 400 }
    );
  }
  const wpRes = await fetch(`${WP_URL}/wp-json/wp/v2/comments`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      post: postId,
      author_name: name,
      author_email: email,
      content,
    }),
  });
  const data = await wpRes.json();
  if (!wpRes.ok) {
    return NextResponse.json(data, { status: wpRes.status });
  }
  return NextResponse.json(data);
}
