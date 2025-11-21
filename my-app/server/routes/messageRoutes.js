import express from 'express';
import { MessageController } from '../controllers/messageController.js';

const router = express.Router();

router.post('/', MessageController.create);

export default router;
