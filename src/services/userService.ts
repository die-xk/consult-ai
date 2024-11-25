import { pool } from '@/lib/db';
import { User } from 'firebase/auth';

export interface DBUser {
  id: string;
  email: string;
  name: string | null;
  created_at: Date;
  updated_at: Date;
}

export async function createOrUpdateUser(firebaseUser: User): Promise<DBUser> {
  const { uid, email, displayName } = firebaseUser;
  
  try {
    const [existingUser] = await pool.execute(
      'SELECT * FROM users WHERE id = ?',
      [uid]
    );

    if (Array.isArray(existingUser) && existingUser.length > 0) {
      // Update existing user
      await pool.execute(
        'UPDATE users SET email = ?, name = ? WHERE id = ?',
        [email, displayName, uid]
      );
    } else {
      // Create new user
      await pool.execute(
        'INSERT INTO users (id, email, name) VALUES (?, ?, ?)',
        [uid, email, displayName]
      );
    }

    const [user] = await pool.execute(
      'SELECT * FROM users WHERE id = ?',
      [uid]
    ) as [DBUser[], any];

    return user[0];
  } catch (error) {
    console.error('Error in createOrUpdateUser:', error);
    throw error;
  }
}

export async function getUserById(id: string): Promise<DBUser | null> {
  try {
    const [users] = await pool.execute(
      'SELECT * FROM users WHERE id = ?',
      [id]
    ) as [DBUser[], any];

    return users[0] || null;
  } catch (error) {
    console.error('Error in getUserById:', error);
    throw error;
  }
} 