// src/components/Header.js
"use client";

import { useState } from 'react';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="bg-gray-100 text-black p-5">
      <nav className="w-full flex justify-between items-center">
        <div className="flex items-center text-xl font-bold font-poppins">
          <img src="/N.png" alt="Logo" className="h-11 w-14 mr-1" />
          <a href="/">Brand Forge Agency</a>
        </div>
        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-35 font-poppins">
          <li>
            <a href="/" className="hover:underline">Home</a>
          </li>
          <li>
            <a href="/about" className="hover:underline">About</a>
          </li>
          <li>
            <a href="/services" className="hover:underline">Services</a>
          </li>
          <li>
            <a href="/the-team" className="hover:underline">The Team</a>
          </li>
          <li>
            <a href="/blog" className="hover:underline">Blog</a>
          </li>
          <li>
            <a href="/contact" className="hover:underline">Contact</a>
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
          <ul className="flex flex-col space-y-3 font-poppins">
            <li className="p-3 bg-gray-200 rounded">
              <a href="/" className="block hover:underline">Home</a>
            </li>
            <li className="p-2 bg-gray-200 rounded">
              <a href="/about" className="block hover:underline">About</a>
            </li>
            <li className="p-2 bg-gray-200 rounded">
              <a href="/services" className="block hover:underline">Services</a>
            </li>
            <li className="p-2 bg-gray-200 rounded">
              <a href="/the-team" className="block hover:underline">The Team</a>
            </li>
            <li className="p-2 bg-gray-200 rounded">
              <a href="/blog" className="block hover:underline">Blog</a>
            </li>
            <li className="p-2 bg-gray-200 rounded">
              <a href="/contact" className="block hover:underline">Contact</a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
