"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

// Dynamically import ReactQuill to avoid SSR issues
const ReactQuill = dynamic(
  async () => {
    const { default: RQ } = await import("react-quill");
    return { default: RQ };
  },
  { 
    ssr: false,
    loading: () => <div className="h-64 bg-gray-800 rounded animate-pulse" />
  }
);

interface QuillEditorProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export function QuillEditor({ value, onChange, placeholder }: QuillEditorProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    // Load Quill CSS dynamically
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://cdn.quilljs.com/1.3.6/quill.snow.css";
    document.head.appendChild(link);

    return () => {
      // Cleanup
      const existingLink = document.head.querySelector(`link[href="${link.href}"]`);
      if (existingLink) {
        document.head.removeChild(existingLink);
      }
    };
  }, []);

  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, false] }],
      ["bold", "italic", "underline", "strike"],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link", "image"],
      ["clean"],
    ],
  };

  if (!mounted) {
    return <div className="h-64 bg-gray-800 rounded animate-pulse" />;
  }

  return (
    <div className="bg-gray-700 text-white">
      <ReactQuill
        theme="snow"
        value={value}
        onChange={onChange}
        modules={modules}
        placeholder={placeholder}
        className="bg-gray-800"
      />
      <style jsx global>{`
        .ql-container {
          background-color: #1f2937;
          color: white;
          min-height: 200px;
        }
        .ql-editor {
          color: white;
        }
        .ql-toolbar {
          background-color: #374151;
          border-top-left-radius: 0.5rem;
          border-top-right-radius: 0.5rem;
        }
        .ql-container {
          border-bottom-left-radius: 0.5rem;
          border-bottom-right-radius: 0.5rem;
        }
        .ql-stroke {
          stroke: #9ca3af;
        }
        .ql-fill {
          fill: #9ca3af;
        }
        .ql-picker-label {
          color: #9ca3af;
        }
        .ql-picker-options {
          background-color: #374151;
          color: white;
        }
      `}</style>
    </div>
  );
}

