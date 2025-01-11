import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [
   
  ], // Each item: { id, title, price, quantity }
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
    decreaseItemQuantity: (state, action) => {
      const itemId = action.payload;
      const existingItem = state.items.find((item) => item.id === itemId);

      if (existingItem) {
        if (existingItem.quantity > 1) {
          existingItem.quantity -= 1;
        } else {
          // Remove item if quantity goes to 0
          state.items = state.items.filter((item) => item.id !== itemId);
        }
      }
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const {
  addItem,
  removeItem,
  decreaseItemQuantity,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
