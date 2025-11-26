'use client';

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Contact() {
  const router = useRouter();

  const [name, setName] = useState<string>('');
  const [number, setNumber] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [confirmation, setConfirmation] = useState<string>('');

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => setName(event.target.value);
  const handleNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => setNumber(event.target.value);
  const handleMessageChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => setMessage(event.target.value);

  const handleSubmit = () => {
    setConfirmation(`Your name: ${name} | Contact: ${number} | Message: ${message}`);
    setTimeout(() => {
      router.push("/about");
    }, 5000);
  };

  return (
    <main className="min-h-screen relative flex flex-col items-center justify-start pt-28 pb-24 px-6 bg-gray-50 text-gray-900 overflow-hidden">

      {/* Animated Background Glow */}
      <div className="absolute w-[600px] h-[600px] bg-blue-600 opacity-20 blur-[200px] rounded-full -top-32 left-10 animate-pulse"></div>
      <div className="absolute w-[400px] h-[400px] bg-purple-600 opacity-20 blur-[200px] rounded-full bottom-0 right-0 animate-pulse"></div>

      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-white/20 backdrop-blur-sm pointer-events-none"></div>

      {/* Contact Form Section */}
      <section className="relative z-10 w-full max-w-md text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 drop-shadow-2xl text-gray-900">
          Contact Me
        </h1>
        <p className="mb-6 text-gray-700 text-lg drop-shadow-sm">
          Feel free to reach me at 647-594-3690 or send a message below.
        </p>

        <div className="flex flex-col gap-4 w-full bg-white/70 backdrop-blur-md p-6 rounded-2xl shadow-lg">
          <input 
            type="text" 
            placeholder="Full Name" 
            value={name} 
            onChange={handleNameChange} 
            className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input 
            type="text" 
            placeholder="Contact Number" 
            value={number} 
            onChange={handleNumberChange} 
            className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <textarea 
            placeholder="Your Message" 
            value={message} 
            onChange={handleMessageChange} 
            rows={4} 
            className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button 
            onClick={handleSubmit} 
            className="bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-700 transition shadow-lg"
          >
            Submit
          </button>

          {confirmation && (
            <p className="text-green-600 font-medium mt-4 text-center drop-shadow-md">
              {confirmation} <br />Redirecting to About page...
            </p>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full text-center text-gray-700 text-sm mt-12 relative z-10">
        © 2025 Nishi • Portfolio
      </footer>
    </main>
  );
}
