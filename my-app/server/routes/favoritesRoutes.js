import express from 'express';
import { AuthMiddleware } from '../middleware/authMiddleware.js';
import { FavoritesController } from '../controllers/favoritesController.js';

const router = express.Router();

router.post('/', AuthMiddleware, FavoritesController.addFavorites);
router.delete('/', AuthMiddleware, FavoritesController.deleteFavorites);
router.get('/:user_id', AuthMiddleware, FavoritesController.getUserFavorites);

export default router;
