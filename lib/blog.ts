import { promises as fs } from 'fs';
import path from 'path';

export interface BlogPost {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: {
    name: string;
    email: string;
    avatar?: string;
  };
  date: string;
  updatedAt: string;
  category: string;
  tags: string[];
  image: string;
  featured: boolean;
  published: boolean;
  seo: {
    metaTitle: string;
    metaDescription: string;
    keywords: string;
  };
}

export interface Comment {
  id: number;
  postId: number;
  author_name: string;
  author_email: string;
  content: string;
  date: string;
  approved: boolean;
}

const DATA_DIR = path.join(process.cwd(), 'lib', 'data');
const POSTS_FILE = path.join(DATA_DIR, 'blog-posts.json');
const COMMENTS_FILE = path.join(DATA_DIR, 'comments.json');

// Helper function to read JSON file
async function readJsonFile<T>(filePath: string): Promise<T> {
  try {
    const fileContents = await fs.readFile(filePath, 'utf8');
    return JSON.parse(fileContents) as T;
  } catch (error) {
    console.error(`Error reading file ${filePath}:`, error);
    return [] as unknown as T;
  }
}

// Helper function to write JSON file
async function writeJsonFile<T>(filePath: string, data: T): Promise<void> {
  try {
    await fs.writeFile(filePath, JSON.stringify(data, null, 2), 'utf8');
  } catch (error) {
    console.error(`Error writing file ${filePath}:`, error);
    throw error;
  }
}

// Get all blog posts
export async function getPosts(
  page: number = 1,
  perPage: number = 12,
  category?: string,
  search?: string,
  featured?: boolean
): Promise<{ posts: BlogPost[]; totalPages: number; totalPosts: number }> {
  let posts = await readJsonFile<BlogPost[]>(POSTS_FILE);

  // Filter by published status
  posts = posts.filter(post => post.published);

  // Filter by category
  if (category) {
    posts = posts.filter(post => 
      post.category.toLowerCase() === category.toLowerCase()
    );
  }

  // Filter by search query
  if (search) {
    const searchLower = search.toLowerCase();
    posts = posts.filter(post =>
      post.title.toLowerCase().includes(searchLower) ||
      post.excerpt.toLowerCase().includes(searchLower) ||
      post.content.toLowerCase().includes(searchLower) ||
      post.tags.some(tag => tag.toLowerCase().includes(searchLower))
    );
  }

  // Filter by featured
  if (featured !== undefined) {
    posts = posts.filter(post => post.featured === featured);
  }

  // Sort by date (newest first)
  posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  const totalPosts = posts.length;
  const totalPages = Math.ceil(totalPosts / perPage);

  // Paginate
  const startIndex = (page - 1) * perPage;
  const endIndex = startIndex + perPage;
  const paginatedPosts = posts.slice(startIndex, endIndex);

  return {
    posts: paginatedPosts,
    totalPages,
    totalPosts,
  };
}

// Get post by slug
export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  const posts = await readJsonFile<BlogPost[]>(POSTS_FILE);
  const post = posts.find(p => p.slug === slug && p.published);
  return post || null;
}

// Get post by ID
export async function getPostById(id: number): Promise<BlogPost | null> {
  const posts = await readJsonFile<BlogPost[]>(POSTS_FILE);
  const post = posts.find(p => p.id === id);
  return post || null;
}

// Get latest posts
export async function getLatestPosts(count: number = 3): Promise<BlogPost[]> {
  const posts = await readJsonFile<BlogPost[]>(POSTS_FILE);
  return posts
    .filter(post => post.published)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, count);
}

// Get categories
export async function getCategories(): Promise<Array<{ name: string; slug: string; count: number }>> {
  const posts = await readJsonFile<BlogPost[]>(POSTS_FILE);
  const publishedPosts = posts.filter(post => post.published);
  
  const categoryMap = new Map<string, number>();
  publishedPosts.forEach(post => {
    const count = categoryMap.get(post.category) || 0;
    categoryMap.set(post.category, count + 1);
  });

  return Array.from(categoryMap.entries()).map(([name, count]) => ({
    name,
    slug: name.toLowerCase().replace(/\s+/g, '-'),
    count,
  })).sort((a, b) => b.count - a.count);
}

// Get posts by category
export async function getPostsByCategory(
  category: string,
  page: number = 1,
  perPage: number = 12
): Promise<{ posts: BlogPost[]; totalPages: number; totalPosts: number }> {
  return getPosts(page, perPage, category);
}

// Search posts
export async function searchPosts(
  query: string,
  page: number = 1,
  perPage: number = 12
): Promise<{ posts: BlogPost[]; totalPages: number; totalPosts: number }> {
  return getPosts(page, perPage, undefined, query);
}

// Get related posts
export async function getRelatedPosts(
  postId: number,
  category: string,
  count: number = 3
): Promise<BlogPost[]> {
  const posts = await readJsonFile<BlogPost[]>(POSTS_FILE);
  return posts
    .filter(post => 
      post.published && 
      post.id !== postId && 
      post.category === category
    )
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, count);
}

// Create new post
export async function createPost(post: Omit<BlogPost, 'id' | 'date' | 'updatedAt'>): Promise<BlogPost> {
  const posts = await readJsonFile<BlogPost[]>(POSTS_FILE);
  const newId = posts.length > 0 ? Math.max(...posts.map(p => p.id)) + 1 : 1;
  const now = new Date().toISOString().split('T')[0];
  
  const newPost: BlogPost = {
    ...post,
    id: newId,
    date: now,
    updatedAt: now,
  };

  posts.push(newPost);
  await writeJsonFile(POSTS_FILE, posts);
  return newPost;
}

// Update post
export async function updatePost(id: number, updates: Partial<BlogPost>): Promise<BlogPost | null> {
  const posts = await readJsonFile<BlogPost[]>(POSTS_FILE);
  const index = posts.findIndex(p => p.id === id);
  
  if (index === -1) {
    return null;
  }

  posts[index] = {
    ...posts[index],
    ...updates,
    updatedAt: new Date().toISOString().split('T')[0],
  };

  await writeJsonFile(POSTS_FILE, posts);
  return posts[index];
}

// Delete post
export async function deletePost(id: number): Promise<boolean> {
  const posts = await readJsonFile<BlogPost[]>(POSTS_FILE);
  const filteredPosts = posts.filter(p => p.id !== id);
  
  if (filteredPosts.length === posts.length) {
    return false; // Post not found
  }

  await writeJsonFile(POSTS_FILE, filteredPosts);
  return true;
}

// Comments functions
export async function getComments(postId: number): Promise<Comment[]> {
  const comments = await readJsonFile<Comment[]>(COMMENTS_FILE);
  return comments.filter(c => c.postId === postId && c.approved);
}

export async function createComment(comment: Omit<Comment, 'id' | 'date' | 'approved'>): Promise<Comment> {
  const comments = await readJsonFile<Comment[]>(COMMENTS_FILE);
  const newId = comments.length > 0 ? Math.max(...comments.map(c => c.id)) + 1 : 1;
  const now = new Date().toISOString();
  
  const newComment: Comment = {
    ...comment,
    id: newId,
    date: now,
    approved: true, // Auto-approve for now, can be changed to false for moderation
  };

  comments.push(newComment);
  await writeJsonFile(COMMENTS_FILE, comments);
  return newComment;
}

// Calculate reading time
export function calculateReadingTime(content: string): number {
  const wordsPerMinute = 200;
  const text = content.replace(/<[^>]*>/g, ''); // Remove HTML tags
  const wordCount = text.split(/\s+/).length;
  return Math.ceil(wordCount / wordsPerMinute);
}

