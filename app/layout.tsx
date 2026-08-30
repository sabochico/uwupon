import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Pulse Matrix | Japanese Music Marketing Studio',
  description:
    'Tokyo-based short-form music marketing infrastructure for artists, labels, management teams, and international releases.',
  openGraph: {
    title: 'Pulse Matrix | Japanese Music Marketing Studio',
    description:
      'Short-form music marketing infrastructure for Japan, global releases, and the algorithmic culture around songs.',
    images: ['/og.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pulse Matrix | Japanese Music Marketing Studio',
    description:
      'Short-form music marketing infrastructure for Japan, global releases, and the algorithmic culture around songs.',
    images: ['/og.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
