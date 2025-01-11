"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _toolkit = require("@reduxjs/toolkit");
var _userSlice = _interopRequireDefault(require("./userSlice"));
var _cartSlice = _interopRequireDefault(require("./cartSlice"));
var _productSlice = _interopRequireDefault(require("./productSlice"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var store = (0, _toolkit.configureStore)({
  reducer: {
    user: _userSlice["default"],
    cart: _cartSlice["default"],
    products: _productSlice["default"]
  }
});
var _default = exports["default"] = store;