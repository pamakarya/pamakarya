// app/api/contact/route.ts
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const { name, email, message } = await request.json();

  // Lakukan validasi sederhana
  if (!name || !email || !message) {
    return NextResponse.json({ error: 'Lengkapi semua field!' }, { status: 400 });
  }

  // Simulasi penyimpanan data ke database
  console.log(`Pesan dari ${name} (${email}): ${message}`);

  return NextResponse.json({ success: 'Pesan berhasil dikirim!' });
}
