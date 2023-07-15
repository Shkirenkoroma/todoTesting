import { configureStore } from '@reduxjs/toolkit';
import { notiesReducer } from './reducers';

export const store = configureStore({
  reducer: {
    todolist: notiesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
