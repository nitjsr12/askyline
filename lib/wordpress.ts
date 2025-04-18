const WORDPRESS_API_URL = process.env.WORDPRESS_API_URL || 'https://yourdomain.com/wp-json';


export async function getPosts() {
  const res = await fetch(`${WORDPRESS_API_URL}/wp/v2/posts?_embed`);
  if (!res.ok) {
    throw new Error('Failed to fetch posts');
  }
  return res.json();
}

export async function getPostBySlug(slug: string) {
  const res = await fetch(`${WORDPRESS_API_URL}/wp/v2/posts?slug=${slug}&_embed`);
  if (!res.ok) {
    throw new Error('Failed to fetch post');
  }
  const data = await res.json();
  return data[0];
}

export async function getCategories() {
    const res = await fetch(`${WORDPRESS_API_URL}/wp/v2/categories?per_page=100`);
    if (!res.ok) {
      throw new Error('Failed to fetch categories');
    }
    return await res.json();
  }
  
  
  export async function searchPosts(query: string) {
    const res = await fetch(`${WORDPRESS_API_URL}/wp/v2/search?search=${encodeURIComponent(query)}&_embed`);
    if (!res.ok) {
      throw new Error('Failed to search posts');
    }
    return res.json();
  }
  export async function getLatestPosts(count: number = 3) {
    const res = await fetch(`${WORDPRESS_API_URL}/wp/v2/posts?_embed&per_page=${count}`);
    if (!res.ok) {
      throw new Error('Failed to fetch latest posts');
    }
    return await res.json();
  }
  