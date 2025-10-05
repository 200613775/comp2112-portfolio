import Link from "next/link";
export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-50 text-gray-800 px-6">
      {/* Hero Section */}
      <section className="text-center max-w-2xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Welcome to My Portfolio
        </h1>
        <p className="text-lg md:text-xl mb-6">
          Hi, I am Nishi Patel and I am passionate developer eager to create meaningful digital experiences.
        </p>
        <p className="italic text-gray-600 mb-10">
          “My mission is to design and build user-friendly applications that combine creativity, technology, and functionality.”
        </p>

         {/* Added another buttons on my homepage */}
        <Link href="/about" className="inline-block bg-gray-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-600 transition">About Me</Link>
        <Link href="/contact" className="inline-block bg-gray-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-600 transition ml-3">Contact Me</Link>
        <Link href="/skills" className="inline-block bg-gray-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-600 transition ml-3">More about my skills</Link>
      </section>

      {/* style the footer */}
      <footer className="footer">
        © 2025 Nishi. All rights reserved.
      </footer>
    </main>
  );
}
