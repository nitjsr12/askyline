'use client';

import { useState } from 'react';
import { Copy, Linkedin, Twitter } from 'lucide-react';

export default function SocialShare({ title, url }: { title: string; url: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const encodedTitle = encodeURIComponent(title);
  const encodedURL = encodeURIComponent(url);

  return (
    <div className="flex flex-wrap gap-4 mt-8">
      {/* Share on Twitter */}
      <a
        href={`https://twitter.com/intent/tweet?url=${encodedURL}&text=${encodedTitle}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 px-4 py-2 bg-[#1DA1F2]/10 hover:bg-[#1DA1F2]/20 text-[#1DA1F2] rounded-full transition"
      >
        <Twitter size={20} />
        <span className="text-sm font-medium">Share on X</span>
      </a>

      {/* Share on LinkedIn */}
      <a
        href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodedURL}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 px-4 py-2 bg-[#0A66C2]/10 hover:bg-[#0A66C2]/20 text-[#0A66C2] rounded-full transition"
      >
        <Linkedin size={20} />
        <span className="text-sm font-medium">Share on LinkedIn</span>
      </a>

      {/* Copy Link */}
      <button
        onClick={handleCopy}
        className="flex items-center gap-2 px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-full transition relative"
      >
        <Copy size={20} />
        <span className="text-sm font-medium">{copied ? 'Copied!' : 'Copy Link'}</span>

        {/* Tooltip */}
        {copied && (
          <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs text-green-400 bg-gray-800 px-2 py-1 rounded shadow">
            Link copied!
          </span>
        )}
      </button>
    </div>
  );
}
