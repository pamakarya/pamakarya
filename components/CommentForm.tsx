// components/CommentForm.tsx
'use client';
import { useState } from 'react';

export default function CommentForm({ postId }: { postId: number }) {
  const [comment, setComment] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('Mengirim...');

    try {
      const response = await fetch('/api/comment', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ postId, comment }),
      });

      const result = await response.json();
      if (response.ok) {
        setStatus('Komentar berhasil dikirim!');
        setComment('');
      } else {
        setStatus(`Error: ${result.error}`);
      }
    } catch (error) {
      setStatus('Terjadi kesalahan, coba lagi.');
    }
  };

  return (
    <div className="mt-8">
      <h3 className="text-xl font-semibold mb-4">Tinggalkan Komentar</h3>
      <form onSubmit={handleSubmit} className="bg-white p-4 shadow-md rounded-lg">
        <textarea
          className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          rows={5}
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Tulis komentar Anda di sini..."
        ></textarea>
        <button
          type="submit"
          className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
        >
          Kirim
        </button>
        {status && <p className="mt-4 text-green-500">{status}</p>}
      </form>
    </div>
  );
}
