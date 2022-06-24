"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _PostController = _interopRequireDefault(require("../controllers/PostController"));

var _auth = _interopRequireDefault(require("../middleware/auth.middleware"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = function _default(router) {
  router.get("/api/posts", _PostController["default"].getAll);
  router.post("/api/post", _PostController["default"].insert);
  router.get("/api/post/:id", _PostController["default"].get);
  router.put("/api/post/:id", _PostController["default"].update);
  router["delete"]("/api/post/:id", _PostController["default"]["delete"]);
};

exports["default"] = _default;