import Image from "next/image";

const skills = [
  { name: "JavaScript", icon: "/javascript.png" },
  { name: "TypeScript", icon: "/Typescript.png" },
  { name: "C", icon: "/C.png" },
  { name: "C++", icon: "/C++.png" },
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
    <section className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">My Skills</h1>
      <p className="text-center text-gray-600 mb-10">
        Developing and Designing Skills Which I know or I can work on so far.
      </p>

      <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {skills.map((skill) => (
          <li key={skill.name} className="flex flex-col items-center bg-white shadow-sm rounded-xl p-4 hover:shadow-md transition">
            <div className="w-14 h-14 relative mb-3">
              <Image src={skill.icon} alt={skill.name} fill style={{ objectFit: "contain" }}/>
            </div>
            <p className="text-sm font-medium text-gray-700">{skill.name}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
