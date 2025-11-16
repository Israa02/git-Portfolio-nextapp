import Link from "next/link";

export default function Navbar() {
  return (
    <header className="bg-pink-200 text-black border-b border-pink-300 py-4 px-6 shadow-sm">
      <nav className="flex gap-6 items-center text-lg font-medium">
        <Link href="/" className="hover:text-pink-700 transition"> Home </Link>
        <Link href="/about" className="hover:text-pink-700 transition"> About </Link>
        <Link href="/contact" className="hover:text-pink-700 transition"> Contact</Link>
      </nav>
    </header>
  );
}
