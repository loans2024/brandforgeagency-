import { Playfair_Display } from "next/font/google";
import Link from "next/link";
import Image from "next/image";
import ServiceCards from "../../components/ServiceCards"; // Import directly

export const metadata = {
  title: 'Brand Forge Agency - Digital Services',
  description:
    'Discover innovative digital solutions including social media management, graphic design, copy writing, reels creation, content creation, community engagement, strategy & growth, and software engineering.',
  openGraph: {
    title: 'Brand Forge Agency - Digital Services',
    description:
      'Elevate your brand with our cutting-edge digital services that drive growth and inspire creativity.',
    url: 'https://brandforgeagency.netlify.app/services',
    images: [
      {
        url: 'https://brandforgeagency.netlify.app/og-services.jpg',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Brand Forge Agency - Digital Services',
    description:
      'Elevate your brand with our innovative digital solutions.',
    images: ['https://brandforgeagency.netlify.app/twitter-services.jpg'],
  },
};

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['900', '900'],
});

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center w-screen"
        style={{ backgroundImage: 'url(/services-hero.jpg)' }}
      >
        <div className="bg-gradient-to-r from-stone-800 via-black to-stone-500 w-screen h-full py-20">
          <div className="w-screen mx-auto px-4 text-center">
            <h1 className={`${playfair.className} text-5xl md:text-7xl text-white font-bold`}>
              Our Digital Services
            </h1>
            <p className={`${playfair.className} mt-6 text-xl text-white max-w-2xl mx-auto`}>
              Experience innovative digital solutions that empower your brand.
            </p>
          </div>
        </div>
      </section>

      {/* Services Cards Section */}
      <section className="py-3 bg-white w-screen">
        <ServiceCards />
      </section>

      {/* Blog Section */}
      <section className="py-16 bg-stone-500 w-screen">
        <div className="w-screen mx-auto px-4 text-center">
          <h2 className={`${playfair.className} text-4xl text-white mb-8`}>
            Explore Our Blog
          </h2>
          <p className="text-lg text-black font-[poppins]">
            Stay updated with the latest insights, trends, and strategies in the digital world. Our blog covers expert tips, industry news, and creative inspiration to help you grow.
          </p>
          <div className="mt-8">
            <Link
              href="/#blog"
              className={`${playfair.className} inline-block bg-stone-700 text-white px-8 py-3 rounded-md font-bold hover:bg-neutral-700 transition`}
            >
              Read Our Blog
            </Link>
          </div>
        </div>
      </section>

      {/* Additional Services Section */}
      <section className="py-16 bg-white w-screen">
        <div className="w-screen mx-auto px-4 text-center">
          <h2 className={`${playfair.className} text-4xl text-black mb-8`}>
            Additional Digital Services
          </h2>
          <p className="text-lg text-black font-[poppins]">
            Beyond our core services, we offer consulting, digital marketing strategy, and more to help your business thrive.
          </p>
          <div className="mt-8">
            <Link
              href="/#contact"
              className={`${playfair.className} inline-block bg-stone-700 text-white px-8 py-3 rounded-md font-bold hover:bg-neutral-700 transition`}
            >
              Inquire Now
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}



