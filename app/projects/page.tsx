import Image from 'next/image'

const projects = [
    { title: 'Logo Design', desc: 'I created a logo for a website using Illustrator in my first semester.', img: '/projectimg/Project-1.png'},
    { title: 'Song Lyrics', desc: 'A webpage where I added song lyrics in HTML and styled it with CSS. Added background image and a footer link to the original lyrics site.', img: '/projectimg/Project-2.png' },
    { title: 'Book Search', desc: 'Built a website for searching books by author using API in JavaScript.', img: '/projectimg/Project-3.png' }
]

export default function Projects() {
  return (
    <main className="min-h-screen relative flex flex-col items-center justify-start pt-28 pb-24 px-6 bg-gray-50 text-gray-900 overflow-hidden">

      {/* Animated Background Glow */}
      <div className="absolute w-[600px] h-[600px] bg-blue-600 opacity-20 blur-[200px] rounded-full -top-32 left-10 animate-pulse"></div>
      <div className="absolute w-[400px] h-[400px] bg-purple-600 opacity-20 blur-[200px] rounded-full bottom-0 right-0 animate-pulse"></div>

      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-white/20 backdrop-blur-sm pointer-events-none"></div>

      {/* Projects Content */}
      <section className="relative z-10 max-w-5xl w-full text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 drop-shadow-2xl text-gray-900">
          My Projects
        </h1>
        <p className="text-lg md:text-xl text-gray-700 mb-12 drop-shadow-sm">
          Here are some projects which showcase my skills in developing and designing.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((p) => (
            <article key={p.title} className="bg-white/70 backdrop-blur-md rounded-2xl p-5 shadow-lg hover:scale-105 transition-transform">
              <div className="h-36 w-full relative mb-3 rounded-lg overflow-hidden">
                <Image src={p.img} alt={p.title} fill style={{ objectFit:'cover' }} />
              </div>
              <h3 className="font-semibold text-gray-900 text-lg">{p.title}</h3>
              <p className="text-gray-700 text-sm mt-2">{p.desc}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full text-center text-gray-700 text-sm mt-12">
        © 2025 Nishi • Portfolio
      </footer>
    </main>
  )
}
