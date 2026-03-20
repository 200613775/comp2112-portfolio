"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const words = ["Web Developer", "Frontend Designer", "UI/UX Designer", "Creative Coder"];
  const [currentWord, setCurrentWord] = useState(words[0]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const next = (index + 1) % words.length;
      setIndex(next);
      setCurrentWord(words[next]);
    }, 2000);

    return () => clearInterval(interval);
  }, [index, words]);

  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6 bg-gray-50 text-gray-900 relative overflow-hidden">

      {/* Animated Background Glow */}
      <div className="absolute w-[600px] h-[600px] bg-blue-600 opacity-20 blur-[200px] rounded-full -top-32 left-10 animate-pulse"></div>
      <div className="absolute w-[400px] h-[400px] bg-purple-600 opacity-20 blur-[200px] rounded-full bottom-0 right-0 animate-pulse"></div>

      
      {/* Hero Content */}
      <section className="text-center max-w-3xl z-10 relative">
        {/* Overlay to improve readability */}
        <div className="absolute inset-0 bg-black/20 rounded-xl"></div>

        <p className="relative text-4xl md:text-5xl font-bold text-white drop-shadow-2xl mb-4">
          Hi, I am <span className="text-blue-400">Nishi Patel</span>
        </p>

        <h2 className="relative text-2xl md:text-3xl mb-8 font-semibold text-white drop-shadow-2xl">
          I am a <span className="text-purple-400 font-semibold transition-all duration-500 drop-shadow-2xl">{currentWord}</span>
        </h2>

        <p className="relative text-lg md:text-xl text-white/90 drop-shadow-md max-w-2xl mx-auto mb-10">
          I design and develop clean, modern, and responsive web applications. Always learning, always building.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap gap-4 justify-center relative z-10">
          <Link
            href="/about"
            className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 transition shadow-lg text-white"
          >
            About Me
          </Link>
          <Link
            href="/projects"
            className="px-6 py-3 rounded-xl bg-purple-600 hover:bg-purple-700 transition shadow-lg text-white"
          >
            Projects
          </Link>
          <Link
            href="/contact"
            className="px-6 py-3 rounded-xl bg-gray-700 hover:bg-gray-600 transition shadow-lg text-white"
          >
            Contact
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="absolute bottom-6 w-full text-center text-gray-700 text-sm">
        © 2025 Nishi • Portfolio
      </footer>
    </main>
  );
}