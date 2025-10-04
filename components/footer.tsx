import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-800 p-6 flex justify-between items-center">
      <p>&copy; {new Date().getFullYear()} MyPortfolio</p>
      
      <div className="flex space-x-6">
        {/* LinkedIn icon and link that with my profile*/}
        <a
          href="https://www.linkedin.com/in/nishi-patel-848101328/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image src="/linkdin.png" alt="LinkedIn"  width={80} height={80} />
        </a>

        {/* GitHub icon and link that with my profile*/}
        <a href="https://github.com/200613775" target="_blank" rel="noopener noreferrer"
        >
          <Image src="/github.png" alt="GitHub" width={60} height={60} />
        </a>
      </div>
    </footer>
  );
}
