"use client";
import ProcessSlider from "../../components/ProcessSlider";

import Image from "next/image";
import Link from "next/link";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '700'],
});

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-200 via-stone-800 to-neutral-800 py-16 w-screen">
        <div className="container mx-auto px-4 text-center">
          <h1 className={`${playfair.className} text-5xl md:text-7xl text-white`}>
            About Brand Forge Agency
          </h1>
          <p className="mt-6 text-xl text-white font-[poppins] max-w-2xl mx-auto">
            We blend creativity with technology to deliver digital solutions that empower brands and drive sustainable growth.
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className={`${playfair.className} text-4xl text-black text-center font-extrabold mb-8`}>
            Our Story
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 bg-gradient-to-r from-stone-100 to-neutral-100 rounded-lg shadow-lg">
              <p className="text-lg text-black font-[poppins]">
                Founded with a vision to revolutionize the digital landscape, Brand Forge Agency started as a creative studio with a passion for excellence. We have evolved into a leading digital agency delivering innovative strategies that set brands apart.
              </p>
            </div>
            <div className="p-8 bg-gradient-to-r from-stone-100 to-neutral-100 rounded-lg shadow-lg">
              <p className="text-lg text-black font-[poppins]">
                Our journey is defined by relentless creativity and a commitment to quality. We continuously push boundaries to forge digital experiences that inspire and engage audiences worldwide.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="py-16 bg-gradient-to-r from-stone-500 via-stone-900 to-orange-200">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 p-4">
            <h2 className={`${playfair.className} text-4xl text-white font-semi-bold mb-4`}>Our Vision</h2>
            <p className="text-lg text-white font-[poppins]">
              To empower brands with cutting-edge digital solutions that drive innovation, foster growth, and create lasting impact.
            </p>
          </div>
          <div className="w-full md:w-1/2 p-4">
            <h2 className={`${playfair.className} text-4xl text-white font-semi-bold mb-4`}>Our Mission</h2>
            <p className="text-lg text-white font-[poppins]">
              To seamlessly merge creativity and technology, delivering bespoke digital strategies that elevate brand presence and engage audiences globally.
            </p>
          </div>
        </div>
      </section>

      {/* Our Process Section */}
      <section className="py-16 bg-gradient-to-r from-orange-100 via-stone-200 to-neutral-200 w-screen">
        <div className="container mx-auto px-">
          <h2 className={`${playfair.className} text-4xl text-black text-center font-extrabold mb-12`}>
          Our 6-Step Process for Transforming Your Vision into Digital Success
          </h2>
          <ProcessSlider />
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="py-16 bg-white text-center">
        <div className="container mx-auto px-4">
          <h2 className={`${playfair.className} text-4xl text-black font-bold`}>
            Ready to Transform Your Digital Presence?
          </h2>
          <p className="mt-4 text-lg font-[poppins] text-black">
            Discover how we can forge a unique digital identity for your brand.
          </p>
          <div className="mt-8">
            {/* Redirect to home page ("/") which contains the Hire a Virtual Assistant Form */}
            <Link
              href="/#contact"
              className={`${playfair.className} inline-block bg-stone-700 text-white px-8 py-3 rounded-md font-bold hover:bg-neutral-700 transition`}
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}


