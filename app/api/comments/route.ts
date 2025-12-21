import { NextRequest, NextResponse } from 'next/server';
import { getComments, createComment } from '@/lib/blog';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const postId = searchParams.get('post');
  
  if (!postId) {
    return NextResponse.json({ error: 'Missing post ID' }, { status: 400 });
  }

  try {
    const comments = await getComments(parseInt(postId));
    // Transform to match the expected format
    const formattedComments = comments.map(comment => ({
      id: comment.id,
      author_name: comment.author_name,
      date: comment.date,
      content: { rendered: comment.content },
    }));
    return NextResponse.json(formattedComments);
  } catch (error) {
    console.error('Error fetching comments:', error);
    return NextResponse.json(
      { error: 'Failed to fetch comments' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const { postId, name, email, content } = await request.json();
    
    if (!postId || !name || !email || !content) {
      return NextResponse.json(
        { error: 'postId, name, email and content are required' },
        { status: 400 }
      );
    }

    const comment = await createComment({
      postId: parseInt(postId),
      author_name: name,
      author_email: email,
      content,
    });

    // Return in the expected format
    return NextResponse.json({
      id: comment.id,
      author_name: comment.author_name,
      date: comment.date,
      content: { rendered: comment.content },
    });
  } catch (error) {
    console.error('Error creating comment:', error);
    return NextResponse.json(
      { error: 'Failed to create comment' },
      { status: 500 }
    );
  }
}
