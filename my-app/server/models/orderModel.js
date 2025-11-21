import { db } from '../config/db.js';

export const OrderModel = {
  order: (data, callback) => {
    const sql = `
        INSERT INTO orders (phone, name, family, email, address, products, totalPrice, node, city, phoneRecipient, userId)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ? ,? ,?)
        `;

    const values = [
      data.phone,
      data.name,
      data.family,
      data.email,
      data.address || '',
      JSON.stringify(data.products),
      data.totalPrice,
      data.node || '',
      data.city,
      data.phoneRecipient,
      data.userId,
    ];
    db.query(sql, values, callback);
  },
  quickOrder: (data, callback) => {
    const sql = `
        INSERT INTO quick_orders ( phone )
        VALUES (?)
        `;

    db.query(sql, [data.phone], callback);
  },
  getUserOrders: (data, callback) => {
    const sql = `
        SELECT * FROM orders WHERE userId = ?`;

    db.query(sql, [data.userId], callback);
  },
};
