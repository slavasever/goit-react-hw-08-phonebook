import { createSlice } from '@reduxjs/toolkit';
import authApi from './auth-API';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [authApi.register.fulfilled]: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isAuthenticated = true;
    },
    [authApi.logIn.fulfilled]: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isAuthenticated = true;
    },
    [authApi.logOut.fulfilled]: (state, _) => {
      state.user = { name: null, email: null };
      state.token = null;
      state.isAuthenticated = false;
    },
  },
});

export default authSlice.reducer;
