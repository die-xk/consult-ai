import { pool } from '@/lib/db';
import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { decodeJwt } from 'jose';
import { RowDataPacket } from 'mysql2';

interface ProposalRow extends RowDataPacket {
  id: string;
  content: string;
  prompt: string;
  user_id: string;
  created_at: string;
}

export async function GET(
  request: Request,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await context.params;
    const cookieStore = await cookies();
    const token = cookieStore.get('token')?.value;

    if (!token) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const decoded = decodeJwt(token);
    const [proposals] = await pool.execute<ProposalRow[]>(
      'SELECT * FROM proposals WHERE id = ? AND user_id = ?',
      [id, decoded.sub]
    );

    return NextResponse.json(proposals[0] || { error: 'Not found' });
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
} 