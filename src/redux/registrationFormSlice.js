import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  email: '',
  password: '',
  confirmPassword: '',
  error: '',
};

const registrationFormSlice = createSlice({
  name: 'registrationForm',
  initialState,
  reducers: {
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setPassword: (state, action) => {
      state.password = action.payload;
    },
    setConfirmPassword: (state, action) => {
      state.confirmPassword = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    clearForm: state => {
      state.email = '';
      state.password = '';
      state.confirmPassword = '';
      state.error = '';
    },
  },
});

export const {
  setEmail,
  setPassword,
  setConfirmPassword,
  setError,
  clearForm,
} = registrationFormSlice.actions;
export default registrationFormSlice.reducer;
