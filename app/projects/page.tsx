'use client';
export default function Projects() {
  const projects = [
    {
      title: "Ember & Anvil",
      tag: "Coffee Roastery — Landing Page",
      description:
        "A responsive landing page for a fictional small-batch coffee roastery, built to showcase layout, typography, and a warm, editorial visual identity — from hero section through product cards and process breakdown.",
      stack: ["HTML5", "CSS3", "JavaScript"],
      liveUrl: "https://200613775.github.io/project-2/ember-and-anvil.html",
      codeUrl: "https://github.com/200613775/project-2",
      accent: "from-amber-500/20 to-orange-600/10",
    },
    {
      title: "Aerolume Robotics",
      tag: "Hardtech Startup — Landing Page",
      description:
        "A concept landing page for an autonomous inspection-drone startup, exploring a technical, industrial visual direction with a spec table, telemetry stats, and use-case breakdown.",
      stack: ["HTML5", "CSS3", "JavaScript"],
      liveUrl: "https://200613775.github.io/roboticsproject/aerolume-robotics.html",
      codeUrl: "https://github.com/200613775/roboticsproject",
      accent: "from-blue-500/20 to-purple-600/10",
    },
  ]
  return (
    <main className="min-h-screen relative flex flex-col items-center justify-start pt-28 pb-24 px-6 bg-gray-50 text-gray-900 overflow-hidden">

      {/* Animated Background Glow */}
      <div className="absolute w-[600px] h-[600px] bg-blue-600 opacity-20 blur-[200px] rounded-full -top-32 left-10 animate-pulse"></div>
      <div className="absolute w-[400px] h-[400px] bg-purple-600 opacity-20 blur-[200px] rounded-full bottom-0 right-0 animate-pulse"></div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-white/20 backdrop-blur-sm pointer-events-none"></div>

      {/* Content */}
      <section className="relative z-10 max-w-4xl w-full text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 drop-shadow-2xl">
          My Projects
        </h1>

        <p className="text-lg md:text-xl text-gray-700 mb-12">
          A couple of personal builds I use to explore front-end development and visual design.
        </p>

        {/* Project Cards */}
        <div className="grid gap-6 md:grid-cols-2 text-left">
          {projects.map((project) => (
            <div
              key={project.title}
              className={`relative overflow-hidden bg-white/70 backdrop-blur-md rounded-2xl p-6 shadow-lg border border-white/40 bg-gradient-to-br ${project.accent}`}
            >
              <p className="text-xs font-medium uppercase tracking-wide text-gray-500 mb-2">
                {project.tag}
              </p>
              <h2 className="text-2xl font-semibold mb-3">{project.title}</h2>
              <p className="text-gray-700 text-sm mb-4">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs font-medium px-2.5 py-1 rounded-full bg-white/70 text-gray-700 border border-gray-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-3">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium px-4 py-2 rounded-lg bg-gray-900 text-white hover:bg-gray-700 transition"
                >
                  Live Site ↗
                </a>
                <a
                  href={project.codeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium px-4 py-2 rounded-lg bg-white/80 text-gray-900 border border-gray-300 hover:bg-white transition"
                >
                  View Code
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* More coming */}
        <div className="mt-10 bg-white/50 backdrop-blur-md rounded-2xl p-6 shadow-md text-left">
         <h3 className="font-semibold text-gray-900 mb-2">
  💡 What I&apos;m Working On Next
</h3>
          <ul className="text-gray-700 text-sm space-y-1">
            <li>• Learning Webflow for visual site building</li>
            <li>• Expanding into React-based project work</li>
            <li>• Adding more client-style case studies</li>
          </ul>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full text-center text-gray-700 text-sm mt-12">
        © 2026 Nishi • Portfolio
      </footer>
    </main>
  )
}
