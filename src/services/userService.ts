import { pool } from '@/lib/db';
import { User } from 'firebase/auth';
import { RowDataPacket } from 'mysql2';

export interface DBUser {
  id: string;
  email: string;
  name: string | null;
  created_at: Date;
  updated_at: Date;
}

interface UserRow extends RowDataPacket, DBUser {}

export async function createOrUpdateUser(firebaseUser: User): Promise<DBUser> {
  const { uid, email, displayName } = firebaseUser;
  
  try {
    const [existingUser] = await pool.execute<UserRow[]>(
      'SELECT * FROM users WHERE id = ?',
      [uid]
    );

    if (existingUser.length > 0) {
      await pool.execute(
        'UPDATE users SET email = ?, name = ? WHERE id = ?',
        [email, displayName, uid]
      );
    } else {
      await pool.execute(
        'INSERT INTO users (id, email, name) VALUES (?, ?, ?)',
        [uid, email, displayName]
      );
    }

    const [user] = await pool.execute<UserRow[]>(
      'SELECT * FROM users WHERE id = ?',
      [uid]
    );

    return user[0];
  } catch (error) {
    console.error('Error in createOrUpdateUser:', error);
    throw error;
  }
}

export async function getUserById(id: string): Promise<DBUser | null> {
  try {
    const [users] = await pool.execute<UserRow[]>(
      'SELECT * FROM users WHERE id = ?',
      [id]
    );

    return users[0] || null;
  } catch (error) {
    console.error('Error in getUserById:', error);
    throw error;
  }
} 