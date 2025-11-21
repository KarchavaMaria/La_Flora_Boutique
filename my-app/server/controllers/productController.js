import { ProductModel } from '../models/productModel.js';

export const ProductController = {
  getAll: (req, res) => {
    ProductModel.getAll((err, result) => {
      if (err) return res.status(500).json({ error: err });
      res.json(result);
    });
  },
  getById: (req, res) => {
    const id = req.params.id;
    ProductModel.getById(id, (err, result) => {
      if (err) return res.status(500).json({ error: err });
      if (result.length === 0)
        return res.status(404).json({ error: 'Product not found' });
      res.json(result[0]);
    });
  },

  getByCategory: (req, res) => {
    const categoryId = req.params.id;
    ProductModel.getByCategory(categoryId, (err, results) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ error: err });
      }
      res.json(results);
    });
  },
};
