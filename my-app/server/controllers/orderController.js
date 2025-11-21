import { OrderModel } from '../models/orderModel.js';
import { bot } from '../app.js';

export const OrderController = {
  order: (req, res) => {
    const {
      phone,
      name,
      family,
      email,
      address,
      products,
      totalPrice,
      node,
      city,
      phoneRecipient,
      userId,
    } = req.body;
    const safeProducts = Array.isArray(products) ? products : [];
    const productList =
      safeProducts.length > 0
        ? safeProducts.map((p) => p.title).join(', ')
        : '—';
    OrderModel.order(
      {
        phone,
        name,
        family,
        email,
        address,
        products,
        totalPrice,
        node,
        city,
        phoneRecipient,
        userId,
      },
      (err, result) => {
        if (err) {
          return res.status(500).json({ error: err });
        }
        if (result) {
          const message = `
                    📦 *Order*
                    👤 Name: ${name} ${family}
                    📞 Phone: ${phone}
                    📧 Email: ${email}
                    🏛️ City: ${city}
                    📍 Address: ${address || 'address recipient'}
                    💰 Total Sum: ${totalPrice}
                    📞 Phone Recipient: ${phoneRecipient}
                    🛍️ Products: ${productList}
                     
                    💬 Node: ${node || '—'}
                    `;
          bot.sendMessage(process.env.TELEGRAM_CHAT_ID, message, {
            parse_mode: 'Markdown',
          });

          res.json({ success: true });
        }
      }
    );
  },
  quickOrder: (req, res) => {
    const { phone } = req.body;

    OrderModel.quickOrder({ phone }, (err, result) => {
      if (err) {
        return res.status(500).json({ error: err });
      }
      if (result) {
        const message = `
                    📞 *Quick order*
                     Свяжитесь с клиентом:
                     Телефон: ${phone}
                `;
        bot.sendMessage(process.env.TELEGRAM_CHAT_ID, message, {
          parse_mode: 'Markdown',
        });

        res.json({ success: true });
      }
    });
  },
  getUserOrders: (req, res) => {
    const userId = req.params.userId;

    OrderModel.getUserOrders({ userId }, (err, result) => {
      if (err) return res.status(500).json({ error: err });
      if (result) {
        res.json(result);
      }
    });
  },
};
