import { useState } from "react";

export default function Header(): React.JSX.Element {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#110720]/80 backdrop-blur-sm border-b border-white/10">
      <nav className="px-6 py-4">
        <div className="container mx-auto max-w-6xl flex items-center justify-between h-full">
          <a
            href="/"
            className="text-2xl font-bold text-white hover:text-purple-400 transition-colors"
          >
            <span className="inline-block text-2xl font-extrabold tracking-wide calligraphy">Carbon Monkey</span>
          </a>
          <ul className="flex items-center gap-8 list-none m-0 p-0">
            <li className="m-0 p-0">
              <a 
                href="#home" 
                className="text-white hover:text-purple-400 transition-colors text-base font-normal"
              >
                Home
              </a>
            </li>
            <li className="m-0 p-0">
              <a 
                href="#about" 
                className="text-white hover:text-purple-400 transition-colors text-base font-normal"
              >
                About
              </a>
            </li>
            <li className="m-0 p-0">
              <a 
                href="#lab" 
                className="text-white hover:text-purple-400 transition-colors text-base font-normal"
              >
                Lab
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
