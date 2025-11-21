import express from 'express';
import { OrderController } from '../controllers/orderController.js';

const router = express.Router();

router.post('/', OrderController.order);
router.post('/quick-order', OrderController.quickOrder);
router.get('/user/:userId', OrderController.getUserOrders);

export default router;
