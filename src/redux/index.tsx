import { configureStore } from '@reduxjs/toolkit';
import { notiesReducer } from './reducers';

export const store = configureStore({
  reducer: {
    tasks: notiesReducer,
  },
});
