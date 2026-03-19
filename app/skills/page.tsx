import Image from "next/image";

const skills = [
  { name: "JavaScript", icon: "/JavaScript.png" },
  { name: "TypeScript", icon: "/Typescript.png" },
  { name: "C#", icon: "/CS.png" },
  { name: "HTML", icon: "/HTML.png" },
  { name: "CSS", icon: "/CSS.png" },
  { name: "ASP.NET", icon: "/ASP.NET.png" },
  { name: "PHP", icon: "/PHP.png" },
  { name: "WordPress", icon: "/wordpress.png" },
  { name: "Illustrator", icon: "/illustrator.png" },
  { name: "Canva", icon: "/Canva.png" },
  { name: "Figma", icon: "/Figma.png" },
  { name: "Logo Creation", icon: "/LogoCreation.png" },
];

export default function Skills() {
  return (
    <main className="min-h-screen relative flex flex-col items-center justify-start pt-28 pb-24 px-6 bg-gray-50 text-gray-900 overflow-hidden">

      {/* Animated Background Glow */}
      <div className="absolute w-[600px] h-[600px] bg-blue-600 opacity-20 blur-[200px] rounded-full -top-32 left-10 animate-pulse"></div>
      <div className="absolute w-[400px] h-[400px] bg-purple-600 opacity-20 blur-[200px] rounded-full bottom-0 right-0 animate-pulse"></div>

      {/* Overlay for text readability */}
      <div className="absolute inset-0 bg-white/20 backdrop-blur-sm pointer-events-none"></div>

      {/* Skills Content */}
      <section className="relative z-10 max-w-5xl w-full text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 drop-shadow-2xl text-gray-900">
          My Skills
        </h1>
        <p className="text-lg md:text-xl text-gray-700 mb-12 drop-shadow-sm">
          Developing and designing skills which I know or can work on so far.
        </p>

        <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {skills.map((skill) => (
            <li
              key={skill.name}
              className="flex flex-col items-center bg-white/70 backdrop-blur-md rounded-2xl p-5 hover:scale-105 transition-transform shadow-lg"
            >
              <div className="w-16 h-16 relative mb-3">
                <Image
                  src={skill.icon}
                  alt={skill.name}
                  fill
                  style={{ objectFit: "contain" }}
                  className="rounded-lg"
                />
              </div>
              <p className="text-gray-900 font-semibold drop-shadow-md">{skill.name}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* Footer */}
      <footer className="w-full text-center text-gray-700 text-sm mt-12">
        © 2025 Nishi • Portfolio
      </footer>
    </main>
  );
}
