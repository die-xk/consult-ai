import { NextResponse } from 'next/server';
import { pool } from '@/lib/db';
import { cookies } from 'next/headers';
import { decodeJwt } from 'jose';

interface Context {
  params: { id: string }
}

export async function GET(
  request: Request,
  context: Context
): Promise<NextResponse> {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get('token')?.value;

    if (!token) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const decoded = decodeJwt(token);
    const userId = decoded.sub;

    const [proposals] = await pool.execute(
      'SELECT * FROM proposals WHERE id = ? AND user_id = ?',
      [context.params.id, userId]
    );

    if (!Array.isArray(proposals) || proposals.length === 0) {
      return NextResponse.json({ error: 'Proposal not found' }, { status: 404 });
    }

    return NextResponse.json(proposals[0]);
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch proposal' },
      { status: 500 }
    );
  }
} 