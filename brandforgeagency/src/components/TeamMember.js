"use client";
import { useState } from "react";
import Image from "next/image";



export default function TeamMember({ member }) {
  const [showPortfolio, setShowPortfolio] = useState(false);

  return (
    <div className="relative w-80 md:w-96 snap-center bg-black rounded-xl overflow-hidden shadow-lg flex-shrink-0">
      <div className="relative h-56 sm:h-72 md:h-96">
        <Image
          src={member.image}
          alt={member.name}
          layout="fill"
          objectFit="cover"
          className="opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-90"></div>
      </div>
      <div className="absolute inset-0 flex flex-col justify-center items-start p-6">
        <h3 className="text-white text-2xl font-bold">{member.name}</h3>
        <p className="text-orange-300 text-lg">{member.role}</p>
        <p className="text-gray-400 mt-2">{member.experience}</p>
        <button
          onClick={() => setShowPortfolio(!showPortfolio)}
          className="mt-4 px-4 py-2 bg-orange-500 text-white font-bold rounded-lg hover:bg-orange-600 transition"
        >
          {showPortfolio ? "Hide Portfolio" : "View Portfolio"}
        </button>
      </div>
      {showPortfolio && (
        <div className="absolute inset-0 bg-black bg-opacity-90 flex flex-col justify-center items-center p-6">
          <h4 className="text-orange-400 text-xl font-semibold">Portfolio</h4>
          <p className="text-gray-300 text-center mt-2">{member.details}</p>
          <button
            onClick={() => setShowPortfolio(false)}
            className="mt-4 px-4 py-2 bg-gray-700 text-white font-bold rounded-lg hover:bg-gray-800 transition"
          >
            Close
          </button>
        </div>
      )}
    </div>
  );
}
