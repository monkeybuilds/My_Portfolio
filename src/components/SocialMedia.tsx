export default function SocialMedia(): React.JSX.Element {
  const socialLinks = [
    {
      id: 1,
      platform: "YouTube",
      channel: "Builds Monkey",
      description: "Tech tutorials, coding projects, and development insights",
      url: "https://www.youtube.com/@buildsmonkey",
      icon: "▶️",
      color: "from-red-600/20 to-red-700/20",
      borderColor: "border-red-400/20",
      hoverBg: "hover:from-red-600/30 hover:to-red-700/30",
      hoverBorder: "hover:border-red-400/60",
      textColor: "text-red-400",
    },
    {
      id: 2,
      platform: "YouTube",
      channel: "Edits and Montages",
      description: "Gaming content, epic montages, and entertainment videos",
      url: "https://www.youtube.com/@atharvdevops",
      icon: "🎮",
      color: "from-yellow-600/20 to-yellow-700/20",
      borderColor: "border-yellow-400/20",
      hoverBg: "hover:from-yellow-600/30 hover:to-yellow-700/30",
      hoverBorder: "hover:border-yellow-400/60",
      textColor: "text-yellow-400",
    },
    {
      id: 3,
      platform: "Instagram",
      channel: "atharvapath",
      description: "Creative design, lifestyle, and behind-the-scenes content",
      url: "https://www.instagram.com/atharvapath",
      icon: "📷",
      color: "from-pink-600/20 to-purple-700/20",
      borderColor: "border-pink-400/20",
      hoverBg: "hover:from-pink-600/30 hover:to-purple-700/30",
      hoverBorder: "hover:border-pink-400/60",
      textColor: "text-pink-400",
    },
    {
      id: 4,
      platform: "Instagram",
      channel: "thrivoxesports",
      description: "Gaming, esports, and entertainment community",
      url: "https://www.instagram.com/thrivoxesports",
      icon: "🏆",
      color: "from-cyan-600/20 to-blue-700/20",
      borderColor: "border-cyan-400/20",
      hoverBg: "hover:from-cyan-600/30 hover:to-blue-700/30",
      hoverBorder: "hover:border-cyan-400/60",
      textColor: "text-cyan-400",
    },
  ];

  return (
    <section id="social-media" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Connect & Follow
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Join my communities on YouTube and Instagram for tutorials, gaming content, and exciting updates!
          </p>
        </div>

        {/* Social Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {socialLinks.map((link) => (
            <a
              key={link.id}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative overflow-hidden rounded-2xl p-8 border transition-all duration-300 hover:scale-105 hover:shadow-2xl ${link.color} ${link.borderColor} ${link.hoverBorder} ${link.hoverBg} cursor-pointer`}
            >
              {/* Animated gradient background */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/0 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Shine effect */}
              <div className="absolute -inset-full top-0 h-full w-1/3 translate-x-full skew-x-12 bg-gradient-to-r from-transparent to-white/20 group-hover:translate-x-0 transition-transform duration-1000" />

              <div className="relative z-10">
                {/* Header with Icon */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div className={`text-5xl p-3 rounded-xl bg-white/10 group-hover:bg-white/20 transition-all`}>
                      {link.icon}
                    </div>
                    <div>
                      <p className={`text-sm font-semibold ${link.textColor} uppercase tracking-wider`}>
                        {link.platform}
                      </p>
                      <h3 className="text-2xl font-bold text-white group-hover:text-purple-300 transition-colors">
                        {link.channel}
                      </h3>
                    </div>
                  </div>
                  <svg className={`w-6 h-6 ${link.textColor} group-hover:text-white group-hover:translate-x-2 transition-all`} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>

                {/* Description */}
                <p className="text-white/80 text-sm mb-6 leading-relaxed">
                  {link.description}
                </p>

                {/* CTA Button */}
                <div className={`inline-flex items-center gap-2 px-6 py-3 bg-white/10 group-hover:bg-white/20 rounded-lg transition-all duration-300 border border-white/20 group-hover:border-white/40`}>
                  <span className="text-sm font-semibold text-white">Follow Now</span>
                  <svg className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                    <path d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
