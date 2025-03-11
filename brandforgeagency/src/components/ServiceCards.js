"use client";
import { useState } from "react";
import Image from "next/image";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['900', '900'],
});

const services = [
  {
    title: "Social Media Management",
    description:
      "Boost your online presence and engage your audience with a personalized social media strategy.",
    asset: "/Social.png",
    extra:
      "Maximize your brand’s reach with expert social media management. We create high-converting content, optimize engagement, and drive organic growth on Instagram, Facebook, TikTok, LinkedIn, Twitter (X), YouTube, and Pinterest. Whether you're a small business, e-commerce store, or service-based brand, our data-driven strategies and targeted ad campaigns help you scale and build lasting customer connections. Let’s grow your brand!",
  },
  {
    title: "Graphic Design",
    description:
      "Transform your brand identity with innovative visuals that capture your essence.",
    asset: "/graphical.png",
    extra:
      "Enhance your brand with professional graphic design services that create a lasting impression. From logo design and branding to marketing materials and digital assets, we craft eye-catching designs tailored to your business.",
  },
  {
    title: "Copy Writing",
    description:
      "Craft persuasive and creative copy that elevates your brand and drives conversions.",
    asset: "/contentW.mp4", // video asset
    extra:
      "Engage your audience with SEO-optimized copywriting that boosts visibility and drives sales. We create compelling website content, blog articles, ad copy, product descriptions, and email marketing that captivate readers and enhance brand storytelling. Turn visitors into loyal customers with conversion-focused, high-quality content. Let’s tell your story!",
  },
  {
    title: "Reels Creation",
    description:
      "Create engaging short videos to capture your audience’s attention and boost interaction.",
    asset: "/reels.mp4", // video asset
    extra:
      "Boost your brand with high-quality Reels and short-form videos for Instagram, TikTok, YouTube Shorts, and Facebook. Our video editing, trend-driven content, and storytelling techniques help increase engagement, reach, and brand awareness. Elevate your social media presence with eye-catching, viral-ready video content. Let’s make your brand go viral!",
  },
  {
    title: "Content Creation",
    description:
      "Develop compelling content that builds trust and connects with your audience.",
    asset: "/content.png",
    extra:
      "Boost your brand with high-quality content creation that drives engagement, traffic, and conversions. We craft SEO-optimized blog posts, social media content, video scripts, website copy, and email marketing to enhance your online presence. Elevate your brand with strategic, value-driven content that resonates with your audience. Let’s create impact!",
  },
  {
    title: "Community Engagement",
    description:
      "Build and nurture strong online communities with our innovative engagement strategies.",
    asset: "/engage.png",
    extra:
      "Strengthen your brand with authentic community engagement that fosters loyalty and trust. We manage social media interactions, customer relationships, online forums, and brand advocacy across platforms like Websites, Instagram, Facebook, LinkedIn, and Twitter (X). Increase brand awareness, audience retention, and engagement with strategic, meaningful interactions. Let’s grow your community",
  },
  {
    title: "Strategy & Growth",
    description:
      "Implement data-driven strategies that accelerate growth and expand your digital footprint.",
    asset: "/growth.mp4", // video asset
    extra:
      "Scale your business with growth-focused digital strategies that drive brand awareness, engagement, and conversions. We specialize in SEO optimization, social media marketing, paid ads, content strategy, and audience analytics to maximize your online presence. Unlock new opportunities with targeted, results-driven marketing solutions. Let’s fuel your brand’s success!",
  },
  {
    title: "Software Engineering",
    description:
      "Develop robust, scalable software solutions tailored to your unique business needs.",
    asset: "/software.png",
    extra:
      "Empower your business with custom software development that ensures performance, security, and scalability. Our expertise includes web and mobile app development, SaaS solutions, API integrations, cloud computing, and AI-driven applications. We build high-performance, user-friendly software optimized for efficiency, innovation, and growth. Let’s engineer your success!",
  },
];

export default function ServiceCards() {
  // Use an object to track which service's extra content is expanded.
  const [readMore, setReadMore] = useState({});

  return (
    <div className="space-y-2">
      {services.map((service, index) => {
        // For mobile, force text container to appear before image container.
        // On desktop, alternate order based on index.
        const textOrder = "order-1 " + (index % 2 !== 0 ? "md:order-2" : "md:order-1");
        const imageOrder = "order-2 " + (index % 2 !== 0 ? "md:order-1" : "md:order-2");
        return (
          <div
            key={index}
            className="w-screen p-3 rounded-lg shadow-lg bg-gradient-to-r from-stone-400 via-black to-stone-500"
          >
            <div className="flex flex-col md:flex-row items-center">
              {/* Text Container */}
              <div className={`w-full md:w-1/2 ${textOrder} md:px-12`}>
                <h2 className={`${playfair.className} text-3xl text-white mb-4`}>
                  {service.title}
                </h2>
                <p className="text-lg text-gray-200 font-[poppins]">
                  {service.extra && readMore[service.title]
                    ? ""
                    : service.description}
                </p>
              </div>
              {/* Image and Read More Container */}
              <div className={`w-full md:w-1/2 ${imageOrder} mt-8 md:mt-0`}>
                {service.asset.endsWith('.mp4') ? (
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="rounded-lg shadow-lg object-contain w-full h-[400px]"
                  >
                    <source src={service.asset} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                ) : (
                  <Image
                    src={service.asset}
                    alt={service.title}
                    width={600}
                    height={400}
                    className="rounded-lg shadow-lg object-contain w-full h-[400px]"
                  />
                )}
                {service.extra && (
                  <div className="mt-4 text-center">
                    {!readMore[service.title] ? (
                      <button
                        onClick={() =>
                          setReadMore({ ...readMore, [service.title]: true })
                        }
                        className={`${playfair.className} inline-block bg-yellow-900 text-black px-4 py-2 rounded-md font-bold hover:bg-neutral-700 transition`}
                      >
                        Read More
                      </button>
                    ) : (
                      <div className="mt-4 p-4 bg-stone-500 rounded-md">
                        <div className="mb-2 text-lg text-white font-[poppins]">
                          {service.extra}
                        </div>
                        <button
                          onClick={() =>
                            setReadMore({ ...readMore, [service.title]: false })
                          }
                          className={`${playfair.className} inline-block bg-yellow-900 text-black px-4 py-2 rounded-md font-bold hover:bg-neutral-700 transition`}
                        >
                          Close
                        </button>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

