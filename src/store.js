import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice.js';
import cartReducer from './cartSlice.js';
import productReducer from './productSlice.js';

const store = configureStore({
  reducer: {
    user: userReducer,
    cart: cartReducer,
    products: productReducer
  },
});

export default store;
