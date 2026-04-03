import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export async function PATCH(request: Request, { params }: { params: Promise<{ id: string }> }) {
  if (!process.env.POSTGRES_URL) {
    return NextResponse.json({ error: 'Database not configured' }, { status: 503 });
  }
  try {
    const { id } = await params;
    const body = await request.json();
    const { status } = body;

    const { rows } = await sql`
      UPDATE messages
      SET status = ${status}
      WHERE id = ${id}
      RETURNING *;
    `;
    return NextResponse.json(rows[0]);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function DELETE(request: Request, { params }: { params: Promise<{ id: string }> }) {
  if (!process.env.POSTGRES_URL) {
    return NextResponse.json({ error: 'Database not configured' }, { status: 503 });
  }
  try {
    const { id } = await params;
    await sql`DELETE FROM messages WHERE id = ${id}`;
    return NextResponse.json({ success: true });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
