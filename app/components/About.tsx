import Image from "next/image";

export default function About(): React.JSX.Element {

  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        {/* Technical Skills Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8">
            Technical Skills & Tools
          </h2>
          <p className="text-xl max-w-6xl mx-auto text-white/90">
            Proficient in Python, Data Science frameworks, and modern development tools. Experienced with DaVinci Resolve, After Effects, and various automation technologies.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-20">
          {/* Programming */}
          <div className="bg-gradient-to-br from-blue-500/10 to-blue-600/5 p-6 rounded-2xl border border-blue-400/20 hover:border-blue-400/40 transition-all">
            <div className="flex items-center gap-2 mb-4">
              <svg className="w-6 h-6 text-blue-400" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                <path d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <h3 className="text-xl font-semibold text-white">Programming</h3>
            </div>
            <div className="space-y-3">
              {["Python", "Java", "SQL", "JavaScript"].map((skill) => (
                <div key={skill} className="flex items-center justify-between">
                  <span className="text-white/80">{skill}</span>
                </div>
              ))}
            </div>
          </div>

          {/* AI & Data Science */}
          <div className="bg-gradient-to-br from-purple-500/10 to-purple-600/5 p-6 rounded-2xl border border-purple-400/20 hover:border-purple-400/40 transition-all">
            <div className="flex items-center gap-2 mb-4">
              <svg className="w-6 h-6 text-purple-400" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z" />
              </svg>
              <h3 className="text-xl font-semibold text-white">AI & Data Science</h3>
            </div>
            <div className="space-y-3">
              {["Generative AI", "Machine Learning", "Data Analysis", "TensorFlow"].map((skill) => (
                <div key={skill} className="flex items-center justify-between">
                  <span className="text-white/80">{skill}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Creative Tools */}
          <div className="bg-gradient-to-br from-pink-500/10 to-pink-600/5 p-6 rounded-2xl border border-pink-400/20 hover:border-pink-400/40 transition-all">
            <div className="flex items-center gap-2 mb-4">
              <svg className="w-6 h-6 text-pink-400" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
              </svg>
              <h3 className="text-xl font-semibold text-white">Creative Tools</h3>
            </div>
            <div className="space-y-3">
              {["Adobe Premiere Pro", "After Effects", "DaVinci Resolve", "Canva"].map((skill) => (
                <div key={skill} className="flex items-center justify-between">
                  <span className="text-white/80 text-sm">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Professional & Soft Skills */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-20">
          <div className="bg-gradient-to-br from-white/3 to-white/6 p-6 rounded-2xl border border-white/10">
            <h3 className="text-2xl font-semibold text-white mb-4 flex items-center gap-2">
              <span className="text-2xl">⚙️</span> Professional Skills
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {["Problem Solving", "Research", "Communication", "Teamwork", "Leadership", "Adaptability"].map((skill) => (
                <div key={skill} className="bg-white/5 rounded-lg p-3 text-center">
                  <p className="text-white/90 text-sm">{skill}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-white/3 to-white/6 p-6 rounded-2xl border border-white/10">
            <h3 className="text-2xl font-semibold text-white mb-4 flex items-center gap-2">
              <span className="text-2xl">🎨</span> Creative Interests
            </h3>
            <ul className="text-white/90 space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-purple-400 mt-1">▸</span>
                <span><strong>Video Editing & Motion Graphics:</strong> Creating engaging visual content</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-purple-400 mt-1">▸</span>
                <span><strong>Dubbing & Voice Acting:</strong> Passionate about audio storytelling</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-purple-400 mt-1">▸</span>
                <span><strong>Game Development:</strong> Exploring Unity and game mechanics</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Certifications Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Certifications & Achievements
          </h2>
          <p className="text-white/80">Continuous learning and professional development</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: "Python Mastery", issuer: "Verified Completion", icon: "🐍" },
            { title: "AI & Machine Learning", issuer: "Advanced Course", icon: "🤖" },
            { title: "Adobe Creative Suite", issuer: "Professional Certified", icon: "🎬" },
            { title: "Event Management", issuer: "TedxBITD", icon: "📋" },
            { title: "Data Analysis", issuer: "Professional Certified", icon: "📊" },
            { title: "Communication Excellence", issuer: "Workshop Certified", icon: "💬" },
          ].map((cert, idx) => (
            <div
              key={idx}
              className="bg-gradient-to-br from-yellow-500/10 to-yellow-600/5 p-6 rounded-2xl border border-yellow-400/20 hover:shadow-lg hover:shadow-yellow-500/20 transition-all"
            >
              <div className="text-4xl mb-3">{cert.icon}</div>
              <h4 className="text-lg font-semibold text-white mb-2">{cert.title}</h4>
              <p className="text-white/70 text-sm">{cert.issuer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

