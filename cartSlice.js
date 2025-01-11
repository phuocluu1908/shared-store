"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.removeItem = exports["default"] = exports.decreaseItemQuantity = exports.clearCart = exports.addItem = void 0;
var _toolkit = require("@reduxjs/toolkit");
var initialState = {
  items: [] // Each item: { id, title, price, quantity }
};
var cartSlice = (0, _toolkit.createSlice)({
  name: 'cart',
  initialState: initialState,
  reducers: {
    addItem: function addItem(state, action) {
      // action.payload is expected to be an object: { id, title, price, quantity }
      var _action$payload = action.payload,
        id = _action$payload.id,
        title = _action$payload.title,
        price = _action$payload.price,
        image = _action$payload.image,
        _action$payload$quant = _action$payload.quantity,
        quantity = _action$payload$quant === void 0 ? 1 : _action$payload$quant;

      // Check if item already exists in the cart
      var existingItem = state.items.find(function (item) {
        return item.id === id;
      });
      if (existingItem) {
        // Increase quantity if item already in cart
        existingItem.quantity += quantity;
      } else {
        // Add new item
        state.items.push({
          id: id,
          title: title,
          image: image,
          price: price,
          quantity: quantity
        });
      }
    },
    removeItem: function removeItem(state, action) {
      // action.payload should be the item id
      var itemId = action.payload;
      state.items = state.items.filter(function (item) {
        return item.id !== itemId;
      });
    },
    decreaseItemQuantity: function decreaseItemQuantity(state, action) {
      var itemId = action.payload;
      var existingItem = state.items.find(function (item) {
        return item.id === itemId;
      });
      if (existingItem) {
        if (existingItem.quantity > 1) {
          existingItem.quantity -= 1;
        } else {
          // Remove item if quantity goes to 0
          state.items = state.items.filter(function (item) {
            return item.id !== itemId;
          });
        }
      }
    },
    clearCart: function clearCart(state) {
      state.items = [];
    }
  }
});
var _cartSlice$actions = cartSlice.actions,
  addItem = exports.addItem = _cartSlice$actions.addItem,
  removeItem = exports.removeItem = _cartSlice$actions.removeItem,
  decreaseItemQuantity = exports.decreaseItemQuantity = _cartSlice$actions.decreaseItemQuantity,
  clearCart = exports.clearCart = _cartSlice$actions.clearCart;
var _default = exports["default"] = cartSlice.reducer;