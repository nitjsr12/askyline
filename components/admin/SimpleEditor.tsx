"use client";

import { useState } from "react";
import { Bold, Italic, Underline, List, ListOrdered, Link as LinkIcon, Image as ImageIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

interface SimpleEditorProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export function SimpleEditor({ value, onChange, placeholder }: SimpleEditorProps) {
  const [showPreview, setShowPreview] = useState(false);

  const insertText = (before: string, after: string = "") => {
    const textarea = document.querySelector("textarea") as HTMLTextAreaElement;
    if (!textarea) return;

    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const selectedText = value.substring(start, end);
    const newText = value.substring(0, start) + before + selectedText + after + value.substring(end);
    
    onChange(newText);
    
    // Restore cursor position
    setTimeout(() => {
      textarea.focus();
      textarea.setSelectionRange(start + before.length, start + before.length + selectedText.length);
    }, 0);
  };

  const formatBold = () => insertText("<strong>", "</strong>");
  const formatItalic = () => insertText("<em>", "</em>");
  const formatUnderline = () => insertText("<u>", "</u>");
  const formatList = () => insertText("<ul>\n<li>", "</li>\n</ul>");
  const formatOrderedList = () => insertText("<ol>\n<li>", "</li>\n</ol>");
  const formatLink = () => {
    const url = prompt("Enter URL:");
    if (url) {
      insertText(`<a href="${url}">`, "</a>");
    }
  };
  const formatImage = () => {
    const url = prompt("Enter image URL:");
    if (url) {
      insertText(`<img src="${url}" alt="" />`, "");
    }
  };

  const formatHeading = (level: number) => {
    insertText(`<h${level}>`, `</h${level}>`);
  };

  return (
    <div className="bg-gray-800 rounded-lg border border-gray-700">
      {/* Toolbar */}
      <div className="flex flex-wrap gap-2 p-3 border-b border-gray-700 bg-gray-800">
        <div className="flex gap-1">
          <Button
            type="button"
            variant="ghost"
            size="sm"
            onClick={() => formatHeading(1)}
            className="h-8 px-2 text-gray-300 hover:text-white hover:bg-gray-700"
            title="Heading 1"
          >
            H1
          </Button>
          <Button
            type="button"
            variant="ghost"
            size="sm"
            onClick={() => formatHeading(2)}
            className="h-8 px-2 text-gray-300 hover:text-white hover:bg-gray-700"
            title="Heading 2"
          >
            H2
          </Button>
          <Button
            type="button"
            variant="ghost"
            size="sm"
            onClick={() => formatHeading(3)}
            className="h-8 px-2 text-gray-300 hover:text-white hover:bg-gray-700"
            title="Heading 3"
          >
            H3
          </Button>
        </div>
        <div className="w-px h-6 bg-gray-700" />
        <Button
          type="button"
          variant="ghost"
          size="sm"
          onClick={formatBold}
          className="h-8 px-2 text-gray-300 hover:text-white hover:bg-gray-700"
          title="Bold"
        >
          <Bold className="w-4 h-4" />
        </Button>
        <Button
          type="button"
          variant="ghost"
          size="sm"
          onClick={formatItalic}
          className="h-8 px-2 text-gray-300 hover:text-white hover:bg-gray-700"
          title="Italic"
        >
          <Italic className="w-4 h-4" />
        </Button>
        <Button
          type="button"
          variant="ghost"
          size="sm"
          onClick={formatUnderline}
          className="h-8 px-2 text-gray-300 hover:text-white hover:bg-gray-700"
          title="Underline"
        >
          <Underline className="w-4 h-4" />
        </Button>
        <div className="w-px h-6 bg-gray-700" />
        <Button
          type="button"
          variant="ghost"
          size="sm"
          onClick={formatList}
          className="h-8 px-2 text-gray-300 hover:text-white hover:bg-gray-700"
          title="Bullet List"
        >
          <List className="w-4 h-4" />
        </Button>
        <Button
          type="button"
          variant="ghost"
          size="sm"
          onClick={formatOrderedList}
          className="h-8 px-2 text-gray-300 hover:text-white hover:bg-gray-700"
          title="Numbered List"
        >
          <ListOrdered className="w-4 h-4" />
        </Button>
        <div className="w-px h-6 bg-gray-700" />
        <Button
          type="button"
          variant="ghost"
          size="sm"
          onClick={formatLink}
          className="h-8 px-2 text-gray-300 hover:text-white hover:bg-gray-700"
          title="Insert Link"
        >
          <LinkIcon className="w-4 h-4" />
        </Button>
        <Button
          type="button"
          variant="ghost"
          size="sm"
          onClick={formatImage}
          className="h-8 px-2 text-gray-300 hover:text-white hover:bg-gray-700"
          title="Insert Image"
        >
          <ImageIcon className="w-4 h-4" />
        </Button>
        <div className="flex-1" />
        <Button
          type="button"
          variant="ghost"
          size="sm"
          onClick={() => setShowPreview(!showPreview)}
          className="h-8 px-3 text-gray-300 hover:text-white hover:bg-gray-700"
        >
          {showPreview ? "Edit" : "Preview"}
        </Button>
      </div>

      {/* Editor */}
      {showPreview ? (
        <div
          className="p-4 min-h-[300px] prose prose-invert max-w-none"
          dangerouslySetInnerHTML={{ __html: value }}
        />
      ) : (
        <textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder || "Write your content here... Use HTML tags for formatting."}
          className="w-full p-4 bg-gray-800 text-white min-h-[300px] resize-y focus:outline-none focus:ring-2 focus:ring-blue-500"
          style={{ fontFamily: "monospace" }}
        />
      )}
      
      <div className="p-2 text-xs text-gray-500 border-t border-gray-700">
        Tip: Use HTML tags for formatting. Examples: &lt;strong&gt;bold&lt;/strong&gt;, &lt;em&gt;italic&lt;/em&gt;, &lt;h2&gt;heading&lt;/h2&gt;
      </div>
    </div>
  );
}

