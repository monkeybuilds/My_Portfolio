interface Project {
  id: number;
  title: string;
  description: string;
  github?: string;
  tech: string[];
  icon: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Agriculture: AI-Powered Platform",
    description: "Crop detection and impact analysis system using computer vision and deep learning for intelligent crop monitoring. Collaborated with cross-functional teams to support product development.",
    github: "https://github.com/monkeybuilds",
    tech: ["Python", "TensorFlow", "OpenCV"],
    icon: "🌾",
  },
  {
    id: 2,
    title: "Air Tune: Gesture-Controlled Music",
    description: "Intuitive system to control music playback using hand gestures. Implemented touch-free navigation to enhance user interaction and accessibility for seamless experience.",
    github: "https://github.com/monkeybuilds",
    tech: ["Python", "OpenCV", "Audio Processing"],
    icon: "🎵",
  },
  {
    id: 3,
    title: "Flavor AI: Smart Recipe Assistant",
    description: "AI-powered app suggesting recipes based on available ingredients. Used SQLite for storing recipes and enabled intelligent ingredient-based search functionality.",
    github: "https://github.com/monkeybuilds",
    tech: ["Python", "SQLite", "Machine Learning"],
    icon: "🍽️",
  },
  {
    id: 4,
    title: "Vox Cypher: Face Detection & Age Prediction",
    description: "Face detection and age prediction using Python, OpenCV, and deep learning models. Integrated speech recognition for enhanced interaction and user experience.",
    github: "https://github.com/monkeybuilds",
    tech: ["Python", "OpenCV", "Deep Learning"],
    icon: "🎭",
  },
];

export default function Projects(): React.JSX.Element {
  return (
    <section id="lab" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Building intelligent solutions at the intersection of AI, data science, and creative technology
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative bg-gradient-to-br from-indigo-500/10 to-purple-600/10 rounded-2xl p-6 border border-purple-400/20 hover:border-purple-400/50 transition-all duration-300 overflow-hidden hover:shadow-2xl hover:shadow-purple-500/20"
            >
              {/* Animated background overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/0 via-purple-600/5 to-purple-600/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                {/* Icon and Title */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="text-4xl mb-3">{project.icon}</div>
                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
                      {project.title}
                    </h3>
                  </div>
                </div>

                {/* Description */}
                <p className="text-white/80 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className="text-xs px-3 py-1 rounded-full bg-white/5 text-purple-300 border border-purple-400/30 hover:bg-white/10 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* GitHub Link */}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-purple-600/50 text-white font-medium rounded-lg transition-all duration-300 hover:shadow-lg"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.868-.013-1.703-2.782.603-3.369-1.343-3.369-1.343-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.544 2.914 1.184.092-.923.35-1.544.636-1.9-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.286.098-2.683 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.397.203 2.43.1 2.683.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.137 20.195 22 16.44 22 12.017 22 6.484 17.523 2 12 2z" clipRule="evenodd" />
                    </svg>
                    View on GitHub
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
