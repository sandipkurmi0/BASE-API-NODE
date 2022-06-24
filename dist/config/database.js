"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

require('dotenv').config();

var Connection = function Connection() {
  _classCallCheck(this, Connection);

  var url = process.env.MONGODB_URI || "";
  console.log('Establish new connection with url', url);
  _mongoose["default"].Promise = global.Promise; // mongoose.set("useNewUrlParser", true);
  // mongoose.set("useFindAndModify", false);
  // mongoose.set("useCreateIndex", true);
  // mongoose.set("useUnifiedTopology", true);
  // mongoose.set('useNewUrlParser', true);
  // mongoose.set('useUnifiedTopology', true);

  _mongoose["default"].connect(url);
};

var _default = new Connection();

exports["default"] = _default;