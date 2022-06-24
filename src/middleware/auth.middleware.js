// eslint-disable-next-line import/no-extraneous-dependencies
import { verify } from 'jsonwebtoken';
import dotenv from "dotenv";
// dotenv.config();

export default (req, res, next) => {
  try {
    if (req.headers.authorization) {
      const token = req.headers.authorization.replace('Bearer ', '');
      try {
        const decoded = verify(token, process.env.JWT_SECRET_KEY);
        req.user = decoded;
        next();
      } catch (err) {
        res.status(403).send({
          error: true,
          statusCode: 403,
          message: 'Invalid Authorization token!',
        });
      }
    } else {
      res.status(401).send({
        error: true,
        statusCode: 401,
        message: 'Required Authorization token!',
      });
    }
  } catch (e) {
    res.status(401).send({
      error: true,
      statusCode: 401,
      message: 'Required Authorization token!',
    });
  }
};

//Grant acess to specific roles
exports.authorize = (...roles) => {
  return (req, res, next) => {
    // console.log(req.user)
    if (!roles.includes(req.user.role)) {
      return {
        error: error.message,
        statusCode: 403,
      };
    }
    next()
  }
}