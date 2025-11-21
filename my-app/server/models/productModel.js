import { db } from '../config/db.js';

export const ProductModel = {
  getAll: (callback) => {
    const sql = `
        SELECT 
        p.id, p.title, p.price, p.image, p.description, p.stock, p.discountPercent, p.finalPrice,
        GROUP_CONCAT(c.name SEPARATOR ', ') AS categories
        FROM products p
        LEFT JOIN product_categories pc ON p.id = pc.product_id
        LEFT JOIN categories c ON c.id = pc.category_id
        GROUP BY p.id
        `;
    db.query(sql, callback);
  },
  getById: (id, callback) => {
    const sql = `
        SELECT
        p.id, p.title, p.price, p.image, p.description, p.stock, p.discountPercent, p.finalPrice,
        GROUP_CONCAT(c.name SEPARATOR ', ') AS categories
        FROM products p
        LEFT JOIN product_categories pc ON p.id = pc.product_id
        LEFT JOIN categories c ON c.id = pc.category_id
        WHERE p.id = ?
        GROUP BY p.id
        `;
    db.query(sql, [id], callback);
  },
  getByCategory: (categoryId, callback) => {
    const sql = `
        SELECT 
        p.id, p.title, p.price, p.image, p.description, p.stock, p.discountPercent, p.finalPrice
        FROM products p
        JOIN product_categories pc ON p.id = pc.product_id
        LEFT JOIN categories c ON c.id = pc.category_id
        WHERE pc.category_id = ?
        `;
    db.query(sql, [categoryId], callback);
  },
};
