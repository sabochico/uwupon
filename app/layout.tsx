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
  metadataBase: new URL('https://uwupon.aweandco.chatgpt.site'),
  title: {
    default: 'uwupon | 日本発ショートフォーム音楽マーケティング',
    template: '%s | uwupon',
  },
  description:
    'uwupon is a Tokyo-based short-form music marketing studio for artists, labels, management teams, and Japan-global music releases.',
  keywords: [
    'music marketing Japan',
    'Japanese music marketing agency',
    'TikTok music campaign',
    'short-form music marketing',
    'Japan music promotion',
    'uwupon',
  ],
  authors: [{ name: 'uwupon' }],
  creator: 'uwupon',
  publisher: 'uwupon',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'ja_JP',
    alternateLocale: ['en_US'],
    url: '/',
    siteName: 'uwupon',
    title: 'uwupon | Short-Form Music Marketing for Japan',
    description:
      'A Tokyo-based music marketing studio creating short-form content systems for artists, labels, and Japan-global releases.',
    images: ['/og.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'uwupon | Short-Form Music Marketing for Japan',
    description:
      'Short-form campaign strategy, production, distribution, testing, and reporting for modern music releases.',
    images: ['/og.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
