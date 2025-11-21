import { AuthController } from '../controllers/authController.js';
import express from 'express';
import { authLimiter } from '../middleware/rateLimiter.js';
import { AuthMiddleware } from '../middleware/authMiddleware.js';
const router = express.Router();

router.post('/register', authLimiter, AuthController.register);
router.post('/login', authLimiter, AuthController.login);
router.put('/update', AuthController.update);
router.get('/me', AuthMiddleware, AuthController.getMe);

export default router;
