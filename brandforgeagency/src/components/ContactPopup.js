"use client";
import { useEffect, useState } from "react";
import { Playfair_Display } from 'next/font/google';

const playfair = Playfair_Display({
    subsets: ['latin'],
    weight: ['400', '700'],
  });

export default function ContactPopup({ onClose }) {
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

  // Close the popup when clicking outside
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (event.target.id === "popup-overlay") {
        onClose();
      }
    };
    document.addEventListener("click", handleOutsideClick);
    return () => document.removeEventListener("click", handleOutsideClick);
  }, [onClose]);

  return (
    <div
      id="popup-overlay"
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-end items-center z-50"
    >
      <div className="bg-white w-full max-w-md p-5 rounded-lg shadow-lg m-5">
        <h2 className={`${playfair.className} text-2xl font-bold text-black`}>TALK TO US!</h2>

        {submitted ? (
          <div className={`${playfair.className} text-center text-lg text-green-700 font-bold`}>
            Thank you! Your submission has been received
          </div>
        ) : (
          <form
            action="https://formspree.io/f/mblgrdzl"
            method="POST"
            onSubmit={handleSubmit}
            className="mt-4"
          >
            {/* Role Dropdown Field */}
            <label className={`${playfair.className} block text-black font-bold`}>Select a Role</label>
            <select
              name="role"
              className={`${playfair.className} w-full text-black border border-gray-700 p-2 rounded mt-1`}
              required
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

            {/* Name Field */}
            <label className={`${playfair.className} block text-black font-bold mt-3`}>Name</label>
            <input
              type="text"
              name="name"
              className="w-full border border-gray-700 p-2 rounded mt-1"
              required
            />

            {/* Email Field */}
            <label className={`${playfair.className} block text-black font-bold mt-3`}>Email</label>
            <input
              type="email"
              name="email"
              className="w-full border border-gray-700 p-2 rounded mt-1"
              required
            />

            {/* Phone Field */}
            <label className={`${playfair.className} block text-black font-bold mt-3`}>Phone</label>
            <input
              type="tel"
              name="phone"
              className="w-full border border-gray-700 p-2 rounded mt-1"
              required
            />

            {/* Tasks/Details Field */}
            <label className={`${playfair.className} block text-black font-bold mt-3`}>Tasks/Details</label>
            <textarea
              name="details"
              className={`${playfair.className} w-full text-black border border-gray-700 p-2 rounded mt-1`}
              rows="4"
              required
            ></textarea>

            {/* Submit Button */}
            <button
              type="submit"
              className={`${playfair.className} mt-4 w-full bg-stone-700 text-white py-2 rounded font-bold hover:bg-neutral-700`}
            >
              Get Free Consultation
            </button>
          </form>
        )}

        {/* Close Button */}
        <button onClick={onClose} className={`${playfair.className} mt-2 text-black hover:underline font-bold`}>
          Close
        </button>
      </div>
    </div>
  );
}


