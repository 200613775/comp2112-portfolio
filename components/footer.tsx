import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full bg-gray-400/60 backdrop-blur-md text-white flex items-center justify-between p-4 rounded-t-xl shadow-md mt-10">
      <p className="text-sm">
        &copy; {new Date().getFullYear()} MyPortfolio
      </p>

      <div className="flex space-x-6">
        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/nishi-patel-848101328/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:opacity-80 transition"
        >
          <Image 
            src="/linkdin.png" 
            alt="LinkedIn"  
            width={30} 
            height={30} 
          />
        </a>

        {/* GitHub */}
        <a 
          href="https://github.com/200613775" 
          target="_blank" 
          rel="noopener noreferrer"
          className="hover:opacity-80 transition"
        >
          <Image 
            src="/github.png" 
            alt="GitHub" 
            width={30} 
            height={30} 
          />
        </a>
      </div>
    </footer>
  );
}
