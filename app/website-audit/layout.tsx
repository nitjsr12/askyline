import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Free Website Audit Tool - Comprehensive SEO & Performance Analysis | Askylinedigital',
  description: 'Get a free comprehensive website audit with performance, SEO, accessibility, security, and mobile analysis. Identify issues and improve your website\'s ranking and user experience.',
  keywords: 'website audit, SEO audit, performance analysis, website speed test, accessibility check, security scan, mobile responsiveness, free website analysis',
  openGraph: {
    title: 'Free Website Audit Tool - Comprehensive Analysis | Askylinedigital',
    description: 'Get a free comprehensive website audit with performance, SEO, accessibility, security, and mobile analysis.',
    url: 'https://askylinedigital.com/website-audit',
    siteName: 'Askylinedigital',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free Website Audit Tool - Comprehensive Analysis',
    description: 'Get a free comprehensive website audit with performance, SEO, accessibility, security, and mobile analysis.',
  },
  alternates: {
    canonical: 'https://askylinedigital.com/website-audit',
  },
};

export default function WebsiteAuditLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

