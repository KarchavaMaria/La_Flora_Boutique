import { MessageModel } from '../models/messageModel.js';
import { bot } from '../app.js';

export const MessageController = {
  create: (req, res) => {
    const { email, phone, message, name } = req.body;
    if (!name || !phone || !message) {
      return res.status(400).json({ error: 'Missing fields' });
    }

    const createdAt = new Date().toLocaleString('uk-UA');
    MessageModel.create(
      { email, phone, message, createdAt, name },
      (err, result) => {
        if (err) {
          return res.status(500).json({ error: err });
        }
        if (result) {
          const messageBot = `
                   📦 *СООБЩЕНИЕ*
                       Имя: ${name} 
                    📞 Телефон: ${phone}
                    📧 Email: ${email}
                        Время отправки сообщения: ${createdAt}
                    💬 Комментарий: ${message}
                    `;
          bot.sendMessage(process.env.TELEGRAM_CHAT_ID, messageBot, {
            parse_mode: 'Markdown',
          });
          res.json({ success: true });
        }
      }
    );
  },
};
