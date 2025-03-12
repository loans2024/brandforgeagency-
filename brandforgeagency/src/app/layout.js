// src/app/layout.js
import { Playfair_Display } from 'next/font/google';
import './globals.css';
import Header from '../components/Header';

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '700'], // or whichever weights you need
});

export const metadata = {
  title: 'Brand Forge Agency',
  description:
    'Brand Forge Agency delivers top-notch digital solutions including social media management, graphic design, video editing, content creation, copywriting, community engagement, strategy & growth, and software engineering.',
  openGraph: {
    title: 'Brand Forge Agency - Digital Solutions',
    description:
      'Leading agency offering comprehensive digital solutions to elevate your brand.',
    url: 'https://brandforgeagency.netlify.app/',
    siteName: 'Brand Forge Agency',
    images: [
      {
        url: 'https://brandforgeagency.netlify.app/og-image.jpg',
        width: 800,
        height: 600,
      },
    ],
    locale: 'en_US',
    alternateLocales: ['en_GB', 'en_CA', 'fr_CA'], // UK, Canada, French Canada
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Brand Forge Agency - Digital Solutions',
    description:
      'Top-notch digital solutions including social media management, graphic design, video editing, and more.',
    images: ['https://brandforgeagency.netlify.app/twitter-image.jpg'],
  },
  icons: {
    icon: '/favicon.ico', // ✅ Added favicon support
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* ✅ Add Favicon */}
        <link rel="icon" type="image/png" href="/n.png" sizes="32x32" />
        <link rel="apple-touch-icon" href="/n.png" />
        <meta name="theme-color" content="#000000" />
      </head>
      <body className="bg-white text-gray-900">
        <Header />
        <main className="w-full">{children}</main>
        <footer className={`${playfair.className} bg-gradient-to-r from-orange-200 via-stone-800 to-neutral-800 text-white p-4 font-bold text-center`}>
          © {new Date().getFullYear()} Brand Forge Agency. All rights reserved
        </footer>
      </body>
    </html>
  );
}

