// src/components/SlidingImage.js
"use client";
import { useEffect, useRef, useState } from "react";

export default function SlidingImage({ src, alt, className = "" }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 } // Adjust threshold as needed
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return (
    <img
      ref={ref}
      src={src}
      alt={alt}
      className={`${className} ${visible ? "animate-slide-in-right" : "opacity-0"}`}
    />
  );
}
