import dotenv from 'dotenv';
import mysql from 'mysql2';
dotenv.config();

export const db = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

db.getConnection((err, connection) => {
  if (err) {
    console.log('Ошибка подключения:', err);
  } else {
    console.log('✅ Подключено к MySQL');
    connection.release();
  }
});
export default db;
