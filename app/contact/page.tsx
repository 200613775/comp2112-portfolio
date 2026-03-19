'use client';

import { useState } from "react";
import { useRouter } from "next/navigation";
import { FaPhone, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  const router = useRouter();

  const [name, setName] = useState<string>('');
  const [number, setNumber] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [confirmation, setConfirmation] = useState<string>('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    setConfirmation(`Your name: ${name} | Contact: ${number} | Message: ${message}`);

    setTimeout(() => {
      router.push("/about");
    }, 5000);
  };

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
          Feel free to call or email me anytime!
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
            href="mailto:patelnishi369@gmail.com" 
            className="flex items-center gap-2 text-blue-600 hover:text-blue-800 text-lg font-medium"
          >
            <FaEnvelope /> Email Me
          </a>

        </div>

        {/* 🔹 Form */}
        <form 
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 w-full bg-white/70 backdrop-blur-md p-6 rounded-2xl shadow-lg"
        >
          <input 
            type="text" 
            placeholder="Full Name" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />

          <input 
            type="text" 
            placeholder="Contact Number" 
            value={number} 
            onChange={(e) => setNumber(e.target.value)} 
            className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />

          <textarea 
            placeholder="Your Message" 
            value={message} 
            onChange={(e) => setMessage(e.target.value)} 
            rows={4} 
            className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />

          <button 
            type="submit"
            className="bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-700 transition shadow-lg"
          >
            Submit
          </button>

          {confirmation && (
            <p className="text-green-600 font-medium mt-4 text-center">
              {confirmation} <br />Redirecting to About page...
            </p>
          )}
        </form>

      </section>

      {/* Footer */}
      <footer className="w-full text-center text-gray-700 text-sm mt-12 relative z-10">
        © 2025 Nishi • Portfolio
      </footer>
    </main>
  );
}