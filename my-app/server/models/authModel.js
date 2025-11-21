import bcrypt from 'bcrypt';
import { db } from '../config/db.js';

export const AuthModel = {
  register: (data, callback) => {
    const { name, email, password } = data;

    db.query('SELECT * FROM users WHERE email = ?', [email], (err, results) => {
      if (err) return callback(err);

      if (results.length > 0) {
        return new Error('Email already exists');
      }
    });

    const hashedPassword = bcrypt.hashSync(password, 10);

    const sql = `INSERT INTO users (name, email, password) VALUES (?, ?, ?)`;

    db.query(sql, [name, email, hashedPassword], (err, result) => {
      if (err) return callback(err);

      const newUser = { id: result.insertId, name, email };
      callback(null, newUser);
    });
  },
  login: (email, callback) => {
    db.query(`SELECT * FROM users WHERE email = ?`, [email], (err, results) => {
      if (err) return callback(err);
      if (results.length === 0) {
        return new Error('User not found');
      }

      const user = results[0];
      callback(null, user);
    });
  },
  update: (data, callback) => {
    const { id, name, email, phone, date, city, family } = data;
    const sql = `
        UPDATE users
        SET name = ?, email = ?, phone = ?, city = ?, date = ?, family = ?
        WHERE id = ?
        `;

    db.query(
      sql,
      [name, email, phone, city, date, family, id],
      (err, results) => {
        if (err) return callback(err);
        if (results.affectedRows === 0)
          return callback(new Error('User not found'));

        const sqlUpdate = `SELECT * FROM users WHERE id = ?`;

        db.query(sqlUpdate, [id], (err, results) => {
          if (err) return callback(err);
          const updatedUser = results[0];
          callback(null, updatedUser);
        });
      }
    );
  },
};
