"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.logout = exports.login = exports["default"] = void 0;
var _toolkit = require("@reduxjs/toolkit");
var userSlice = (0, _toolkit.createSlice)({
  name: 'user',
  initialState: {
    name: 'Luu Tran',
    loggedIn: false
  },
  reducers: {
    login: function login(state, action) {
      state.name = action.payload;
      state.loggedIn = true;
    },
    logout: function logout(state) {
      state.name = '';
      state.loggedIn = false;
    }
  }
});
var _userSlice$actions = userSlice.actions,
  login = exports.login = _userSlice$actions.login,
  logout = exports.logout = _userSlice$actions.logout;
var _default = exports["default"] = userSlice.reducer;