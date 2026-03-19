'use client';

import { useState } from "react";
import { FaPhone, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  
  const [] = useState<string>('');
  const [] = useState<string>('');


  return (
    <main className="min-h-screen relative flex flex-col items-center justify-start pt-28 pb-24 px-6 bg-gray-50 text-gray-900 overflow-hidden">

      {/* Background Glow */}
      <div className="absolute w-[600px] h-[600px] bg-blue-600 opacity-20 blur-[200px] rounded-full -top-32 left-10 animate-pulse"></div>
      <div className="absolute w-[400px] h-[400px] bg-purple-600 opacity-20 blur-[200px] rounded-full bottom-0 right-0 animate-pulse"></div>

      <div className="absolute inset-0 bg-white/20 backdrop-blur-sm pointer-events-none"></div>

      {/* Content */}
      <section className="relative z-10 w-full max-w-md text-center">

        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-gray-900">
          Contact Me
        </h1>

        <p className="mb-6 text-gray-700 text-lg">
         I’m always open to new opportunities, collaborations, or just a friendly conversation. If you’d like to get in touch, feel free to call, or send an email. I’ll respond as soon as possible.
        </p>

        {/* 🔹 Call & Email Section */}
        <div className="flex justify-center gap-8 mb-6">

          {/* Call */}
          <a 
            href="tel:+16475943690" 
            className="flex items-center gap-2 text-blue-600 hover:text-blue-800 text-lg font-medium"
          >
            <FaPhone /> Call Me
          </a>

          {/* Email */}
          <a 
            href="mailto:200613775@student.georgianc.on.ca" 
            className="flex items-center gap-2 text-blue-600 hover:text-blue-800 text-lg font-medium"
          >
            <FaEnvelope /> Email Me
          </a>

        </div>

      </section>

      {/* Footer */}
      <footer className="w-full text-center text-gray-700 text-sm mt-12 relative z-10">
        © 2025 Nishi • Portfolio
      </footer>
    </main>
  );
}