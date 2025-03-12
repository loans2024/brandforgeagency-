"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { Playfair_Display } from "next/font/google";
import Link from "next/link";
import ContactPopup from "@/components/ContactPopup"; 

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function TheTeam() {
  const [isContactOpen, setIsContactOpen] = useState(false); // ✅ Moved useState outside useEffect

  useEffect(() => {
    // Function to disable text selection, right-click, and copy
    const disableCopy = (event) => event.preventDefault();
    document.addEventListener("contextmenu", disableCopy);
    document.addEventListener("selectstart", disableCopy);
    document.addEventListener("copy", disableCopy);

    return () => {
      document.removeEventListener("contextmenu", disableCopy);
      document.removeEventListener("selectstart", disableCopy);
      document.removeEventListener("copy", disableCopy);
    };
  }, []);

  const teamMembers = [
    {
      name: "Humphrey Nyariki",
      role: "Software Engineer & SEO Copywriter",
      experience: "Software development, brand strategy, and SEO-driven content marketing.",
      image: "/S.webp",
      portfolio: "https://main--rey01.netlify.app/",
    },
    {
      name: "Juliet",
      role: "",
      experience: "",
      image: "/team/samantha.jpg",
      portfolio: "#",
    },
    {
      name: "Other",
      role: "",
      experience: "",
      image: "/team/michael.jpg",
      portfolio: "#",
    },
    {
      name: "Other",
      role: "",
      experience: "",
      image: "/team/jessica.jpg",
      portfolio: "#",
    },
    {
      name: "Other",
      role: "",
      experience: "",
      image: "/team/daniel.jpg",
      portfolio: "#",
    },
    {
      name: "Other",
      role: "",
      experience: "",
      image: "/team/emily.jpg",
      portfolio: "#",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-r from-orange-100 via-stone-500 to-neutral-300 p-10">
      <h1 className={`${playfair.className} text-center text-4xl font-bold text-black mb-10`}>
        Meet the Creative Experts Behind Industry-Leading Digital Brands
      </h1>

      {/* SEO-Optimized Intro */}
      <p className={`${playfair.className} text-left text-lg text-black max-w-7xl mx-auto mb-10`}>
        Our team of digital branding specialists, creative designers, social media strategists, marketing professionals,  
        and software engineers are dedicated to crafting powerful brand identities. From SEO-driven content to  
        high-converting visuals, we bring growth-focused strategies to businesses worldwide.
      </p>

      {/* Team Members Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="w-full sm:w-[90%] md:w-[80%] lg:w-[70%] mx-auto rounded-lg shadow-lg bg-black text-white overflow-hidden"
          >
            {/* HD Image at the Top */}
            <div className="w-full min-h-[300px] sm:min-h-[350px] md:min-h-[400px] lg:min-h-[440px] relative">
              <Image
                src={member.image}
                alt={member.name}
                layout="fill"
                objectFit="cover" // Use "contain" if faces are getting cropped
                priority={true} // Load in high quality
                quality={100} // Force max resolution
                unoptimized={true} // Try disabling Next.js compression
                className="opacity-100 group-hover:opacity-100 transition duration-300"
              />
            </div>

            {/* Gradient Overlay */}
            <div className="p-4 sm:p-6 bg-gradient-to-r from-black/70 via-stone-900/50 to-neutral-800/70 text-center">
              <h2 className={`${playfair.className} text-lg sm:text-xl font-bold`}>{member.name}</h2>
              <p className={`${playfair.className} text-bold italic text-yellow-300`}>{member.role}</p>
              <p className={`${playfair.className} mt-2 text-green-400`}>{member.experience}</p>
              <a
                href={member.portfolio}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block px-4 py-2 bg-orange-400 text-black font-bold rounded hover:bg-orange-500 transition"
              >
                View Portfolio
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* ✅ Contact Us Button at the Bottom */}
      <div className="flex justify-center mt-10">
        <button
          onClick={() => setIsContactOpen(true)}
          className={`${playfair.className} px-6 py-3 bg-stone-600 text-white font-bold text-lg rounded-lg hover:bg-stone-700 transition`}
        >
          Contact Us
        </button>
      </div>

      {/* Show Contact Popup */}
      {isContactOpen && <ContactPopup onClose={() => setIsContactOpen(false)} />}
    </div>
  );
}

