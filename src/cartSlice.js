import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: []
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

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action) => {
      // action.payload is expected to be an object: { id, title, price, quantity }
      const { id, title, price, image, quantity = 1 } = action.payload;

      // Check if item already exists in the cart
      const existingItem = state.items.find((item) => item.id === id);

      if (existingItem) {
        // Increase quantity if item already in cart
        existingItem.quantity += quantity;
      } else {
        // Add new item
        state.items.push({
          id,
          title,
          image,
          price,
          quantity,
        });
      }
    },
    removeItem: (state, action) => {
      // action.payload should be the item id
      const itemId = action.payload;
      state.items = state.items.filter((item) => item.id !== itemId);
    },
    // },
    updateItemQuantity: (state, action) => {
      const { id, quantity } = action.payload
      const idx = state.items.findIndex((item) => item.id === id);
      state.items[idx].quantity = quantity
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const {
  addItem,
  removeItem,
  clearCart,
  updateItemQuantity
} = cartSlice.actions;

export default cartSlice.reducer;
