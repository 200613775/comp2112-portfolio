import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full relative z-50 bg-white/40 backdrop-blur-md border-t border-white/20 shadow-lg flex flex-col md:flex-row items-center justify-between px-6 py-4 rounded-t-xl">

      {/* Copyright */}
      <p className="text-black text-sm md:text-base mb-3 md:mb-0 drop-shadow-md font-medium">
        &copy; {new Date().getFullYear()} Nishi • Portfolio
      </p>

      {/* Social Links */}
      <div className="flex space-x-6">
        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/nishi-patel-848101328/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-110 transition-transform"
        >
          <Image 
            src="/linkdin.png" 
            alt="LinkedIn"  
            width={100} 
            height={100} 
          />
        </a>

        {/* GitHub */}
        <a 
          href="https://github.com/200613775" 
          target="_blank" 
          rel="noopener noreferrer"
          className="hover:scale-110 transition-transform"
        >
          <Image 
            src="/github.png" 
            alt="GitHub" 
            width={60} 
            height={60} 
          />
        </a>
      </div>
    </footer>
  )
}
