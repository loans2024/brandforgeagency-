// src/app/layout.js
import './globals.css';
import Header from '../components/Header';

export const metadata = {
  title: 'Brand Forge Agency',
  description:
    'Brand Forge Agency delivers top-notch digital solutions including social media management, graphic design, video editing, content creation, copywriting, community engagement, strategy & growth, and software engineering.',
  openGraph: {
    title: 'Brand Forge Agency - Digital Solutions',
    description:
      'Leading agency offering comprehensive digital solutions to elevate your brand.',
    url: 'https://yourdomain.com',
    siteName: 'Brand Forge Agency',
    images: [
      {
        url: 'https://yourdomain.com/og-image.jpg',
        width: 800,
        height: 600,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Brand Forge Agency - Digital Solutions',
    description:
      'Top-notch digital solutions including social media management, graphic design, video editing, and more.',
    images: ['https://yourdomain.com/twitter-image.jpg'],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body className="bg-white text-gray-900">
        <Header />
        <main className="container mx-auto p-">{children}</main>
        <footer className="bg-gray-800 text-white p-4 text-center font-poppins">
          © {new Date().getFullYear()} Brand Forge Agency. All rights reserved.
        </footer>
      </body>
    </html>
  );
}
