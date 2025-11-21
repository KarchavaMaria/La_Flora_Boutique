import { AuthModel } from '../models/authModel.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export const AuthController = {
  register: (req, res) => {
    try {
      const data = req.body;

      if (!data.email || !data.password) {
        return res.status(400).json({ error: 'Email and password required' });
      }

      const hashPassword = bcrypt.hashSync(data.password, 10);
      data.password = hashPassword;

      AuthModel.register(data, (err, result) => {
        if (err) return res.status(500).json({ error: err });

        const token = jwt.sign(
          {
            id: result.insertId,
            email: data.email,
          },
          process.env.JWT_SECRET,
          {
            expiresIn: '7d',
          }
        );

        res.status(201).json({
          message: 'Successfully registered',
          user: {
            id: result.insertId,
            name: data.name,
            email: data.email,
            phone: data.phone,
            city: data.city,
            date: data.date,
            family: data.family,
          },
          token,
        });
      });
    } catch (err) {
      return res.status(500).json({ error: err.message });
    }
  },
  login: (req, res) => {
    try {
      const { email, password } = req.body;

      if (!email || !password) {
        return res.status(400).json({ error: 'Email and password required' });
      }

      AuthModel.login(email, (err, user) => {
        if (err) return res.status(500).json({ error: err.message });

        if (!user)
          return res.status(401).json({ error: 'Invalid email or password' });

        const isMatch = bcrypt.compare(password, user.password);
        if (!isMatch)
          return res.status(401).json({ error: 'Invalid password' });

        const token = jwt.sign(
          {
            id: user.id,
            email: user.email,
          },
          process.env.JWT_SECRET,
          { expiresIn: '7d' }
        );

        return res.status(200).json({
          message: 'Login successfully',
          user: {
            id: user.id,
            name: user.name,
            email: user.email,
            phone: user.phone,
            city: user.city,
            date: user.date,
            family: user.family,
          },
          token,
        });
      });
    } catch (err) {
      return res.status(500).json(err.message || 'Internal server error');
    }
  },
  getMe: (req, res) => {
    res.json(req.user);
  },
  update: (req, res) => {
    console.log('Received body:', req.body);
    const { id } = req.body;
    if (!id) return res.status(400).json({ error: 'User ID is required' });
    AuthModel.update(req.body, (err, user) => {
      if (err) return res.status(500).json({ error: err });
      return res.json({ message: 'User updated successfully', user });
    });
  },
};
