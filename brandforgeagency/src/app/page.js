/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
"use client";
import { useState } from "react";
import Link from 'next/link';
import SlidingImage from '../components/SlidingImage';
import { Playfair_Display } from 'next/font/google';

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['900', '900'],
});

export default function Home() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    try {
      const res = await fetch("https://formspree.io/f/mblgrdzl", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: formData,
      });
      if (res.ok) {
        setSubmitted(true);
      } else {
        alert("There was an error submitting the form. Please try again.");
      }
    } catch (error) {
      console.error(error);
      alert("There was an error submitting the form. Please try again.");
    }
  };


  return (
    <>
      {/* Hero Section */}
      <section className="bg-gray-50 py-16 relative left-1/2 -translate-x-[49%] w-screen">
        <div className="flex flex-col md:flex-row items-center">
          {/* Text container with sliding effect on desktops/laptops */}
          <div className="md:w-1/2 animate-slide-in-left">
            <h1 className={`${playfair.className} text-5xl md:text-6xl text-black`}>
              Elevate Your Brand with Digital Excellence
            </h1>
            <p className="mt-4 text-xl text-black font-[poppins]">
              At Brand Forge Agency, we craft comprehensive digital solutions to help your business thrive.
            </p>
            <div className="mt-8">
              <Link
                href="/services"
                className={`${playfair.className} inline-block bg-blue-600 text-white px-9 py-3 rounded-md font-bold  hover:bg-blue-700 transition`}
              >
                Discover Our Services
              </Link>
            </div>
          </div>
          {/* Optional Image or Empty Space for layout balance */}
          <div className="hidden md:block md:w-1/2">
            {/* Add an image here if desired */}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white relative left-1/2 -translate-x-1/2 w-screen">
        <div className="w-full">
          <h2 className={`${playfair.className} text-5xl md:text-1xl text-black text-center`}>Our Expertise</h2>
          <p className="mt-4 text-center text-black font-[poppins] text-2xl">
            We offer a full spectrum of services to boost your digital presence
          </p>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Social Media Management */}
            <div className="bg-gray-700 p-6 rounded-lg shadow-md hover:shadow-xl transition">
              <h3 className={`${playfair.className} text-3xl text-white`}>Social Media Management</h3>
              <p className="mt-2 text-white font-[poppins] text-1xl">
                Boost your online presence and engage your audience across platforms
              </p>
            </div>
            {/* Graphic Design */}
            <div className="bg-gray-700 p-6 rounded-lg shadow-md hover:shadow-xl transition">
              <h3 className={`${playfair.className} text-3xl text-white`}>Graphic Design</h3>
              <p className="mt-2 text-white font-[poppins] text-1xl">
                Transform your brand identity with innovative visual designs.
              </p>
            </div>
            {/* Video Editing */}
            <div className="bg-gray-700 p-6 rounded-lg shadow-md hover:shadow-xl transition">
              <h3 className={`${playfair.className} text-3xl text-white`}>Video Editing</h3>
              <p className="mt-2 text-white font-[poppins] text-1xl">
                Enhance your visual content with professional video editing.
              </p>
            </div>
            {/* Reels Creation */}
            <div className="bg-gray-700 p-6 rounded-lg shadow-md hover:shadow-xl transition">
              <h3 className={`${playfair.className} text-3xl text-white`}>Reels Creation</h3>
              <p className="mt-2 text-white font-[poppins] text-1xl">
                Create engaging short-form videos to capture your audience’s attention.
              </p>
            </div>
            {/* Content Creation */}
            <div className="bg-gray-700 p-6 rounded-lg shadow-md hover:shadow-xl transition">
              <h3 className={`${playfair.className} text-3xl text-white`}>Content Creation</h3>
              <p className="mt-2 text-white font-[poppins] text-1xl">
                Develop compelling content tailored to build trust and authority.
              </p>
            </div>
            {/* Copy Writing */}
            <div className="bg-gray-700 p-6 rounded-lg shadow-md hover:shadow-xl transition">
              <h3 className={`${playfair.className} text-3xl text-white`}>Copy Writing</h3>
              <p className="mt-2 text-white font-[poppins] text-1xl">
                Craft persuasive copy that elevates your brand and drives conversions.
              </p>
            </div>
            {/* Community Engagement */}
            <div className="bg-gray-700 p-6 rounded-lg shadow-md hover:shadow-xl transition">
              <h3 className={`${playfair.className} text-3xl text-white`}>Community Engagement</h3>
              <p className="mt-2 text-white font-[poppins] text-1xl">
                Build strong relationships with your audience through active engagement.
              </p>
            </div>
            {/* Strategy & Growth */}
            <div className="bg-gray-700 p-6 rounded-lg shadow-md hover:shadow-xl transition">
              <h3 className={`${playfair.className} text-3xl text-white`}>Strategy & Growth</h3>
              <p className="mt-2 text-white font-[poppins] text-1xl">
                Implement data-driven strategies to accelerate your business growth.
              </p>
            </div>
            {/* Software Engineering */}
            <div className="bg-gray-700 p-6 rounded-lg shadow-md hover:shadow-xl transition">
              <h3 className={`${playfair.className} text-3xl text-white`}>Software Engineering</h3>
              <p className="mt-2 text-white font-[poppins] text-1xl">
                Develop robust and scalable software solutions tailored to your needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Hire a Virtual Assistant Form */}
      <section className="py-1 bg-gray-100 w-screen mx-0">
        <div className="w-full flex flex-col md:flex-row items-center">
          {/* Left Column: Form */}
          <div className="w-full md:w-1/2 p-4">
            <h2 className={`${playfair.className} text-3xl text-black`}>
              Hire Us!
            </h2>
            {submitted ? (
              <div className="w-full max-w-2xl bg-white p-2 rounded-lg shadow-md text-center">
                <h2 className="text-2xl font-bold text-blue-900">Thank You!</h2>
                <p className="mt-4 text-lg text-black font-[poppins]">
                  Your submission has been received.
                </p>
              </div>
            ) : (
              <form 
                action="https://formspree.io/f/mblgrdzl" 
                method="POST" 
                onSubmit={handleSubmit}
                className="w-full max-w-2xl bg-white p-2 rounded-lg shadow-md"
              >
                {/* Role Dropdown Field at the Top */}
                <div className="mb-6 relative">
                  <label className="block text-gray-700 text-lg font-[poppins] mb-2">
                    Select a Role
                  </label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                      {/* (Optional icon can be placed here) */}
                    </span>
                    <select 
                      name="role"
                      className="w-full border border-gray-300 p-3 pl-10 rounded-md appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 font-[poppins]"
                    >
                      <option>Virtual Assistant</option>
                      <option>Social Media Management</option>
                      <option>Graphic Design</option>
                      <option>Video Editing</option>
                      <option>Reels Creation</option>
                      <option>Content Creation</option>
                      <option>Copy Writing</option>
                      <option>Community Engagement</option>
                      <option>Strategy & Growth</option>
                      <option>Software Engineering</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3 text-gray-700">
                      <svg className="fill-current h-4 w-4" viewBox="0 0 20 20">
                        <path d="M5.516 7.548l4.484 4.484 4.484-4.484L16 8.548l-6 6-6-6z" />
                      </svg>
                    </div>
                  </div>
                </div>
                {/* Name Field */}
                <div className="mb-4 relative">
                  <label className="block text-gray-700 text-lg font-[poppins] mb-2">
                    Name
                  </label>
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                    <img src="/name.png" alt="User Icon" className="h-7 w-7 mt-9" />
                  </span>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    className="w-full border border-gray-300 p-3 pl-10 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 font-[poppins]"
                  />
                </div>
                {/* Email Field */}
                <div className="mb-4 relative">
                  <label className="block text-gray-700 text-lg font-[poppins] mb-2">
                    Email
                  </label>
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                    <img src="/email.jpeg" alt="User Icon" className="h-6 w-6 mt-9" />  
                  </span>
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    className="w-full border border-gray-300 p-3 pl-10 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 font-[poppins]"
                  />
                </div>
                {/* Phone Field */}
                <div className="mb-4 relative">
                  <label className="block text-gray-700 text-lg font-[poppins] mb-2">
                    Phone Number
                  </label>
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                    <img src="/phone.webp" alt="User Icon" className="h-6 w-6 mt-9" />  
                  </span>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Your Phone Number"
                    className="w-full border border-gray-300 p-3 pl-10 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 font-[poppins]"
                  />
                </div>
                {/* Tasks/Details Field */}
                <div className="mb-6 relative">
                  <label className="block text-gray-700 text-lg font-[poppins] mb-2">
                    Tasks/Details
                  </label>
                  <span className="absolute top-10 left-0 flex items-center pl-3">
                    <img src="/case.webp" alt="User Icon" className="h-7 w-7 mt-1" />  
                  </span>
                  <textarea
                    name="details"
                    placeholder="Describe the tasks you want to delegate"
                    className="w-full border border-gray-300 p-3 pl-10 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 font-[poppins]"
                    rows="4"
                  ></textarea>
                </div>
                <div>
                  <button
                    type="submit"
                    className={`${playfair.className} w-full bg-blue-600 text-white px-6 py-3 rounded-md font-bold hover:bg-blue-700 transition`}
                  >
                    Get Free Consultation
                  </button>
                </div>
              </form>
            )}
          </div>
          {/* Right Column: Sliding Image */}
          <div className="w-full md:w-2/3 p-4 flex justify-center">
            <SlidingImage src="/hire.png" alt="Hire Virtual Assistant" className="w-full max-w-2xl h-auto" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-gray-50 relative left-1/2 -translate-x-[49%] w-screen">
        <div className="w-full flex flex-col md:flex-row items-center">
          <div className="md:w-1/2">
            <h2 className={`${playfair.className} text-4xl text-black p-3`}>Who We Are</h2>
            <p className="mt-4 text-lg text-black font-[poppins]">
              We blend creativity with technology. Our dedicated team of experts provides integrated digital solutions—from virtual assistance and branding to full‑stack software engineering—to ensure your brand stands out.
            </p>
            <div className="mt-6">
              <Link
                href="/about"
                className={`${playfair.className} inline-block bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition`}
              >
                Learn More About Us
              </Link>
            </div>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0">
            <img
              src="/n.png"
              alt="Brand Forge Agency"
              className="w-full max-h-60 object-contain rounded-lg shadow-md"
            />
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="py-16 bg-gray-100 relative left-1/2 -translate-x-1/2 w-screen">
        <div className="w-full text-center">
          <h2 className={`${playfair.className} text-4xl text-black`}>Ready to Elevate Your Brand?</h2>
          <p className="mt-4 text-lg font-[poppins] text-black">
            Contact us today and let's create something extraordinary together
          </p>
          <div className="mt-8">
            <Link
              href="/contact"
              className={`${playfair.className} inline-block bg-white text-blue-600 px-8 py-3  hover:bg-gray-100 transition`}
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

