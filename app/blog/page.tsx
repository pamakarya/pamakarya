// app/blog/page.tsx
import Link from 'next/link';

const blogPosts = [
  { id: 1, title: 'Tips Merenovasi Gedung Kantor', date: '2024-10-07', content: 'Artikel ini membahas tentang cara renovasi kantor dengan efisien.' },
  { id: 2, title: 'Perencanaan Konstruksi yang Efektif', date: '2024-09-30', content: 'Pelajari perencanaan konstruksi yang efektif untuk proyek besar.' },
];

export default function BlogPage() {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Blog Kami</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {blogPosts.map((post) => (
            <div key={post.id} className="bg-white p-6 shadow-md rounded-lg">
              <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
              <p className="text-sm text-gray-500 mb-4">{post.date}</p>
              <p>{post.content}</p>
              <Link href={`/blog/${post.id}`} className="text-blue-600 hover:underline mt-4 block">
                Baca Selengkapnya
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
