import store from './store.js';
import { login, logout } from './userSlice.js';
import { addItem, removeItem, updateItemQuantity } from './cartSlice.js';

// Export anything you want consumers to use.
// For instance:
export { store, login, logout, addItem, removeItem, updateItemQuantity };