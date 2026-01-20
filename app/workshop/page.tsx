"use client";

import Image from "next/image";
import { useState } from "react";

interface Category {
  id: string;
  name: string;
  icon: string;
  images: string[];
}

export default function Workshop(): React.JSX.Element {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categories: Category[] = [
    {
      id: "ai-generated-reference",
      name: "AI Generated Reference",
      icon: "🤖",
      images: [
        "/assets/portfolio/ai-generated-reference/placeholder.png",
      ],
    },
    {
      id: "all-certificates",
      name: "All Certificates",
      icon: "🏆",
      images: [
        "/assets/portfolio/all-certificates/cert1.png",
        "/assets/portfolio/all-certificates/cert2.png",
        "/assets/portfolio/all-certificates/canva-badge.png",
      ],
    },
    {
      id: "bookmarks",
      name: "Bookmarks",
      icon: "📚",
      images: [
        "/assets/portfolio/bookmarks/placeholder.png",
      ],
    },
    {
      id: "posters",
      name: "Posters",
      icon: "🎭",
      images: [
        "/assets/portfolio/posters/Abhujmad Poster.png",
        "/assets/portfolio/posters/Valorant Event Poster.png",
      ],
    },
    {
      id: "reel-covers",
      name: "Reel Covers",
      icon: "🎬",
      images: [
        "/assets/portfolio/reel-covers/Reel cover 2.png",
      ],
    },
    {
      id: "registration-forms",
      name: "Registration Forms",
      icon: "📋",
      images: [
        "/assets/portfolio/registration-forms/placeholder.png",
      ],
    },
    {
      id: "valorant-brochure",
      name: "Valorant Brochure",
      icon: "🎮",
      images: [
        "/assets/portfolio/valorant-brochure/placeholder.png",
      ],
    },
    {
      id: "youtube-thumbnails",
      name: "YouTube Thumbnails",
      icon: "▶️",
      images: [
        "/assets/portfolio/youtube-thumbnails/thumb1.png",
        "/assets/portfolio/youtube-thumbnails/thumb2.png",
      ],
    },
  ];

  return (
    <main className="min-h-screen bg-[#110720] text-white pt-24 pb-20">
      <div className="container mx-auto max-w-7xl px-6">
        {/* Page Header */}
        {!selectedCategory && (
          <div className="text-center mb-16">
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-4">
              Design & Creative <span className="text-purple-400">Workshop</span>
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Explore my complete collection of designs, certifications, and creative projects. Click on any category to view all items.
            </p>
          </div>
        )}

        {/* Category Grid or Gallery View */}
        {!selectedCategory ? (
          <div>
            {/* Category Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className="group relative overflow-hidden rounded-2xl p-8 border border-purple-400/20 hover:border-purple-400/60 transition-all duration-300 bg-gradient-to-br from-indigo-500/10 to-purple-600/10 hover:shadow-2xl hover:shadow-purple-500/20 h-56 flex flex-col items-center justify-center cursor-pointer"
                >
                  {/* Animated background */}
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600/0 via-purple-600/5 to-purple-600/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="relative z-10 text-center">
                    <div className="text-6xl mb-4 group-hover:scale-125 transition-transform duration-300">
                      {category.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
                      {category.name}
                    </h3>

                    {/* Hover indicator */}
                    <div className="mt-4 flex items-center justify-center gap-2 text-purple-300 opacity-0 group-hover:opacity-100 transition-opacity">
                      <span className="text-sm">View Gallery</span>
                      <svg
                        className="w-5 h-5 group-hover:translate-x-2 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        ) : (
          /* Gallery View */
          <div>
            {/* Back Button & Header */}
            <div className="mb-12">
              <button
                onClick={() => setSelectedCategory(null)}
                className="inline-flex items-center gap-2 px-4 py-2 mb-6 bg-white/10 hover:bg-purple-600/50 rounded-lg text-white transition-all"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Back to Categories
              </button>

              {categories.map((cat) =>
                cat.id === selectedCategory ? (
                  <div key={cat.id}>
                    <h2 className="text-4xl font-bold text-white mb-2">
                      {cat.icon} {cat.name}
                    </h2>
                    <p className="text-white/70">Showing {cat.images.length} items from this category</p>
                  </div>
                ) : null
              )}
            </div>

            {/* Full Gallery Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
              {categories.map((category) =>
                category.id === selectedCategory
                  ? category.images.map((img, idx) => (
                      <div
                        key={idx}
                        className="group relative overflow-hidden rounded-2xl border border-white/10 hover:border-purple-400/50 transition-all duration-300 bg-gradient-to-br from-white/5 to-white/2 h-96"
                      >
                        <Image
                          src={img}
                          alt={`${category.name} ${idx + 1}`}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                          <div>
                            <h3 className="text-lg font-semibold text-white">
                              {category.name}
                            </h3>
                            <p className="text-white/80 text-sm">Item {idx + 1}</p>
                          </div>
                        </div>
                      </div>
                    ))
                  : null
              )}
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
