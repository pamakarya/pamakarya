// app/not-found.tsx
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="h-screen flex flex-col justify-center items-center text-center bg-gray-100">
      <h1 className="text-5xl font-bold mb-4">404</h1>
      <p className="text-xl mb-8">Halaman yang Anda cari tidak ditemukan.</p>
      <Link href="/" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
        Kembali ke Beranda
      </Link>
    </div>
  );
}
