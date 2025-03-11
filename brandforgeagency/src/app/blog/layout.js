// src/app/blog/layout.js
export const metadata = {
    title: "How Expert Social Media Management Can Elevate Your Brand",
    description:
      "Discover expert strategies to grow your brand through social media management, SEO-driven content, influencer marketing, and data analytics.",
    openGraph: {
      title: "How Expert Social Media Management Can Elevate Your Brand",
      description:
        "Learn proven strategies for social media growth, engagement, and branding success with BrandForge Agency.",
      url: "https://brandforgeagency.netlify.app/blog/social-media-management",
      images: [
        {
          url: "https://brandforgeagency.netlify.app/blog-social-media.jpg",
          width: 1200,
          height: 630,
        },
      ],
      locale: "en_US",
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: "How Social Media Management Can Elevate Your Brand",
      description:
        "Uncover key strategies to maximize social media impact, drive engagement, and boost brand growth.",
      images: ["https://brandforgeagency.netlify.app/twitter-blog-social.jpg"],
    },
  };
  
  export default function BlogLayout({ children }) {
    return <>{children}</>;
  }
  