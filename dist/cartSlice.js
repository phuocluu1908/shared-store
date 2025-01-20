import { createSlice } from '@reduxjs/toolkit';
var initialState = {
  // items: [
  //   {
  //       "id": 6,
  //       "title": "Solid Gold Petite Micropave",
  //       "image": "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
  //       "price": 168,
  //       "quantity": 2
  //   },
  //   {
  //       "id": 7,
  //       "title": "White Gold Plated Princess",
  //       "image": "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",
  //       "price": 9.99,
  //       "quantity": 1
  //   }
  // ], // Each item: { id, title, price, quantity }
};
var cartSlice = createSlice({
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
    // },
    updateItemQuantity: function updateItemQuantity(state, action) {
      var _action$payload2 = action.payload,
        id = _action$payload2.id,
        quantity = _action$payload2.quantity;
      var idx = state.items.findIndex(function (item) {
        return item.id === id;
      });
      state.items[idx].quantity = quantity;
    },
    clearCart: function clearCart(state) {
      state.items = [];
    }
  }
});
var _cartSlice$actions = cartSlice.actions,
  addItem = _cartSlice$actions.addItem,
  removeItem = _cartSlice$actions.removeItem,
  clearCart = _cartSlice$actions.clearCart,
  updateItemQuantity = _cartSlice$actions.updateItemQuantity;
export { addItem, removeItem, clearCart, updateItemQuantity };
export default cartSlice.reducer;