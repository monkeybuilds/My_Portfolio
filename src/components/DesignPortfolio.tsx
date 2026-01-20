import { useState } from "react";

interface PortfolioItem {
  id: number;
  title: string;
  category: "Design" | "Certificate" | "Content";
  image: string;
  description: string;
}

const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: "YouTube Thumbnail Design",
    category: "Design",
    image: "/assets/portfolio/thumb1.png",
    description: "Professional YouTube thumbnail with eye-catching visuals and typography",
  },
  {
    id: 2,
    title: "Engineers Day Content",
    category: "Design",
    image: "/assets/portfolio/thumb2.png",
    description: "Event promotional design with vibrant colors and engaging layout",
  },
  {
    id: 3,
    title: "Abhujmad Poster",
    category: "Design",
    image: "/assets/portfolio/Abhujmad Poster.png",
    description: "Event poster design showcasing creative typography and visual hierarchy",
  },
  {
    id: 4,
    title: "Valorant Event Poster",
    category: "Design",
    image: "/assets/portfolio/Valorant Event Poster.png",
    description: "Gaming event promotional poster with dynamic composition",
  },
  {
    id: 5,
    title: "Reel Cover Design",
    category: "Design",
    image: "/assets/portfolio/Reel cover 2.png",
    description: "Professional reel cover for social media content",
  },
  {
    id: 6,
    title: "Professional Certification",
    category: "Certificate",
    image: "/assets/portfolio/cert1.png",
    description: "Advanced Python and Data Science certification",
  },
  {
    id: 7,
    title: "Achievement Certificate",
    category: "Certificate",
    image: "/assets/portfolio/cert2.png",
    description: "Professional development and training completion",
  },
  {
    id: 8,
    title: "Canva Design Master",
    category: "Certificate",
    image: "/assets/portfolio/canva-badge.png",
    description: "Canva 50 Design Milestone Badge - Recognized Designer",
  },
];

export default function DesignPortfolio(): React.JSX.Element {
  const [selectedCategory, setSelectedCategory] = useState<"All" | "Design" | "Certificate" | "Content">("All");

  const filteredItems = selectedCategory === "All" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === selectedCategory);

  const categories = ["All", "Design", "Certificate", "Content"] as const;

  return (
    <section id="portfolio" className="py-20 px-6 bg-gradient-to-b from-transparent via-purple-950/20 to-transparent">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Design & Creativity Portfolio
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Showcasing my design work, certifications, and creative projects across various domains.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center gap-3 mb-12 flex-wrap">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                selectedCategory === category
                  ? "bg-gradient-to-r from-purple-500 to-indigo-600 text-white shadow-lg shadow-purple-500/50"
                  : "bg-white/5 text-white/70 hover:bg-white/10 border border-white/20"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-2xl border border-white/10 hover:border-white/30 transition-all duration-300 bg-gradient-to-br from-white/5 to-white/2"
            >
              {/* Image Container */}
              <div className="relative h-64 md:h-72 lg:h-80 overflow-hidden bg-gradient-to-br from-slate-900 to-slate-950">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Category Badge */}
                <div className="absolute top-4 right-4 z-20">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-sm ${
                    item.category === "Design" 
                      ? "bg-blue-500/80 text-white"
                      : item.category === "Certificate"
                      ? "bg-yellow-500/80 text-white"
                      : "bg-pink-500/80 text-white"
                  }`}>
                    {item.category}
                  </span>
                </div>

                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-purple-400 transition-colors">
                  {item.title}
                </h3>
                <p className="text-white/70 text-sm mb-4">
                  {item.description}
                </p>
                <div className="flex items-center gap-2 text-purple-400 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                  <span>View Details</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
