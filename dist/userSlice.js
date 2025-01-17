import { createSlice } from '@reduxjs/toolkit';
var userSlice = createSlice({
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
  login = _userSlice$actions.login,
  logout = _userSlice$actions.logout;
export { login, logout };
export default userSlice.reducer;