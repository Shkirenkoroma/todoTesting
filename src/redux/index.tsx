import { configureStore } from '@reduxjs/toolkit';
import { notiesReducer } from './reducers';

export const store = configureStore({
  reducer: {
    noties: notiesReducer,
  },
});
