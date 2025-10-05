'use client';

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Contact() {
  const router = useRouter();

  const [name, setName] = useState<string>('');
  const [number, setNumber] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [confirmation, setConfirmation] = useState<string>('');

  // Do coding to update state as a value
  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNumber(event.target.value);
  };

  const handleMessageChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(event.target.value);
  };

  // show confirmation when submit button clicked
  const handleSubmit = () => {
    setConfirmation(`Your name: ${name} | Contact: ${number} | Message: ${message}`);

    // after 5 seconds, redirect to the bio page
    setTimeout(() => {
      router.push("/about");
    }, 5000);
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-50 text-gray-800 px-6">
      <h1 className="text-3xl font-bold mb-4">Contact Me</h1>
      <p className="mb-6 text-center text-gray-600">
        Feel free to reach out me at 6475943690 number or you can send message below.
      </p>

      <div className="flex flex-col gap-4 w-full max-w-md bg-white p-6 rounded-xl shadow">
        <input type="text" placeholder="Full Name" value={name} onChange={handleNameChange} className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"/>
        <input type="text" placeholder="Contact Number" value={number} onChange={handleNumberChange} className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"/>
        <textarea placeholder="Your Message" value={message} onChange={handleMessageChange} rows={4} className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400" />
      {/* add a submit button */}
        <button onClick={handleSubmit} className="bg-gray-600 text-white py-2 rounded-md hover:bg-blue-700 transition"> Submit</button>

        {confirmation && (
          <p className="text-green-600 font-medium mt-4 text-center">{confirmation} <br />Redirecting to About page...</p>
       )}
      </div>
    </main>
  );
}
