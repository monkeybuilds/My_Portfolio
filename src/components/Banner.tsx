import { useState, useEffect } from "react";

export default function Banner(): React.JSX.Element {
  const texts = ["Python Developer", "Data Scientist", "Content Creator", "Community Builder"];
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    const currentText = texts[currentTextIndex];
    
    if (!isDeleting) {
      // Typing effect
      if (displayedText.length < currentText.length) {
        const timeout = setTimeout(() => {
          setDisplayedText(currentText.slice(0, displayedText.length + 1));
        }, typingSpeed);
        return () => clearTimeout(timeout);
      } else {
        // Finished typing, wait before deleting
        const timeout = setTimeout(() => {
          setIsDeleting(true);
          setTypingSpeed(50); // Faster deletion
        }, 2000);
        return () => clearTimeout(timeout);
      }
    } else {
      // Deleting effect
      if (displayedText.length > 0) {
        const timeout = setTimeout(() => {
          setDisplayedText(currentText.slice(0, displayedText.length - 1));
        }, typingSpeed);
        return () => clearTimeout(timeout);
      } else {
        // Finished deleting, move to next text
        setIsDeleting(false);
        setTypingSpeed(100); // Reset typing speed
        setCurrentTextIndex((prev) => (prev + 1) % texts.length);
      }
    }
  }, [displayedText, isDeleting, currentTextIndex, texts, typingSpeed]);
  
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-20 px-6"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 lg:items-start">
          {/* Right side - Character image */}
          <div className="flex justify-center lg:justify-end relative w-full lg:w-auto lg:pr-8">
            <div className="relative top-10">
              {/* Profile image */}
              <div className="relative flex flex-col items-center">
                <div className="w-64 h-64 rounded-full overflow-hidden shadow-2xl border-4 border-purple-500/30">
                  <img
                    src="/assets/profile.jpeg"
                    alt="Atharv Pathak"
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="flex gap-3 justify-center mt-4">
                  <span className="inline-flex items-center gap-2 text-xs px-3 py-1 bg-white/5 rounded-full text-white">
                    <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                      <path d="M3 12c0-4.97 4.03-9 9-9s9 4.03 9 9-4.03 9-9 9H6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      <rect x="3" y="3" width="6" height="6" rx="1" fill="currentColor" opacity="0.06" />
                    </svg>
                    <span>Python</span>
                  </span>

                  <span className="inline-flex items-center gap-2 text-xs px-3 py-1 bg-white/5 rounded-full text-white">
                    <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                      <rect x="3" y="5" width="18" height="4" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
                      <rect x="3" y="11" width="18" height="4" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
                      <rect x="3" y="17" width="12" height="4" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
                    </svg>
                    <span>Data</span>
                  </span>

                  <span className="inline-flex items-center gap-2 text-xs px-3 py-1 bg-white/5 rounded-full text-white">
                    <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                      <path d="M12 2c3.866 0 7 3.134 7 7 0 1.657-.672 3.157-1.757 4.242C17.157 14.328 15.657 15 14 15H10c-1.657 0-3.157-.672-4.243-1.758C4.672 12.157 4 10.657 4 9c0-3.866 3.134-7 7-7z" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M9 19c.667 1 2 2 3 2s2.333-1 3-2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span>AI</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 space-y-6 text-center lg:text-left">
            {/* consistent greeting visible across sizes */}
            <div className="mb-2 flex items-center gap-3">
              <img
                src="/assets/arrow.png"
                alt="Arrow pointer"
                className="w-12 h-12"
              />
              <p className="text-white text-lg">
                Hello I am <span className="text-purple-400">Atharv Pathak</span>
              </p>
            </div>
            <div className="">
              <p className="text-2xl"> A multi-disciplinary creator who </p>
              <h1 className="text-5xl tracking-tight lg:text-7xl font-semibold text-white leading-tight">
                judges work
                <br /> by its{" "}
                <span className="relative inline-block">
                  <img src="/assets/circle.png" alt="Circle" className="absolute mt-2" />
                  <span className="bg-gradient-to-r from-violet-600 via-violet-400 to-violet-600 bg-clip-text text-transparent">
                    purpose
                  </span>
                </span>
                …
              </h1>
              <p className="text-md text-white/80">
                Because if the vision doesn't impress you,
                <br /> what else can?
              </p>
            </div>
          </div>
        </div>
        <div className="space-y-3 pt-15 text-center lg:text-left">
          <p className="text-5xl text-white font-bold">
            I&apos;m a {displayedText}
            <span className="animate-pulse">|</span>
          </p>
          <p className="text-lg lg:text-xl text-white/90 tracking-wide flex flex-wrap items-center justify-center lg:justify-start gap-2">
            <span>Currently building innovative solutions at the intersection of</span>
            <span className="text-purple-400 font-semibold">AI & Technology</span>
          </p>
          <p className="text-lg text-white/80 max-w-2xl mt-15 mx-auto lg:mx-0">
            A multi-disciplinary creator passionate about building meaningful
            digital experiences. With expertise spanning Python development, data science,
            and creative content production, I craft solutions that balance innovation
            with impact.
          </p>
        </div>
      </div>
    </section>
  );
}
