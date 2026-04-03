import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export async function GET() {
  if (!process.env.POSTGRES_URL) {
    return NextResponse.json({ error: 'Database not configured' }, { status: 503 });
  }
  try {
    const { rows } = await sql`SELECT * FROM appointments ORDER BY created_at DESC`;
    return NextResponse.json(rows);
  } catch (error: any) {
    // If table doesn't exist yet, return empty array
    if (error.message && error.message.includes('relation "appointments" does not exist')) {
      return NextResponse.json([]);
    }
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function POST(request: Request) {
  if (!process.env.POSTGRES_URL) {
    return NextResponse.json({ error: 'Database not configured' }, { status: 503 });
  }
  try {
    // Auto-initialize table if it doesn't exist
    await sql`
      CREATE TABLE IF NOT EXISTS appointments (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        phone VARCHAR(50) NOT NULL,
        date VARCHAR(50) NOT NULL,
        time VARCHAR(50) NOT NULL,
        department VARCHAR(100) NOT NULL,
        reason TEXT NOT NULL,
        status VARCHAR(50) DEFAULT 'pending',
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      );
    `;

    const body = await request.json();
    const { name, phone, date, time, department, reason } = body;

    const { rows } = await sql`
      INSERT INTO appointments (name, phone, date, time, department, reason)
      VALUES (${name}, ${phone}, ${date}, ${time}, ${department}, ${reason})
      RETURNING *;
    `;
    return NextResponse.json(rows[0], { status: 201 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
