// authSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  token: null, // Exemplu de stare, adaptează în funcție de nevoile tale
  user: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { setToken, setUser } = authSlice.actions;
export default authSlice.reducer;
