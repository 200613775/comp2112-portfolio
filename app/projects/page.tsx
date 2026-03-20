
export default function Projects() {
  return (
    <main className="min-h-screen relative flex flex-col items-center justify-start pt-28 pb-24 px-6 bg-gray-50 text-gray-900 overflow-hidden">

      {/* Animated Background Glow */}
      <div className="absolute w-[600px] h-[600px] bg-blue-600 opacity-20 blur-[200px] rounded-full -top-32 left-10 animate-pulse"></div>
      <div className="absolute w-[400px] h-[400px] bg-purple-600 opacity-20 blur-[200px] rounded-full bottom-0 right-0 animate-pulse"></div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-white/20 backdrop-blur-sm pointer-events-none"></div>

      {/* Content */}
      <section className="relative z-10 max-w-3xl w-full text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 drop-shadow-2xl">
          My Projects
        </h1>

        <p className="text-lg md:text-xl text-gray-700 mb-10">
          I am currently working on building real-world projects to showcase my skills.
        </p>

        {/* Coming Soon Box */}
        <div className="bg-white/70 backdrop-blur-md rounded-2xl p-8 shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">✨Coming Soon</h2>

          <p className="text-gray-700 mb-4">
            New projects are in progress and will be added here soon. Stay tuned!
          </p>

          <div className="mt-6 text-left">
            <h3 className="font-semibold text-gray-900 mb-2">💡 What I’m Working On</h3>

            <ul className="text-gray-700 text-sm space-y-1">
              <li>• Building responsive websites</li>
              <li>• Creating websites using WordPress</li>
              <li>• Learning React and modern tools</li>
              <li>• Designing clean and simple UI</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full text-center text-gray-700 text-sm mt-12">
        © 2025 Nishi • Portfolio
      </footer>
    </main>
  )
}