"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Save } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { toast } from "sonner";
import { SimpleEditor } from "@/components/admin/SimpleEditor";

export default function NewBlogPostPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    slug: "",
    excerpt: "",
    content: "",
    category: "Web Development",
    tags: "",
    image: "/images/portfolio-1.jpg",
    featured: false,
    published: true,
    metaTitle: "",
    metaDescription: "",
    keywords: "",
    authorName: "Admin",
    authorEmail: "admin@askylinedigital.com",
  });

  const handleInputChange = (field: string, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    
    // Auto-generate slug from title
    if (field === "title" && !formData.slug) {
      const slug = value
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)/g, "");
      setFormData((prev) => ({ ...prev, slug }));
    }
    
    // Auto-generate meta fields if empty
    if (field === "title" && !formData.metaTitle) {
      setFormData((prev) => ({ ...prev, metaTitle: value }));
    }
    if (field === "excerpt" && !formData.metaDescription) {
      setFormData((prev) => ({ ...prev, metaDescription: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("/api/blog", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: formData.title,
          slug: formData.slug,
          excerpt: formData.excerpt,
          content: formData.content,
          category: formData.category,
          tags: formData.tags.split(",").map((tag) => tag.trim()).filter(Boolean),
          image: formData.image,
          featured: formData.featured,
          published: formData.published,
          seo: {
            metaTitle: formData.metaTitle || formData.title,
            metaDescription: formData.metaDescription || formData.excerpt,
            keywords: formData.keywords || formData.tags,
          },
          author: {
            name: formData.authorName,
            email: formData.authorEmail,
            avatar: "/images/profile.png",
          },
        }),
      });

      if (response.ok) {
        toast.success("Blog post created successfully!");
        router.push("/admin/blog");
      } else {
        const error = await response.json();
        toast.error(error.error || "Failed to create post");
      }
    } catch (error) {
      console.error("Error creating post:", error);
      toast.error("Failed to create post");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-6">
          <Link href="/admin/blog">
            <Button variant="ghost" className="text-gray-400 hover:text-white">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog Management
            </Button>
          </Link>
        </div>

        <h1 className="text-4xl font-bold mb-8">Create New Blog Post</h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="bg-gray-800 rounded-lg p-6 space-y-6">
            <h2 className="text-2xl font-semibold mb-4">Basic Information</h2>

            <div>
              <Label htmlFor="title">Title *</Label>
              <Input
                id="title"
                value={formData.title}
                onChange={(e) => handleInputChange("title", e.target.value)}
                required
                className="bg-gray-700 border-gray-600 text-white mt-1"
              />
            </div>

            <div>
              <Label htmlFor="slug">Slug *</Label>
              <Input
                id="slug"
                value={formData.slug}
                onChange={(e) => handleInputChange("slug", e.target.value)}
                required
                className="bg-gray-700 border-gray-600 text-white mt-1"
                placeholder="url-friendly-slug"
              />
            </div>

            <div>
              <Label htmlFor="excerpt">Excerpt *</Label>
              <Textarea
                id="excerpt"
                value={formData.excerpt}
                onChange={(e) => handleInputChange("excerpt", e.target.value)}
                required
                rows={3}
                className="bg-gray-700 border-gray-600 text-white mt-1"
                placeholder="Short description of the post"
              />
            </div>

            <div>
              <Label htmlFor="content">Content *</Label>
              <div className="mt-1">
                <SimpleEditor
                  value={formData.content}
                  onChange={(value) => handleInputChange("content", value)}
                  placeholder="Write your blog post content here..."
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="category">Category *</Label>
                <Input
                  id="category"
                  value={formData.category}
                  onChange={(e) => handleInputChange("category", e.target.value)}
                  required
                  className="bg-gray-700 border-gray-600 text-white mt-1"
                  placeholder="Web Development"
                />
              </div>

              <div>
                <Label htmlFor="image">Featured Image</Label>
                <Input
                  id="image"
                  value={formData.image}
                  onChange={(e) => handleInputChange("image", e.target.value)}
                  className="bg-gray-700 border-gray-600 text-white mt-1"
                  placeholder="/images/portfolio-1.jpg"
                />
              </div>
            </div>

            <div>
              <Label htmlFor="tags">Tags (comma-separated)</Label>
              <Input
                id="tags"
                value={formData.tags}
                onChange={(e) => handleInputChange("tags", e.target.value)}
                className="bg-gray-700 border-gray-600 text-white mt-1"
                placeholder="Technology, Web Development, SEO"
              />
            </div>
          </div>

          <div className="bg-gray-800 rounded-lg p-6 space-y-6">
            <h2 className="text-2xl font-semibold mb-4">SEO Settings</h2>

            <div>
              <Label htmlFor="metaTitle">Meta Title</Label>
              <Input
                id="metaTitle"
                value={formData.metaTitle}
                onChange={(e) => handleInputChange("metaTitle", e.target.value)}
                className="bg-gray-700 border-gray-600 text-white mt-1"
              />
            </div>

            <div>
              <Label htmlFor="metaDescription">Meta Description</Label>
              <Textarea
                id="metaDescription"
                value={formData.metaDescription}
                onChange={(e) => handleInputChange("metaDescription", e.target.value)}
                rows={3}
                className="bg-gray-700 border-gray-600 text-white mt-1"
              />
            </div>

            <div>
              <Label htmlFor="keywords">Keywords</Label>
              <Input
                id="keywords"
                value={formData.keywords}
                onChange={(e) => handleInputChange("keywords", e.target.value)}
                className="bg-gray-700 border-gray-600 text-white mt-1"
                placeholder="keyword1, keyword2, keyword3"
              />
            </div>
          </div>

          <div className="bg-gray-800 rounded-lg p-6 space-y-4">
            <h2 className="text-2xl font-semibold mb-4">Settings</h2>

            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="featured">Featured Post</Label>
                <p className="text-sm text-gray-400">Show this post in featured section</p>
              </div>
              <Switch
                id="featured"
                checked={formData.featured}
                onCheckedChange={(checked) => handleInputChange("featured", checked)}
              />
            </div>

            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="published">Published</Label>
                <p className="text-sm text-gray-400">Make this post visible to visitors</p>
              </div>
              <Switch
                id="published"
                checked={formData.published}
                onCheckedChange={(checked) => handleInputChange("published", checked)}
              />
            </div>
          </div>

          <div className="flex gap-4">
            <Button
              type="submit"
              disabled={loading}
              className="bg-blue-600 hover:bg-blue-700"
            >
              <Save className="w-4 h-4 mr-2" />
              {loading ? "Creating..." : "Create Post"}
            </Button>
            <Link href="/admin/blog">
              <Button type="button" variant="outline" className="border-gray-600 text-white">
                Cancel
              </Button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

