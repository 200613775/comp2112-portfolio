import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full bg-gray-400 text-black flex items-center justify-between p-4 shadow-md">
      <div className="text-xl font-bold">MyPortfolio</div>
      <ul className="flex space-x-6">
        <li>
          <Link href="/" className="hover:text-blue-600">Home</Link>
        </li>
        <li>
          <Link href="/about" className="hover:text-blue-600">About</Link>
        </li>
        <li>
          <Link href="/contact" className="hover:text-blue-600">Contact</Link>
        </li>
         <li>
          <Link href="/skills" className="hover:text-blue-600">Skills</Link>
        </li>
        <li>
          <Link href="/projects" className="hover:text-blue-600">Projects</Link>
        </li>
      </ul>
    </nav>
  );
}
