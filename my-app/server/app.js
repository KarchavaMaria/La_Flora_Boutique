import express from 'express';
import cors from 'cors';
import path from 'path';
import dotenv from 'dotenv';
import TelegramBot from 'node-telegram-bot-api';
import productRoutes from './routes/productRoutes.js';
import orderRoutes from './routes/orderRoutes.js';
import messageRoutes from './routes/messageRoutes.js';
import authRoutes from './routes/authRoutes.js';
import favoritesRoutes from './routes/favoritesRoutes.js';
import { globalLimiter } from './middleware/rateLimiter.js';
import {fileURLToPath} from "url";

dotenv.config();
const app = express();

app.use(express.json());
app.use(
  cors({
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
  })
);

export const bot = new TelegramBot(process.env.TELEGRAM_BOT_TOKEN, {
  polling: false,
});

app.use('/uploads', express.static(path.join(process.cwd(), 'uploads')));

app.use(globalLimiter);

app.use('/api/products', productRoutes);
app.use('/api/order', orderRoutes);
app.use('/api/message', messageRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/favorites', favoritesRoutes);

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const clientBuildPath = path.join(__dirname, "../client/build");
app.use(express.static(clientBuildPath));

export default app;