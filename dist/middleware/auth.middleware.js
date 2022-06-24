"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _jsonwebtoken = require("jsonwebtoken");

// eslint-disable-next-line import/no-extraneous-dependencies
var _default = function _default(req, res, next) {
  try {
    if (req.headers.authorization) {
      var token = req.headers.authorization.replace('Bearer ', ''); // console.log('token',token);

      try {
        var decoded = (0, _jsonwebtoken.verify)(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
      } catch (err) {
        res.status(403).send({
          error: true,
          statusCode: 403,
          message: 'Invalid Authorization token!'
        });
      }
    } else {
      res.status(401).send({
        error: true,
        statusCode: 401,
        message: 'Required Authorization token!'
      });
    }
  } catch (e) {
    res.status(401).send({
      error: true,
      statusCode: 401,
      message: 'Required Authorization token!'
    });
  }
};

exports["default"] = _default;