import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full bg-gray-400 text-black flex items-center justify-between p-4 mt-10">
      <p>&copy; {new Date().getFullYear()} MyPortfolio</p>
      
      <div className="flex space-x-6">
        {/* LinkedIn icon and link that with my profile*/}
        <a
          href="https://www.linkedin.com/in/nishi-patel-848101328/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image src="/linkdin.png" alt="LinkedIn"  width={120} height={120} />
        </a>

        {/* GitHub icon and link that with my profile*/}
        <a href="https://github.com/200613775" target="_blank" rel="noopener noreferrer"
        >
          <Image src="/github.png" alt="GitHub" width={40} height={40} />
        </a>
      </div>
    </footer>
  );
}
