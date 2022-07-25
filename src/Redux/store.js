import { combineReducers, configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import filter from './filter/slice';
import auth from './auth/auth-slice';
import contacts from './contacts/contacts-slice';

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
  whitelist: ['token'],
};

const rootReducer = combineReducers({ auth, contacts, filter });

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

// import { configureStore } from '@reduxjs/toolkit';
// import { setupListeners } from '@reduxjs/toolkit/query';
// import { contactsApi } from 'Redux/contacts';
// import filter from 'Redux/filter/slice';

// export const store = configureStore({
//   reducer: { filter, [contactsApi.reducerPath]: contactsApi.reducer },
//   middleware: getDefaultMiddleware =>
//     getDefaultMiddleware().concat(contactsApi.middleware),
// });

// setupListeners(store.dispatch);
