import express from 'express';
import { ProductController } from '../controllers/productController.js';

const router = express.Router();

router.get('/', ProductController.getAll);
router.get('/:id', ProductController.getById);
router.get('/category/:id', ProductController.getByCategory);

export default router;
