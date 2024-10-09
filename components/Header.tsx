// components/Header.tsx
import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-gray-800 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">Pamakarya</h1>
        <nav>
          <Link href="/" className="px-4">Home</Link>
          <Link href="/services" className="px-4">Layanan</Link>
          <Link href="/portfolio" className="px-4">Portfolio</Link>
          <Link href="/about" className="px-4">Tentang Kami</Link>
          <Link href="/contact" className="px-4">Kontak</Link>
        </nav>
      </div>
    </header>
  );
}
