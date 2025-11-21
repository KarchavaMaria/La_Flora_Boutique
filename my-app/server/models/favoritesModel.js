import { db } from '../config/db.js';

export const FavoritesModel = {
  addFavorites: (data, callback) => {
    const sql = `INSERT INTO favorites (user_id, product_id) VALUES (?,?);`;

    const values = [data.user_id, data.product_id];

    db.query(sql, values, callback);
  },
  deleteFavorites: (data, callback) => {
    const sql = `DELETE FROM favorites WHERE user_id=? AND product_id=?;`;

    const values = [data.user_id, data.product_id];

    db.query(sql, values, callback);
  },
  getUserFavorites: (data, callback) => {
    const sql = `SELECT * FROM favorites WHERE user_id=? AND product_id=?;`;

    const values = [data.user_id, data.product_id];

    db.query(sql, values, callback);
  },
};
