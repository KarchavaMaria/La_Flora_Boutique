import { db } from '../config/db.js';

export const MessageModel = {
  create: (data, callback) => {
    const sql =
      'INSERT INTO message ( email, phone, message, name) VALUES (?,?,?,?)';

    const values = [data.email, data.phone, data.message, data.name];
    db.query(sql, values, callback);
  },
};
