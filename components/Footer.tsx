// components/Footer.tsx
import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm">&copy; {new Date().getFullYear()} Pamakarya. All rights reserved.</p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="/about" className="hover:underline">Tentang Kami</a>
          <a href="/services" className="hover:underline">Layanan</a>
          <a href="/contact" className="hover:underline">Kontak</a>
        </div>
      </div>
    </footer>
  );
}
