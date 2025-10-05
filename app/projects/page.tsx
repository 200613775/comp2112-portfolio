import Image from 'next/image'

const projects = [
    { title: 'Logo Design', desc: 'In this one, I have created a logo for the website using illustrator in my first semister.', img: '/Project-1.png' },
    { title: 'Song Lyrics', desc: 'In this project, I have created a webpage where I added a song lyrics in HTMl and through CSS I have done styling for the words, and added background image as well. In footer I have added a link for the actual lyrics website.', img: '/project-2.png' },
    { title: 'Book Search', desc: 'I have build a website for book search by writer using API in JavaScript.', img: '/project1.png' } ]

export default function Projects() {
  return (
    <section className="max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Projects</h2>
      <p>Here is some projects Which shows my skiils in developin and designing.</p>
      
      <div className="grid md:grid-cols-3 gap-6">
        {projects.map((p) => (
          <article key={p.title} className="bg-white rounded-md p-4 shadow-sm">
            <div className="h-36 w-full relative mb-3">
              <Image src={p.img} alt={p.title} fill style={{objectFit:'cover'}} />
            </div>
            <h3 className="font-semibold">{p.title}</h3>
            <p className="text-sm mt-2">{p.desc}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

