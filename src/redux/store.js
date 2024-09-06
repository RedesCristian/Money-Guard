// store.js
import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // sau 'redux-persist/lib/storage/session' pentru stocare pe sesiune
import registrationFormReducer from './registrationFormSlice';
import authReducer from './authSlice'; // Asigură-te că ai un authSlice.js care definește reducerul pentru autentificare

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'], // specifică ce parte a stării de autentificare să fie persistentă
};

const persistedAuthReducer = persistReducer(authPersistConfig, authReducer);

export const store = configureStore({
  reducer: {
    registrationForm: registrationFormReducer,
    auth: persistedAuthReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
