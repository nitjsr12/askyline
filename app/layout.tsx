import './globals.css';
import type { Metadata } from 'next';
import { Poppins, Open_Sans } from 'next/font/google';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Analytics } from '@vercel/analytics/next';

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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${poppins.variable} ${openSans.variable} font-body`}>
        <Header />
        {children}
        <Analytics />
        <Footer />
      </body>
    </html>
  );
}