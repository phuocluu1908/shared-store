import store from './store';
import { login, logout } from './userSlice';
import { addItem, removeItem } from './cartSlice';

// Export anything you want consumers to use.
// For instance:
export {
  store,
  login,
  logout,
  addItem,
  removeItem
};
