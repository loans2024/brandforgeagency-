"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '700'],
});

const processSteps = [
  {
    title: "Discovery & Strategy",
    text: "Personalized consultation to understand your brand, audience, and business goals. In-depth market research and analysis help us design a tailored strategy that aligns perfectly with your objectives.",
    icon: "/strategy.png", // Ensure this image exists in public folder
  },
  {
    title: "Creative Development",
    text: "Our creative team transforms your ideas into innovative designs and compelling narratives. We create engaging visuals and content that capture your brand’s essence and resonate with your audience.",
    icon: "creative.png",
  },
  {
    title: "Seamless Implementation",
    text: "With your strategy and creative assets in hand, we execute the plan across multiple channels. Every element is perfectly timed and aligned with your brand’s voice.",
    icon: "seamless.png",
  },
  {
    title: "Community Engagement & Growth",
    text: "We actively engage with your audience, building strong online communities and fostering long-term relationships. Our approach is refined to maximize engagement and drive sustainable growth.",
    icon: "engagement.png",
  },
  {
    title: "Performance Analysis & Continuous Improvement",
    text: "We track performance metrics and provide detailed reports so you see measurable results. Our iterative approach ensures your strategy is always optimized.",
    icon: "improvement.png",
  },
  {
    title: "Why Choose Brand Forge Agency?",
    text: "Tailored solutions, an expert team, and a results-driven approach—our process is designed to win hearts and drive success. We're with you every step of the way, ensuring a seamless digital transformation.",
    icon: "quality.png",
  },
];

export default function ProcessSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slideDuration = 5000; // 11 seconds per slide

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === processSteps.length - 1 ? 0 : prevIndex + 1
      );
    }, slideDuration);
    return () => clearInterval(interval);
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? processSteps.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === processSteps.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative h-[300px] overflow-hidden">
      {processSteps.map((step, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full transition-all duration-500 ease-in-out ${
            index === currentIndex ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full"
          }`}
        >
          <div className="flex flex-col md:flex-row items-center h-full">
            {index % 2 === 0 ? (
              <>
                {/* Even Steps: Text Left, Icon Right */}
                <div className="md:w-1/2 md:pr-8 text-center md:text-right flex flex-col justify-center">
                  <h3 className={`${playfair.className} text-2xl text-black mb-2`}>
                    {step.title}
                  </h3>
                  <p className="text-lg text-black font-[poppins]">
                    {step.text}
                  </p>
                </div>
                <div className="md:w-1/2 flex justify-center items-center">
                  <div className="relative w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] bg-stone-800 rounded-lg p-4 shadow-lg flex items-center justify-center overflow-hidden">
                    {step.icon.endsWith('.png') || step.icon.endsWith('.jpg') ? (
                      <Image
                        src={step.icon}
                        alt={step.title}
                        fill
                        unoptimized
                        className="object-contain"
                        style={{ transform: "scale(1.5)" }}
                      />
                    ) : (
                      <span className="text-3xl">{step.icon}</span>
                    )}
                  </div>
                </div>
              </>
            ) : (
              <>
                {/* Odd Steps: Icon Left, Text Right */}
                <div className="md:w-1/2 flex justify-center items-center">
                  <div className="relative w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] bg-stone-800 rounded-lg p-4 shadow-lg flex items-center justify-center overflow-hidden">
                    {step.icon.endsWith('.png') || step.icon.endsWith('.jpg') ? (
                      <Image
                        src={step.icon}
                        alt={step.title}
                        fill
                        unoptimized
                        className="object-contain"
                        style={{ transform: "scale(1.5)" }}
                      />
                    ) : (
                      <span className="text-3xl">{step.icon}</span>
                    )}
                  </div>
                </div>
                <div className="md:w-1/2 md:pl-8 text-center md:text-left flex flex-col justify-center">
                  <h3 className={`${playfair.className} text-2xl text-black mb-2`}>
                    {step.title}
                  </h3>
                  <p className="text-lg text-black font-[poppins]">
                    {step.text}
                  </p>
                </div>
              </>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
