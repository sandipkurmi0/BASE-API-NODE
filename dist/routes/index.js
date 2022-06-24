"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _userRoute = _interopRequireDefault(require("./userRoute"));

var _postRoute = _interopRequireDefault(require("./postRoute"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/* import express from 'express';

const router = express.Router();


router.get('/', (req, res) => {
  res.render('index', { title: 'Express' });
});

export default router; */
var router = _express["default"].Router();

(0, _userRoute["default"])(router);
(0, _postRoute["default"])(router);
var _default = router;
exports["default"] = _default;