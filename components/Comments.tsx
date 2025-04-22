// components/Comments.tsx
"use client";

import { useState, useEffect } from "react";

interface Comment {
  id: number;
  author_name: string;
  date: string;
  content: { rendered: string };
}

export default function Comments({ postId }: { postId: number }) {
  const [comments, setComments] = useState<Comment[]>([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [content, setContent] = useState("");
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  // 1️⃣ Fetch comments on mount or when postId changes
  useEffect(() => {
    fetch(`/api/comments?post=${postId}`)
      .then((res) => res.json())
      .then((data) => setComments(data))
      .catch(() => setComments([]));
  }, [postId]);

  // 2️⃣ Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    const res = await fetch("/api/comments", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ postId, name, email, content }),
    });

    if (res.ok) {
      setStatus("success");
      setName("");
      setEmail("");
      setContent("");
      // reload
      const updated = await fetch(`/api/comments?post=${postId}`).then((r) =>
        r.json()
      );
      setComments(updated);
    } else {
      setStatus("error");
    }
  };

  return (
    <div className="max-w-3xl mx-auto py-12 px-4">
      {/* ————— Comments List ————— */}
      <h2 className="text-2xl font-semibold text-white mb-6">Comments</h2>
      {comments.length > 0 ? (
        comments.map((c) => (
          <div key={c.id} className="mb-8 border-b border-gray-700 pb-4">
            <p className="text-sm text-gray-400">
              {c.author_name} on{" "}
              {new Date(c.date).toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
                year: "numeric",
              })}
            </p>
            <div
              className="prose prose-invert mt-2"
              dangerouslySetInnerHTML={{ __html: c.content.rendered }}
            />
          </div>
        ))
      ) : (
        <p className="text-gray-400">No comments yet—be the first!</p>
      )}

      {/* ————— Comment Form ————— */}
      <form onSubmit={handleSubmit} className="mt-12 space-y-4">
        <h3 className="text-xl font-semibold text-white">Leave a Comment</h3>
        <input
          type="text"
          placeholder="Name"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-2 bg-gray-800 border border-gray-700 rounded"
        />
        <input
          type="email"
          placeholder="Email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 bg-gray-800 border border-gray-700 rounded"
        />
        <textarea
          placeholder="Your comment…"
          rows={4}
          required
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="w-full p-2 bg-gray-800 border border-gray-700 rounded"
        />
        <button
          type="submit"
          disabled={status === "sending"}
          className="bg-blue-600 hover:bg-blue-500 px-4 py-2 rounded"
        >
          {status === "sending" ? "Posting…" : "Post Comment"}
        </button>
        {status === "success" && (
          <p className="text-green-400">Comment posted!</p>
        )}
        {status === "error" && (
          <p className="text-red-400">Oops, please try again.</p>
        )}
      </form>
    </div>
  );
}
