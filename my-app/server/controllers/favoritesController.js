import { FavoritesModel } from '../models/favoritesModel.js';

export const FavoritesController = {
  addFavorites: (req, res) => {
    const { user_id, product_id } = req.body;
    FavoritesModel.addFavorites({ user_id, product_id }, (err, result) => {
      if (err) return res.status(500).json({ error: err });
      if (result) return res.status(200).json(result);
    });
  },
  deleteFavorites: (req, res) => {
    const { user_id, product_id } = req.body;
    FavoritesModel.deleteFavorites({ user_id, product_id }, (err, result) => {
      if (err) return res.status(500).json({ error: err });
      if (result) return res.status(200).json(result);
    });
  },
  getUserFavorites: (req, res) => {
    const { user_id } = req.body;
    FavoritesModel.getUserFavorites({ user_id }, (err, result) => {
      if (err) return res.status(500).json({ error: err });
      if (result) return res.status(200).json(result);
    });
  },
};
