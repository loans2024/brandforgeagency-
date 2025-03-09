"use client";
import Image from 'next/image';
import { useState } from 'react';
import Link from 'next/link';
import { Playfair_Display } from 'next/font/google';

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '700'],
});

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="bg-gradient-to-r from-orange-200 via-stone-800 to-neutral-800 text-white p-3 sticky top-0 z-50">
      <nav className="w-full flex justify-between items-center">
        <div className="flex items-center text-xl font-bold font-poppins">
          <Image src="/n.png" alt="Logo" width={36} height={29} priority unoptimized className="mr-2"/>  
          <Link href="/" className={`${playfair.className} text-xl font-bold text-black`}>
          Brand Forge Agency
          </Link>
  
        </div>
        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-35 font-poppins">
          <li>
            <Link href="/" className={`${playfair.className} hover:underline font-bold`}>Home</Link>
          </li>
          <li>
            <Link href="/about" className={`${playfair.className} hover:underline font-bold`}>About</Link>
          </li>
          <li>
            <Link href="/services" className={`${playfair.className} hover:underline font-bold`}>Services</Link>
          </li>
          <li>
            <Link href="/the-team" className={`${playfair.className} hover:underline font-bold`}>The Team</Link>
          </li>
          <li>
            <Link href="/blog" className={`${playfair.className} hover:underline font-bold`}>Blog</Link>
          </li>
          <li>
            <Link href="/contact" className={`${playfair.className} hover:underline font-bold`}>Contact</Link>
          </li>
        </ul>
        {/* Hamburger Menu Icon for Mobile */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>
      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="md:hidden mt-3 bg-black-50 p-3 rounded-lg shadow-lg -mx-5">
          <ul className={`${playfair.className}"flex flex-col font-bold space-y-3`}>
            <li className="p-2 bg-stone-500 rounded text-black">
              <Link href="/" className="block hover:underline">HOME</Link>
            </li>
            <li className="p-2 bg-stone-500 rounded text-black">
              <Link href="/about" className="block hover:underline">ABOUT</Link>
            </li>
            <li className="p-2 bg-stone-500 rounded text-black">
              <Link href="/services" className="block hover:underline">SERVICES</Link>
            </li>
            <li className="p-2 bg-stone-500 rounded text-black">
              <Link href="/the-team" className="block hover:underline">THE TEAM</Link>
            </li>
            <li className="p-2 bg-stone-500 rounded text-black">
              <Link href="/blog" className="block hover:underline">BLOG</Link>
            </li>
            <li className="p-2 bg-stone-500 rounded text-black">
              <Link href="/contact" className="block hover:underline">CONTACT</Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
