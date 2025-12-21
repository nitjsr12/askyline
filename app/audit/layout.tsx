import { Metadata } from 'next';

// Force dynamic rendering - this page requires search params
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Website Audit Results - Detailed Analysis Report | Askylinedigital',
  description: 'View comprehensive website audit results including performance metrics, SEO analysis, accessibility checks, security scans, and mobile responsiveness scores.',
  keywords: 'website audit results, SEO report, performance metrics, website analysis, accessibility audit, security check',
  robots: {
    index: false, // Don't index individual audit results
    follow: true,
  },
};

export default function AuditLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

