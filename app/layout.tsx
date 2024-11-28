
import { AnimatePresence } from 'framer-motion';
import type { Metadata } from 'next';
import '../styles/globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageWrapper from '@/components/PageWrapper';

export const metadata: Metadata = {
  title: 'Pamakarya - Welding & Construction',
  description: 'Website resmi Pamakarya, penyedia jasa renovasi gedung dan desain interior terbaik di Indonesia.',
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    title: 'Pamakarya - Welder & Construction',
    description: 'Penyedia layanan renovasi gedung dan perkantoran profesional.',
    url: 'https://pamakarya.com',
    siteName: 'Pamakarya',
    images: [
      {
        url: '/images/hero-background.jpg',
        width: 800,
        height: 600,
        alt: 'Renovasi Gedung',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Header />
        <AnimatePresence mode="wait">
          <PageWrapper>{children}</PageWrapper>
        </AnimatePresence>
        <Footer />
      </body>
    </html>
  );
}
