export default function WorksInProgress(): React.JSX.Element {
  const upcomingProjects = [
    {
      id: 1,
      title: "AI-Powered Content Generator",
      description: "Building an intelligent tool that uses Generative AI to create personalized content recommendations based on user preferences and behavior patterns.",
      tech: ["Python", "TensorFlow", "FastAPI"],
      eta: "Q1 2026",
    },
    {
      id: 3,
      title: "Voice Acting & Dubbing Portfolio",
      description: "Compiling a comprehensive portfolio of dubbing and voice acting work, including character voices and multilingual dubbing samples.",
      tech: ["Audio Production", "Voice Acting", "Post-Production"],
      eta: "Q1 2026",
    },
    {
      id: 5,
      title: "Motion Graphics Animation Series",
      description: "Creating a series of professional motion graphics and animations for educational and promotional content using After Effects.",
      tech: ["After Effects", "Adobe Premier Pro", "Design"],
      eta: "Q1 2026",
    },
    {
      id: 6,
      title: "Open Source Contribution Hub",
      description: "Contributing to and maintaining open-source projects in Python, data science, and machine learning communities.",
      tech: ["Python", "GitHub", "Open Source"],
      eta: "Ongoing",
    },
  ];

  return (
    <section id="works-in-progress" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Works in Progress
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Exciting projects I'm currently developing and refining. Check back soon for updates!
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {upcomingProjects.map((project) => (
            <div
              key={project.id}
              className="group relative bg-gradient-to-br from-indigo-500/10 to-purple-600/10 rounded-2xl p-6 border border-purple-400/20 hover:border-purple-400/50 transition-all duration-300 overflow-hidden"
            >
              {/* Animated background */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/0 via-purple-600/5 to-purple-600/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                {/* Header with ETA */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl lg:text-2xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-white/70 text-sm mb-4">
                      {project.description}
                    </p>
                  </div>
                  <div className="ml-4 flex-shrink-0">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-sm ${
                      project.eta === "Ongoing"
                        ? "bg-green-500/80 text-white"
                        : "bg-blue-500/80 text-white"
                    }`}>
                      {project.eta}
                    </span>
                  </div>
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className="text-xs px-3 py-1 rounded-full bg-white/5 text-purple-300 border border-purple-400/30 hover:bg-white/10 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Hover indicator */}
                <div className="flex items-center gap-2 text-purple-400 text-sm font-medium mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span>Exciting updates coming</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-purple-600/10 to-indigo-600/10 rounded-2xl p-8 border border-purple-400/20">
            <h3 className="text-2xl font-bold text-white mb-4">
              Want to Collaborate or Learn More?
            </h3>
            <p className="text-white/80 mb-6 max-w-2xl mx-auto">
              I'm always open to collaboration, feedback, and new opportunities. Connect with me on GitHub or reach out directly!
            </p>
            <a
              href="https://github.com/monkeybuilds"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-purple-500/50 transition-all"
            >
              <span>Visit My GitHub</span>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
