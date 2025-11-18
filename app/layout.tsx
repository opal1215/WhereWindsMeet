import type { Metadata } from 'next';
import Script from 'next/script';
import './globals.css';
import { Navbar } from '@/components/ui/Navbar';
import { Footer } from '@/components/ui/Footer';

// SEO Metadata
export const metadata: Metadata = {
  metadataBase: new URL('https://wherewindsmeetgame.org'),
  title: {
    default: 'Where Winds Meet Guides, Builds & Tools',
    template: '%s | Where Winds Meet Guides',
  },
  description: 'In-depth Where Winds Meet guides, builds, maps, and tools for PS5 & PC players. Master combat styles, find best builds, explore the Wuxia world.',
  keywords: ['where winds meet', 'wwm guide', 'wuxia game', 'builds', 'tips', 'maps', 'where winds meet guides', 'where winds meet builds'],
  authors: [{ name: 'Where Winds Meet Guides Team' }],
  creator: 'Where Winds Meet Guides',
  publisher: 'Where Winds Meet Guides',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://wherewindsmeetgame.org',
    siteName: 'Where Winds Meet Guides',
    title: 'Where Winds Meet Guides, Builds & Tools',
    description: 'Master the Wuxia world with data-driven guides and interactive tools',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Where Winds Meet Guides',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Where Winds Meet Guides & Tools',
    description: 'Master the Wuxia world with data-driven guides',
    images: ['/twitter-image.jpg'],
  },
  verification: {
    google: 'YOUR_GOOGLE_VERIFICATION_CODE', // TODO: Replace with actual verification code
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-48x48.png', sizes: '48x48', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      { url: '/favicon-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/favicon-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
  },
  manifest: '/site.webmanifest',
  themeColor: '#D4AF37',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;700;900&family=Crimson+Text:wght@400;600;700&family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />

        {/* Google Analytics - Replace G-XXXXXXXXXX with actual tracking ID */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-XXXXXXXXXX', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
      </head>
      <body className="antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
