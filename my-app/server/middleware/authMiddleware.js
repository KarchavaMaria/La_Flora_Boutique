import jwt from 'jsonwebtoken';

export const AuthMiddleware = (req, res, next) => {
  try {
    const authHeaders = req.headers.authorization;
    if (!authHeaders) {
      return res.status(401).send('Not authorized');
    }

    const token = authHeaders.split(' ')[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.user = decoded;
    next();
  } catch (err) {
    console.log(err);
  }
};
