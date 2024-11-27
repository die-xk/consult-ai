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

    if (!proposals[0]) {
      return NextResponse.json({ error: 'Not found' }, { status: 404 });
    }

    // Split content into main sections
    const mainSections = proposals[0].content.split('\n# ').filter(Boolean);
    
    const formatted = {
      id: proposals[0].id,
      prompt: proposals[0].prompt,
      created_at: proposals[0].created_at,
      sections: mainSections.map(section => {
        const [title, ...content] = section.split('\n');
        const subsections = content
          .join('\n')
          .split('\n### ')
          .filter(Boolean)
          .map(sub => {
            const [subTitle, ...subContent] = sub.split('\n');
            return {
              title: subTitle.trim(),
              content: subContent
                .filter(line => line.trim())
                .map(line => {
                  // Handle bullet points
                  if (line.trim().startsWith('-')) {
                    return line.trim();
                  }
                  return line.trim();
                })
            };
          });

        return {
          title: title.trim(),
          subsections
        };
      })
    };

    return NextResponse.json(formatted);
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

export async function DELETE(
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
    
    await pool.execute(
      'DELETE FROM proposals WHERE id = ? AND user_id = ?',
      [id, decoded.sub]
    );

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json(
      { error: 'Failed to delete proposal' },
      { status: 500 }
    );
  }
} 