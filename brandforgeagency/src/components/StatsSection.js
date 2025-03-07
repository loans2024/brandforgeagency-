"use client";
import { useState, useEffect } from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { Playfair_Display } from 'next/font/google';

const playfair = Playfair_Display({
    subsets: ['latin'],
    weight: ['900', '900'],
  });

export default function StatsSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const [showStars, setShowStars] = useState(false);

  useEffect(() => {
    if (inView) {
      const timer = setTimeout(() => {
        setShowStars(true);
      }, 500); // Delay for the star effect; adjust as needed
      return () => clearTimeout(timer);
    }
  }, [inView]);

  return (
    <section ref={ref} className="py-8 bg-white w-screen mx-0">
      <div className="flex flex-wrap justify-center gap-8">
        {/* Happy Clients Served */}
        <div className="flex flex-col items-center">
          <div className="h-30 w-57 flex items-center justify-center mb-1">
            <img src="/happy.png" alt="Happy Clients" className="h-full w-full object-contain" />
          </div>
          {inView && <CountUp end={500} duration={2} suffix="+" className="text-2xl font-bold" />}
          <p className={`${playfair.className} text-sm`}>Happy Customers Served</p>
        </div>
        {/* Projects Completed */}
        <div className="flex flex-col items-center">
          <div className="h-30 w-57 flex items-center justify-center mb-2">
            <img src="/project.png" alt="Projects Completed" className="h-full w-full object-contain" />
          </div>
          {inView && <CountUp end={1000} duration={2} suffix="+" className="text-2xl font-bold" />}
          <p className={`${playfair.className} text-sm`}>Projects Completed</p>
        </div>
        {/* Years in Business */}
        <div className="flex flex-col items-center">
          <div className="h-30 w-57 flex items-center justify-center mb-2">
            <img src="/experience.png" alt="Years in Business" className="h-full w-full object-contain" />
          </div>
          {inView && <CountUp end={4} duration={20} suffix="+" className="text-2xl font-bold" />}
          <p className={`${playfair.className} text-sm`}>Years in Business</p>
        </div>
        {/* Satisfaction Rate */}
        <div className="flex flex-col items-center">
          <div className="h-30 w-57 flex items-center justify-center mb-2">
            <img src="/satis.jpg" alt="Satisfaction Rate" className="h-full w-full object-contain" />
          </div>
          {inView && <CountUp end={100} duration={2} suffix="%" className="text-2xl font-bold" />}
          <p className={`${playfair.className} text-sm`}>Satisfaction Rate</p>
        </div>
        {/* Countries Served */}
        <div className="flex flex-col items-center">
          <div className="h-30 w-57 flex items-center justify-center mb-3">
            <img src="/global.png" alt="Countries Served" className="h-full w-full object-contain" />
          </div>
          {inView && <CountUp end={10} duration={10} suffix="+" className="text-2xl font-bold" />}
          <p className={`${playfair.className} text-sm`}>Countries Served</p>
        </div>
      </div>
       {/* Star/Dot Effects */}
       {showStars && (
        <div className="flex justify-center mt-8 space-x-4 animate-star-fade">
          <span className="text-4xl">★</span>
          <span className="text-4xl">★</span>
          <span className="text-4xl">★</span>
          <span className="text-4xl">★</span>
          <span className="text-4xl">★</span>
        </div>
      )}
    </section>
  );
}