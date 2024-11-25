import { NextResponse } from 'next/server';
import { pool } from '@/lib/db';
import { cookies } from 'next/headers';
import { decodeJwt } from 'jose';

export async function GET() {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get('token')?.value;

    if (!token) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const decoded = decodeJwt(token);
    const userId = decoded.sub;

    const [proposals] = await pool.execute(
      'SELECT id, prompt, created_at FROM proposals WHERE user_id = ? ORDER BY created_at DESC',
      [userId]
    );

    return NextResponse.json(proposals);
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch proposals' },
      { status: 500 }
    );
  }
} 