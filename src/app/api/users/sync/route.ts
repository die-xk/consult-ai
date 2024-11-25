import { NextResponse } from 'next/server';
import { createOrUpdateUser } from '@/services/userService';

export async function POST(request: Request) {
  try {
    const { user } = await request.json();
    
    // No need for token verification since we're using the Firebase user object directly
    const dbUser = await createOrUpdateUser(user);
    
    return NextResponse.json(dbUser);
  } catch (error) {
    console.error('Error syncing user:', error);
    return NextResponse.json(
      { error: 'Failed to sync user' },
      { status: 500 }
    );
  }
} 