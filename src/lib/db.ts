import mysql from 'mysql2/promise';

const pool = mysql.createPool({
  host: 'sql707.your-server.de',
  user: 'consultaipro',
  password: 'DJsnsbUaT24PJHjm',
  database: 'consultaipro_db1',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// Test the connection
async function testConnection() {
  try {
    const connection = await pool.getConnection();
    console.log('Database connected successfully');
    connection.release();
    return true;
  } catch (error) {
    console.error('Database connection failed:', error);
    return false;
  }
}

export { pool, testConnection }; 