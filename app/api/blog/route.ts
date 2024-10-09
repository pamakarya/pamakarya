// app/api/comment/route.ts
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const { postId, comment } = await request.json();

  // Validasi input
  if (!postId || !comment) {
    return NextResponse.json({ error: 'Lengkapi semua field!' }, { status: 400 });
  }

  // Simulasi penyimpanan komentar
  console.log(`Komentar baru pada artikel ${postId}: ${comment}`);

  return NextResponse.json({ success: 'Komentar berhasil disimpan!' });
}
