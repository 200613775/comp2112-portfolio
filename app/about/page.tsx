import React from "react";
import Image from 'next/image';
import Link from 'next/link';

export default function About() {
  return (
    <main className="min-h-screen relative flex flex-col items-center justify-start pt-28 pb-24 px-6 bg-gray-50 text-gray-900 overflow-hidden">

      {/* Animated Background Glow */}
      <div className="absolute w-[600px] h-[600px] bg-blue-600 opacity-20 blur-[200px] rounded-full -top-32 left-10 animate-pulse"></div>
      <div className="absolute w-[400px] h-[400px] bg-purple-600 opacity-20 blur-[200px] rounded-full bottom-0 right-0 animate-pulse"></div>

      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-white/20 backdrop-blur-sm pointer-events-none"></div>

      {/* About Content */}
      <section className="relative z-10 max-w-5xl w-full bg-white/70 backdrop-blur-md p-8 rounded-2xl shadow-lg">
        <div className="flex flex-col md:flex-row items-start gap-6">
          
          {/* Profile Image */}
          <div className="w-40 h-40 relative rounded-full overflow-hidden shadow-lg bg-gray-200 p-1">
            <Image 
              src="/myimg.jpeg" 
              alt="Nishi's photo"  
              fill 
              style={{ objectFit: "contain" }} 
            />
          </div>

          {/* Text Content */}
          <div className="text-left">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-gray-900 drop-shadow-md">
              About Me
            </h1>
            <p className="text-gray-700 mb-4 text-lg drop-shadow-sm">
              I am a web developer focused on developing functional websites and applications. I am always eager to learn new technologies that improve my development experience.
            </p>
            <p className="text-gray-700 mb-4 text-lg drop-shadow-sm">
              Apart from development, I also have experience with design tools like Adobe Illustrator, Canva, and Figma. I know Logo Creation and Photoshop as well.
            </p>
            <p className="text-gray-700 mb-6 text-lg drop-shadow-sm">
              My mission is to create and design websites that deliver good readability and accessibility, while always valuing new learning.
            </p>

            <Link 
              href="/contact" 
              className="inline-block px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white transition shadow-lg"
            >
              Contact Me
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full text-center text-gray-700 text-sm mt-12 relative z-10">
        © 2025 Nishi • Portfolio
      </footer>
    </main>
  );
}
