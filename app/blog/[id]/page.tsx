// app/blog/[id]/page.tsx
import CommentForm from '@/components/CommentForm';

const blogPosts = [
  { id: 1, title: 'Tips Merenovasi Gedung Kantor', date: '2024-10-07', content: 'Artikel ini membahas tentang cara renovasi kantor dengan efisien.' },
  { id: 2, title: 'Perencanaan Konstruksi yang Efektif', date: '2024-09-30', content: 'Pelajari perencanaan konstruksi yang efektif untuk proyek besar.' },
];

export default function BlogDetailPage({ params }: { params: { id: string } }) {
  const post = blogPosts.find((p) => p.id === parseInt(params.id));

  if (!post) {
    return <p>Artikel tidak ditemukan.</p>;
  }

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">{post.title}</h2>
        <p className="text-sm text-gray-500 text-center mb-12">{post.date}</p>
        <p className="max-w-3xl mx-auto text-lg">{post.content}</p>
        <CommentForm postId={post.id} />
      </div>
    </section>
  );
}
