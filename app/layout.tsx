import './globals.css';
import type { Metadata } from 'next';
import { Poppins, Open_Sans } from 'next/font/google';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Analytics } from '@vercel/analytics/next';
import { GA_TRACKING_ID } from '@/lib/gtag';
import Script from 'next/script';
import { SmoothScroll } from '@/components/SmoothScroll';
<meta name="google-site-verification" content="r3jko59OeBJBP-PYhP5H2AzMR66DkZBuFf3pb-OjnVU" />

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
});

const openSans = Open_Sans({ 
  subsets: ['latin'],
  variable: '--font-opensans',
});

export const metadata: Metadata = {
  title: 'Askylinedigital - Web Development & Digital Marketing Agency',
  description: 'Professional web development, app development, SEO, and digital marketing services to help your business grow.',
  keywords: 'web development, app development, digital marketing, SEO, online marketing, web design, eCommerce development',
  metadataBase: new URL('https://askylinedigital.com'),
  other: {
    'google-site-verification': 'r3jko59OeBJBP-PYhP5H2AzMR66DkZBuFf3pb-OjnVU',
  },
  openGraph: {
    title: 'Askylinedigital - Web Development & Digital Marketing Agency',
    description: 'Professional web development, app development, SEO, and digital marketing services to help your business grow.',
    url: 'https://askylinedigital.com',
    siteName: 'Askylinedigital',
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Google Tag Script */}
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
        />
        <Script
          id="gtag-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              window.gtag = gtag;
              gtag('js', new Date());
              gtag('config', '${GA_TRACKING_ID}', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
      </head>
      <body className={`${poppins.variable} ${openSans.variable} font-body`}>
        <SmoothScroll>
          <Header />
          {children}
          <Analytics />
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}