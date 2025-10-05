import React from "react";
import Image from 'next/image'
import Link from 'next/link'

export default function About() {
  return (
    <section className="max-w-3xl mx-auto">
      <div className="flex flex-col md:flex-row items-start gap-6">
        <div className="w-40 h40 relative rounded-lg overflow-hidden">
            <Image src="/Mypicture.jpeg" alt="Nishi's photo"  width={800} height={200} className="rounded-full shadow-lg np-6"/>
        </div>

        <div>
          <h2 className="text-2xl font-bold np-2">About Me</h2>
          <p className="np-1">
            I am a web developer focused on developing functional website and the application.
            I always eager to learn new technologies which help me to improve my developer experience.
          </p>
          <p className="np-2">
            Apart from the the developer, I also have a knowledge of designing tools like Adobe illustrator, Canva, and figma.
            I know the Logo Creation, and Photoshop.
          </p>
          <p className="np-4">
            My mission is to create and design a website which deliver good readability, and accessiblity. I also like to value new learning.
          </p>

          <Link href="/contact" className="text-indigo-600">Contact me</Link>
        </div>
      </div>
    </section>
  )
}
